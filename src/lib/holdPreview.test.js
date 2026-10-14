import test from 'node:test';
import assert from 'node:assert/strict';
import { createHoldPreview } from './holdPreview.js';

function setup() {
  let pending = null;
  let visible = false;
  const hold = createHoldPreview({
    show: () => { visible = true; },
    hide: () => { visible = false; },
    schedule: (callback, delay) => { assert.equal(delay, 500); pending = callback; return 1; },
    clear: () => { pending = null; },
  });
  return { hold, elapsed: () => { const callback = pending; pending = null; callback?.(); }, visible: () => visible };
}
const touch = { pointerId: 1, pointerType: 'touch', isPrimary: true, clientX: 50, clientY: 50 };

test('quick tap navigates without playing a preview', () => {
  const s = setup();
  s.hold.down(touch);
  s.hold.up(touch);
  s.elapsed();
  assert.equal(s.visible(), false);
  assert.equal(s.hold.consumeClick(), false);
});
test('hold keeps playing after release and suppresses navigation exactly once', () => {
  const s = setup();
  s.hold.down(touch);
  s.elapsed();
  assert.equal(s.visible(), true);
  s.hold.up(touch);
  assert.equal(s.visible(), true);
  assert.equal(s.hold.consumeClick(), true);
  assert.equal(s.hold.consumeClick(), false);
});
test('scroll movement cancels the pending preview', () => {
  const s = setup();
  s.hold.down(touch);
  s.hold.move({ ...touch, clientY: 75 });
  s.elapsed();
  assert.equal(s.visible(), false);
  assert.equal(s.hold.consumeClick(), true);
});
test('small finger movements do not interrupt the hold', () => {
  const s = setup();
  s.hold.down(touch);
  s.hold.move({ ...touch, clientY: 53 });
  s.elapsed();
  assert.equal(s.visible(), true);
});
test('cancellation stops a playing preview and the next tap still works', () => {
  const s = setup();
  s.hold.down(touch);
  s.elapsed();
  s.hold.cancel();
  assert.equal(s.visible(), false);
  s.hold.down(touch);
  s.hold.up(touch);
  assert.equal(s.hold.consumeClick(), false);
});
test('mouse presses do not start a touch hold', () => {
  const s = setup();
  s.hold.down({ ...touch, pointerType: 'mouse' });
  s.elapsed();
  assert.equal(s.visible(), false);
  assert.equal(s.hold.consumeClick(), false);
});
test('another finger cancels the gesture', () => {
  const s = setup();
  s.hold.down(touch);
  s.hold.down({ ...touch, pointerId: 2, isPrimary: false });
  s.elapsed();
  assert.equal(s.visible(), false);
});

test('dragging after a hold keeps playback while allowing native scrolling', () => {
  const s = setup();
  s.hold.down(touch);
  s.elapsed();
  s.hold.move({ ...touch, clientY: 100 });
  s.hold.cancel(false); // Browser hands the pointer over to native scrolling.
  s.hold.up(touch);
  assert.equal(s.visible(), true);
  assert.equal(s.hold.consumeClick(), true);
});
test('scrolling after release keeps the preview until explicitly stopped', () => {
  const s = setup();
  s.hold.down(touch);
  s.elapsed();
  s.hold.up(touch);
  s.hold.cancel(false);
  assert.equal(s.visible(), true);
  s.hold.cancel(); // Card leaves the viewport or another preview starts.
  assert.equal(s.visible(), false);
});
