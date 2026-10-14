import { useEffect, useMemo, useRef, useState } from 'react';
import { createHoldPreview } from '../lib/holdPreview.js';

export default function useHoldPreview(enabled) {
  const [active, setActive] = useState(false);
  const cardRef = useRef(null);
  const pointerType = useRef('mouse');
  const previewId = useRef(Symbol('card-preview'));
  const canPreview = () => enabled && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const show = () => {
    window.dispatchEvent(new CustomEvent('portfolio-preview-start', { detail: previewId.current }));
    setActive(true);
  };
  const hold = useMemo(() => createHoldPreview({
    show,
    hide: () => setActive(false),
  }), []);

  useEffect(() => {
    const stop = () => hold.cancel();
    // Cancel a pending hold when scrolling, but preserve an established preview.
    const scroll = () => hold.cancel(false);
    const anotherPreview = (event) => {
      if (event.detail !== previewId.current) stop();
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) stop();
    });
    if (cardRef.current) observer.observe(cardRef.current);
    window.addEventListener('scroll', scroll, { passive: true, capture: true });
    window.addEventListener('blur', stop);
    window.addEventListener('portfolio-preview-start', anotherPreview);
    document.addEventListener('visibilitychange', stop);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scroll, true);
      window.removeEventListener('blur', stop);
      window.removeEventListener('portfolio-preview-start', anotherPreview);
      document.removeEventListener('visibilitychange', stop);
      hold.cancel();
    };
  }, [hold]);

  return {
    active,
    cardRef,
    handlers: {
      onPointerEnter(event) {
        pointerType.current = event.pointerType;
        if (event.pointerType === 'mouse' && canPreview()) show();
      },
      onPointerDown(event) {
        pointerType.current = event.pointerType;
        if (event.pointerType !== 'mouse' && canPreview()) hold.down(event);
      },
      onPointerMove: (event) => hold.move(event),
      onPointerUp: (event) => hold.up(event),
      onPointerCancel: () => hold.cancel(false),
      onPointerLeave: (event) => hold.cancel(event.pointerType === 'mouse'),
      onFocus(event) {
        if (event.currentTarget.matches(':focus-visible') && canPreview()) show();
      },
      onBlur: () => hold.cancel(),
      onClick(event) {
        if (event.detail !== 0 && hold.consumeClick()) event.preventDefault();
      },
      onContextMenu(event) {
        if (canPreview() && pointerType.current !== 'mouse') event.preventDefault();
      },
      onDragStart(event) {
        if (enabled && pointerType.current !== 'mouse') event.preventDefault();
      },
    },
  };
}
