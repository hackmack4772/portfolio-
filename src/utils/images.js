/**
 * Image resolution.
 *
 * Three kinds of image URL exist in this project and they behave differently:
 *
 *   public/foo.png      ->  /foo.png
 *       Copied verbatim into the build. The URL never changes, so it is the
 *       only kind that is safe to store in the database.
 *
 *   src/Assets/foo.png  ->  /assets/foo-Dg91_tLu.png
 *       Content-hashed by Vite, so it gets a NEW URL on every build whose
 *       content differs. Fine when imported in code - Vite rewrites the
 *       reference - but storing one of these in Firestore guarantees a broken
 *       image after the next deploy. That is what "the image changes on every
 *       build" means.
 *
 *   https://...         ->  someone else's server
 *       Stable only for as long as they feel like hosting it. Several of the
 *       education entries are hotlinked off collegedunia, jdmagicbox and
 *       Google's encrypted-tbn cache; the last of those is explicitly
 *       temporary and will expire on its own.
 *
 * So: every image goes through resolveImage, every <img> goes through
 * SmartImage, and a URL that dies falls back to a local file instead of
 * leaving a hole in the layout.
 */

/** Files in public/ - these URLs are stable across every build. */
export const STABLE_IMAGES = {
  avatar: "/avatar_hacker.png",
  photo: "/avatar.jpeg",
  hud: "/developer_hud.png",
  heroBg: "/home_bg_hacker.png",
};

/**
 * True for a Vite build artefact, i.e. /assets/<name>-<hash>.<ext>.
 * Such a URL must never be persisted: the hash changes whenever the file's
 * content does, and the old path 404s immediately after the next deploy.
 */
export const isHashedAssetUrl = (url) =>
  /^\/?assets\/[^/]+-[A-Za-z0-9_-]{8,}\.[a-z0-9]+$/i.test(String(url || "").replace(/^https?:\/\/[^/]+/, ""));

const isUsable = (url) => {
  const u = String(url || "").trim();
  if (!u) return false;
  if (u.includes("path-to-your-image")) return false;  // placeholder left by the old seed data
  if (u === "#") return false;
  // A hashed /assets/ path is not rejected here: it is valid when it comes
  // from an in-code import, and only a problem when it has been persisted
  // and then gone stale - which SmartImage's onError handler catches.
  return true;
};

/**
 * Pick the first usable URL, falling back to a stable local file.
 * @param {string}   url      whatever the database holds
 * @param {string}   fallback a key of STABLE_IMAGES, or an explicit path
 */
export const resolveImage = (url, fallback = "avatar") => {
  if (isUsable(url)) return String(url).trim();
  return STABLE_IMAGES[fallback] || fallback || STABLE_IMAGES.avatar;
};
