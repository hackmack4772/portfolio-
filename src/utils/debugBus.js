/**
 * Tiny instrumentation bus for the debug HUD.
 *
 * Deliberately dependency-free and side-effect-light so it can be called
 * from render paths and rAF loops without changing their behaviour. When the
 * HUD is not mounted nothing subscribes and this is just object writes.
 *
 * Enable the HUD with ?debug=1 in the URL, or Ctrl+Shift+D at any time.
 */

export const debugState = {
  scrollLocks: 0,
  scrollLockCalls: 0,
  bgPauseCount: 0,
  threeRunning: false,
  particlesRunning: false,
  drawersMounted: 0,
  overlaysMounted: 0,
  renders: {},
  fps: 0,
};

const listeners = new Set();
let scheduled = false;

// Coalesce notifications to one per frame - the HUD must not become a
// performance problem of its own while diagnosing one.
const notify = () => {
  if (scheduled || listeners.size === 0) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    listeners.forEach((fn) => {
      try {
        fn(debugState);
      } catch {
        /* ignore */
      }
    });
  });
};

export const setDebug = (key, value) => {
  debugState[key] = value;
  notify();
};

export const bumpDebug = (key, by = 1) => {
  debugState[key] = (debugState[key] || 0) + by;
  notify();
};

export const countRender = (name) => {
  debugState.renders[name] = (debugState.renders[name] || 0) + 1;
  notify();
};

export const subscribeDebug = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const isDebugEnabled = () => {
  if (typeof window === "undefined") return false;
  try {
    if (new URLSearchParams(window.location.search).has("debug")) return true;
    return window.localStorage.getItem("hackmack:debug") === "1";
  } catch {
    return false;
  }
};

export const setDebugEnabled = (on) => {
  try {
    window.localStorage.setItem("hackmack:debug", on ? "1" : "0");
  } catch {
    /* private mode */
  }
};
