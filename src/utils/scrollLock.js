import { bumpDebug, setDebug } from "./debugBus";

/**
 * Refcounted body scroll lock that also works on iOS Safari.
 *
 * `body { overflow: hidden }` is enough for Chrome and Firefox, but WebKit
 * has never honoured it for touch scrolling. On iOS the page therefore kept
 * scrolling behind an open drawer, touch scroll chained between the document
 * and the drawer's own overflow-y-auto area, and the two ended up disagreeing
 * about the scroll position - which read as the drawer freezing. That is why
 * the bug only ever reproduced in Safari.
 *
 * The portable technique is to take the body out of flow with
 * `position: fixed` and offset it by the current scroll position, then put
 * the scroll position back on release.
 *
 * Refcounted, because the naive capture-at-mount / restore-at-unmount version
 * breaks as soon as two lockers overlap - a drawer reopened during its own
 * exit animation captures the locked state and restores it, leaving the page
 * permanently stuck. The original styles are captured once on 0 -> 1 and
 * restored once on 1 -> 0.
 */

let locks = 0;
let saved = null;

export const lockScroll = () => {
  if (typeof document === "undefined") return;
  locks += 1;
  setDebug("scrollLocks", locks);
  bumpDebug("scrollLockCalls");
  if (locks !== 1) return;

  const { body } = document;
  const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
  // Taking the body out of flow removes the scrollbar on desktop, which would
  // shift the layout; pad by exactly its width to hold everything still.
  const scrollbar = window.innerWidth - document.documentElement.clientWidth;

  saved = {
    overflow: body.style.overflow,
    position: body.style.position,
    top: body.style.top,
    left: body.style.left,
    right: body.style.right,
    width: body.style.width,
    paddingRight: body.style.paddingRight,
    scrollY,
  };

  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
  if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
};

const restore = () => {
  const { body } = document;
  const scrollY = saved ? saved.scrollY : 0;

  body.style.overflow = saved?.overflow ?? "";
  body.style.position = saved?.position ?? "";
  body.style.top = saved?.top ?? "";
  body.style.left = saved?.left ?? "";
  body.style.right = saved?.right ?? "";
  body.style.width = saved?.width ?? "";
  body.style.paddingRight = saved?.paddingRight ?? "";
  saved = null;

  // html has scroll-behavior: smooth, so a plain scrollTo would animate the
  // page back into place and look like a glitch. This has to be immediate.
  try {
    window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
  } catch {
    window.scrollTo(0, scrollY);
  }
};

export const unlockScroll = () => {
  if (typeof document === "undefined" || locks === 0) return;
  locks -= 1;
  setDebug("scrollLocks", locks);
  if (locks === 0) restore();
};

/**
 * Last-resort release. Any path that can strand a lock would otherwise leave
 * the page permanently unscrollable, which is far worse than a missing lock.
 */
export const forceUnlockScroll = () => {
  if (typeof document === "undefined") return;
  locks = 0;
  setDebug("scrollLocks", 0);
  if (saved) restore();
};

export const scrollLockCount = () => locks;

// A stranded lock would otherwise survive client-side navigation.
if (typeof window !== "undefined") {
  window.addEventListener("pageshow", forceUnlockScroll);
}
