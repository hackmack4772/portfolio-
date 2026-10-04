/**
 * Stale-while-revalidate cache for the portfolio payload.
 *
 * Every visit used to cost eight Firestore document reads before the site
 * could render, for content that changes a few times a month. This keeps the
 * last good payload in localStorage so a returning visitor renders from disk
 * with no network round trip at all, and the database is only consulted once
 * the copy is actually old.
 *
 *   fresh   (< FRESH_MS)    serve cache, do not touch the network
 *   stale   (< MAX_AGE_MS)  serve cache immediately, revalidate in background
 *   expired (> MAX_AGE_MS)  ignore cache, fetch normally
 *
 * VERSION is part of the key: bump it whenever the shape of the payload
 * changes, and every client drops its old copy instead of rendering fields
 * the code no longer understands.
 */

// Bumped to 2: every client was holding a 6-hour-fresh copy from before the
// image fields were corrected, so the fix was invisible to anyone who had
// loaded the site recently. Raising this drops every existing cache entry.
const VERSION = 2;
const KEY = `hackmack:portfolio:v${VERSION}`;

// Short on purpose. The first version skipped the network entirely for six
// hours, which meant a content edit could not reach a returning visitor for
// six hours - there is no push channel to tell them otherwise. Ten minutes
// still collapses a burst of navigation into a single read, while keeping
// edits visible on roughly the next page load.
export const FRESH_MS = 10 * 60 * 1000;         // 10 minutes
export const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export const readCache = () => {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;

    const { at, data } = JSON.parse(raw);
    if (!at || !data) return null;

    const age = Date.now() - at;
    if (age < 0 || age > MAX_AGE_MS) {
      localStorage.removeItem(KEY);
      return null;
    }
    return { data, age, fresh: age < FRESH_MS };
  } catch {
    // Corrupt entry, private mode, or quota rules - treat as a miss.
    return null;
  }
};

export const writeCache = (data) => {
  try {
    localStorage.setItem(KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {
    // Over quota or storage blocked. The cache is an optimisation, never a
    // requirement, so failing to persist must not break the page.
  }
};

export const clearCache = () => {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
};

/**
 * Drop any cache written by an older VERSION, so bumping it does not leave
 * dead entries behind in every visitor's browser forever.
 */
export const pruneOldVersions = () => {
  try {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && k.startsWith("hackmack:portfolio:v") && k !== KEY) localStorage.removeItem(k);
    }
  } catch {
    /* ignore */
  }
};
