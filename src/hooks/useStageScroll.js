import { useCallback, useEffect, useRef } from 'react';

const DESKTOP = '(min-width: 761px)';
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function navHeight() {
  return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 0;
}

function topOf(el) {
  return el.getBoundingClientRect().top + window.scrollY - navHeight();
}

/**
 * Desktop homepage behaviour: each wheel notch or arrow/page key moves exactly one
 * `.home-stage` (intro, six project stages, about, contact). Phones scroll normally.
 * Returns `go(el, smooth)` so the router can jump to a stage.
 */
export default function useStageScroll(containerRef) {
  const locked = useRef(0);
  const lastWheel = useRef(0);

  const stages = useCallback(
    () => Array.from(containerRef.current?.querySelectorAll('.home-stage') ?? []),
    [containerRef]
  );

  const go = useCallback((el, smooth = false) => {
    if (!el) return;
    locked.current = performance.now() + (smooth ? 650 : 120);
    const animate = smooth && !window.matchMedia(REDUCED_MOTION).matches;
    window.scrollTo({ top: topOf(el), behavior: animate ? 'smooth' : 'instant' });
  }, []);

  useEffect(() => {
    const active = () => containerRef.current && window.matchMedia(DESKTOP).matches;

    const nearest = (list) =>
      list.reduce(
        (best, el, i) => (Math.abs(topOf(el) - window.scrollY) < Math.abs(topOf(list[best]) - window.scrollY) ? i : best),
        0
      );

    const onWheel = (e) => {
      if (!active() || e.ctrlKey || !e.deltaY || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      const now = performance.now();
      const gap = now - lastWheel.current;
      lastWheel.current = now;
      // Swallow trackpad momentum while a stage transition is running.
      if (now < locked.current || (gap < 160 && now < locked.current + 150)) {
        e.preventDefault();
        return;
      }
      const list = stages();
      const i = nearest(list);
      const next = Math.max(0, Math.min(list.length - 1, i + Math.sign(e.deltaY)));
      if (next === i) return;
      e.preventDefault();
      go(list[next], true);
    };

    const onKey = (e) => {
      if (!active() || e.ctrlKey || e.altKey || e.metaKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      const d = ['ArrowDown', 'PageDown'].includes(e.key) ? 1 : ['ArrowUp', 'PageUp'].includes(e.key) ? -1 : 0;
      if (!d) return;
      const list = stages();
      const i = nearest(list);
      const next = Math.max(0, Math.min(list.length - 1, i + d));
      if (next !== i) {
        e.preventDefault();
        if (performance.now() > locked.current) go(list[next], true);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, [containerRef, go, stages]);

  return go;
}
