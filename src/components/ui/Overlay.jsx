import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { pauseBackgrounds, resumeBackgrounds } from "../../utils/backgroundAnimation";

/**
 * Full-screen modal backdrop, rendered through a portal into document.body.
 *
 * The portal is the whole point. MainLayout carries `isolate`
 * (isolation: isolate), which makes it a stacking context with z-index auto.
 * Everything rendered inside it is therefore painted as one unit at level 0
 * of the root stacking context, no matter what z-index the child asks for -
 * while the navbar's <Header> sits at z-50 in that same root context. A
 * modal rendered inside MainLayout can never come out above the navbar;
 * bumping its z-index to z-[9999] changes nothing, because the cap is the
 * parent's stacking context, not the value.
 *
 * Portalling to document.body takes the element out of MainLayout entirely,
 * so Z_INDEX below is compared against the navbar directly.
 */

// Above the navbar (z-50) and the mobile drawer (z-45/z-50), below the
// boot Preloader (z-[999999]).
const Z_INDEX = 120;

export default function Overlay({ children, className = "", lockScroll = true }) {
  // A full-screen modal that lets the page scroll underneath also means the
  // backdrop-filter above it has to re-resolve on every scroll frame, which
  // is the same compositing trap that froze the mobile drawer.
  useEffect(() => {
    // The background canvases are fully covered by this overlay, so keep
    // their rAF loops suspended for as long as it is up.
    pauseBackgrounds();
    return resumeBackgrounds;
  }, []);

  useEffect(() => {
    if (!lockScroll) return;

    const { body } = document;
    const previous = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = previous;
    };
  }, [lockScroll]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      style={{ zIndex: Z_INDEX }}
      className={`fixed inset-0 w-full h-full flex items-center justify-center p-4 ${className}`}
    >
      {children}
    </div>,
    document.body
  );
}
