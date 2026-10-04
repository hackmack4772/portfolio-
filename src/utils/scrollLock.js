import { bumpDebug, setDebug } from "./debugBus";

/**
 * Refcounted body scroll lock.
 *
 * The naive version - capture body.style.overflow at mount, restore it at
 * unmount - breaks as soon as two lockers overlap, which happens whenever a
 * drawer is reopened during its own exit animation:
 *
 *   A locks   previous = ""        overflow = "hidden"
 *   B locks   previous = "hidden"  overflow = "hidden"   <- captured a lock
 *   A unlocks restore ""
 *   B unlocks restore "hidden"                           <- locked forever
 *
 * The page then cannot scroll at all and looks hung. So the original value
 * is captured once, on the transition from zero locks to one, and restored
 * once, on the transition back to zero. Extra unlocks are harmless.
 */

let locks = 0;
let original = null;

export const lockScroll = () => {
  if (typeof document === "undefined") return;
  locks += 1;
  if (locks === 1) {
    original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  setDebug("scrollLocks", locks);
  bumpDebug("scrollLockCalls");
};

export const unlockScroll = () => {
  if (typeof document === "undefined") return;
  if (locks === 0) return;
  locks -= 1;
  if (locks === 0) {
    document.body.style.overflow = original ?? "";
    original = null;
  }
  setDebug("scrollLocks", locks);
};

/**
 * Last-resort release. Any path that can strand a lock (a component that
 * never unmounts, a thrown error mid-effect) would otherwise leave the page
 * permanently unscrollable, which is far worse than a missing lock.
 */
export const forceUnlockScroll = () => {
  if (typeof document === "undefined") return;
  locks = 0;
  document.body.style.overflow = original ?? "";
  original = null;
  setDebug("scrollLocks", 0);
};

export const scrollLockCount = () => locks;

// A stranded lock survives client-side navigation, so clear it on a real
// page load as a floor.
if (typeof window !== "undefined") {
  window.addEventListener("pageshow", forceUnlockScroll);
}
