import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { debugState, subscribeDebug, isDebugEnabled, setDebugEnabled } from "../../utils/debugBus";
import { forceUnlockScroll, scrollLockCount } from "../../utils/scrollLock";

/**
 * Live diagnostics panel. Off unless ?debug=1 is in the URL, or it has been
 * toggled on with Ctrl+Shift+D (remembered in localStorage).
 *
 * It reports the things that have actually gone wrong on this site rather
 * than generic stats: whether the body scroll lock has been stranded, how
 * many drawers/overlays are mounted at once, whether the two background rAF
 * loops are running, and which components are re-rendering continuously.
 */
export default function DebugHUD() {
  const [on, setOn] = useState(isDebugEnabled);
  const [, force] = useState(0);
  const fpsRef = useRef({ frames: 0, last: performance.now(), value: 0 });

  // Ctrl+Shift+D toggle
  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "D" || e.key === "d")) {
        e.preventDefault();
        setOn((prev) => {
          setDebugEnabled(!prev);
          return !prev;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!on) return;
    return subscribeDebug(() => force((n) => n + 1));
  }, [on]);

  // Independent frame counter - if this drops while nothing is animating,
  // something is pinning the main thread.
  useEffect(() => {
    if (!on) return;
    let raf;
    const tick = () => {
      const s = fpsRef.current;
      s.frames += 1;
      const now = performance.now();
      if (now - s.last >= 1000) {
        s.value = Math.round((s.frames * 1000) / (now - s.last));
        s.frames = 0;
        s.last = now;
        force((n) => n + 1);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [on]);

  if (!on || typeof document === "undefined") return null;

  const overflow = document.body.style.overflow || "(none)";
  const stranded = scrollLockCount() > 0 && debugState.drawersMounted === 0 && debugState.overlaysMounted === 0;

  const Row = ({ label, value, warn }) => (
    <div className="flex justify-between gap-3">
      <span className="text-white/45">{label}</span>
      <span className={warn ? "text-red-400 font-bold" : "text-[#4ade80]"}>{String(value)}</span>
    </div>
  );

  return createPortal(
    <div
      style={{ zIndex: 2147483000 }}
      className="fixed bottom-2 left-2 w-[232px] rounded-lg border border-white/15 bg-black/90 p-2.5 font-mono text-[10px] leading-relaxed text-white/80 shadow-2xl"
    >
      <div className="mb-1.5 flex items-center justify-between border-b border-white/10 pb-1">
        <span className="font-bold tracking-wider text-[#0cfbff]">DEBUG</span>
        <button
          onClick={() => { setDebugEnabled(false); setOn(false); }}
          className="text-white/40 hover:text-white"
          aria-label="Close debug panel"
        >
          ×
        </button>
      </div>

      <Row label="fps" value={fpsRef.current.value} warn={fpsRef.current.value > 0 && fpsRef.current.value < 30} />
      <Row label="body.overflow" value={overflow} warn={overflow === "hidden" && stranded} />
      <Row label="scrollLocks" value={scrollLockCount()} warn={stranded} />
      <Row label="bgPauseCount" value={debugState.bgPauseCount} warn={stranded && debugState.bgPauseCount > 0} />
      <Row label="drawers mounted" value={debugState.drawersMounted} warn={debugState.drawersMounted > 1} />
      <Row label="overlays mounted" value={debugState.overlaysMounted} warn={debugState.overlaysMounted > 1} />
      <Row label="rAF three" value={debugState.threeRunning ? "running" : "paused"} />
      <Row label="rAF particles" value={debugState.particlesRunning ? "running" : "paused"} />

      <div className="mt-1.5 border-t border-white/10 pt-1">
        <div className="mb-0.5 text-white/35">renders</div>
        {Object.entries(debugState.renders)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([k, v]) => (
            <Row key={k} label={`  ${k}`} value={v} warn={v > 400} />
          ))}
      </div>

      {stranded && (
        <div className="mt-2 rounded border border-red-500/40 bg-red-500/10 p-1.5 text-red-300">
          Scroll lock stranded with nothing open.
          <button
            onClick={() => { forceUnlockScroll(); force((n) => n + 1); }}
            className="mt-1 block w-full rounded border border-red-500/50 py-0.5 font-bold hover:bg-red-500/20"
          >
            force unlock
          </button>
        </div>
      )}

      <div className="mt-1.5 text-[9px] text-white/25">ctrl+shift+D toggles</div>
    </div>,
    document.body
  );
}
