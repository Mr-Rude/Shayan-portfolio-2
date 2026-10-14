// A hold is separate from a click. Moving cancels it so scrolling stays native.
export function createHoldPreview({ show, hide, schedule = setTimeout, clear = clearTimeout }) {
  let timer = null;
  let pointer = null;
  let held = false;
  let suppressClick = false;
  const stopTimer = () => { if (timer !== null) clear(timer); timer = null; };
  return {
    down(event) {
      this.cancel();
      if (!event.isPrimary || !['touch', 'pen'].includes(event.pointerType)) return;
      suppressClick = false;
      pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
      timer = schedule(() => {
        timer = null;
        held = true;
        suppressClick = true;
        show();
      }, 500);
    },
    move(event) {
      if (pointer?.id === event.pointerId && Math.hypot(event.clientX - pointer.x, event.clientY - pointer.y) > 10) this.cancel();
    },
    up(event) {
      if (pointer?.id !== event.pointerId) return;
      stopTimer();
      if (held) hide();
      held = false;
      pointer = null;
    },
    cancel() {
      if (pointer || held) suppressClick = true;
      stopTimer();
      pointer = null;
      held = false;
      hide();
    },
    consumeClick() {
      const result = suppressClick;
      suppressClick = false;
      return result;
    },
  };
}
