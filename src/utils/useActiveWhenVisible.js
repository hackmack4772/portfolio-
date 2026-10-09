import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isActive]. `isActive` is true only while the referenced
 * element is near the viewport AND the tab is foregrounded.
 *
 * Attach the ref to whatever a setInterval or rAF loop is driving, so the
 * loop can be suspended while it is scrolled past or the tab is in the
 * background. A ticker that keeps re-rendering its whole page off-screen is
 * pure battery drain.
 */
export default function useActiveWhenVisible({ rootMargin = "150px" } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isForeground, setIsForeground] = useState(
    typeof document === "undefined" ? true : !document.hidden
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    const onVisibility = () => setIsForeground(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return [ref, isVisible && isForeground];
}
