import React, { useState, useEffect } from "react";
import { resolveImage, STABLE_IMAGES } from "../../utils/images";

/**
 * An <img> that cannot leave a hole in the layout.
 *
 * Resolves the source through resolveImage - so an empty field, a leftover
 * "path-to-your-image" placeholder or a build-hashed /assets/ path is caught
 * before it ever reaches the network - and then, if the URL still fails to
 * load, swaps to a stable local file. Several images on this site are
 * hotlinked off third parties that will eventually stop serving them, and
 * the runtime fallback is what keeps that from showing as a broken image.
 *
 * Defaults to lazy, async decoding. Pass width/height where known so the
 * browser can reserve the space and avoid a layout shift.
 */
export default function SmartImage({
  src,
  alt = "",
  fallback = "avatar",
  className = "",
  loading = "lazy",
  decoding = "async",
  ...rest
}) {
  const initial = resolveImage(src, fallback);
  const [current, setCurrent] = useState(initial);
  const [failed, setFailed] = useState(false);

  // A new src from the database should be retried even if the previous one failed.
  useEffect(() => {
    setCurrent(resolveImage(src, fallback));
    setFailed(false);
  }, [src, fallback]);

  const handleError = () => {
    const local = STABLE_IMAGES[fallback] || STABLE_IMAGES.avatar;
    if (current !== local) {
      setCurrent(local);   // remote URL died - drop to the bundled copy
      return;
    }
    setFailed(true);       // even the local copy is gone; stop retrying
  };

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-card-base to-bg-sub ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-mono text-[10px] tracking-widest text-text-muted/60">
          {(alt || "image").toUpperCase().slice(0, 18)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={current}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      className={className}
      {...rest}
    />
  );
}
