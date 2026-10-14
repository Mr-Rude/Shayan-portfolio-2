import { useEffect, useMemo, useRef, useState } from 'react';
import { createHoldPreview } from '../lib/holdPreview.js';

export default function useHoldPreview(enabled) {
  const [active, setActive] = useState(false);
  const pointerType = useRef('mouse');
  const canPreview = () => enabled && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hold = useMemo(() => createHoldPreview({
    show: () => setActive(true),
    hide: () => setActive(false),
  }), []);

  useEffect(() => {
    const stop = () => hold.cancel();
    window.addEventListener('scroll', stop, { passive: true, capture: true });
    window.addEventListener('blur', stop);
    document.addEventListener('visibilitychange', stop);
    return () => {
      window.removeEventListener('scroll', stop, true);
      window.removeEventListener('blur', stop);
      document.removeEventListener('visibilitychange', stop);
      hold.cancel();
    };
  }, [hold]);

  return {
    active,
    handlers: {
      onPointerEnter(event) {
        pointerType.current = event.pointerType;
        if (event.pointerType === 'mouse' && canPreview()) setActive(true);
      },
      onPointerDown(event) {
        pointerType.current = event.pointerType;
        if (event.pointerType !== 'mouse' && canPreview()) hold.down(event);
      },
      onPointerMove: (event) => hold.move(event),
      onPointerUp: (event) => hold.up(event),
      onPointerCancel: () => hold.cancel(),
      onPointerLeave: () => hold.cancel(),
      onFocus(event) {
        if (event.currentTarget.matches(':focus-visible') && canPreview()) setActive(true);
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
