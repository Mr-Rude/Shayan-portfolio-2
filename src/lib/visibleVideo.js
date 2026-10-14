// Pick one playing video near the middle of the usable viewport. Require a
// meaningful visible portion, including for videos taller than a phone screen.
export function selectVisibleVideo(items, { width, height, top = 0, hidden = false }, current = null) {
  if (hidden || height <= top) return null;
  const center = (top + height) / 2;
  let best = null;
  let bestDistance = Infinity;
  for (const item of items) {
    if (!item.isPlaying()) continue;
    const rect = item.element.getBoundingClientRect();
    const visibleHeight = Math.max(0, Math.min(rect.bottom, height) - Math.max(rect.top, top));
    const visibleWidth = Math.max(0, Math.min(rect.right, width) - Math.max(rect.left, 0));
    if (rect.height <= 0 || rect.width <= 0 || visibleWidth === 0 ||
        visibleHeight < Math.min(rect.height, height - top) * .35) continue;
    // Keep the current player on near ties, including side-by-side videos.
    const distance = Math.abs((rect.top + rect.bottom) / 2 - center) - (item === current ? 24 : 0);
    if (distance < bestDistance) {
      best = item;
      bestDistance = distance;
    }
  }
  return best;
}

export function switchVideoAudio(items, active) {
  // Silence the old source before allowing sound from the next one.
  for (const item of items) if (item !== active) item.setMuted(true);
  if (active) active.setMuted(false);
}
