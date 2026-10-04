/**
 * A single switch for the always-on background animation loops.
 *
 * The home page is the only route that runs two full-viewport
 * requestAnimationFrame loops at once: ThreeBackground (WebGL, LandingPage
 * only) and CanvasParticles (2D canvas, mounted for every route by
 * MainLayout). Every other route runs just the one. That is why the mobile
 * menu stutters specifically on home - the main thread never gets an idle
 * frame to run the drawer's transition in.
 *
 * While a full-screen overlay is up, both canvases are completely hidden
 * behind it, so continuing to render them is pure waste. Overlays acquire a
 * pause here on mount and release it on unmount; the loops suspend and
 * resume with no visible difference.
 *
 * This is a refcount rather than a boolean so overlapping overlays (drawer
 * plus console, say) cannot resume the loops early.
 */

let pauseCount = 0;
const listeners = new Set();

const notify = () => {
  const paused = pauseCount > 0;
  listeners.forEach((fn) => {
    try {
      fn(paused);
    } catch {
      /* a broken listener must not take the others down */
    }
  });
};

export const pauseBackgrounds = () => {
  pauseCount += 1;
  if (pauseCount === 1) notify();
};

export const resumeBackgrounds = () => {
  pauseCount = Math.max(0, pauseCount - 1);
  if (pauseCount === 0) notify();
};

export const backgroundsPaused = () => pauseCount > 0;

/** Subscribe to pause/resume. Returns an unsubscribe function. */
export const onBackgroundPauseChange = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};
