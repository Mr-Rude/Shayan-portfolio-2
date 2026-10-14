import test from 'node:test';
import assert from 'node:assert/strict';
import { selectVisibleVideo, switchVideoAudio } from './visibleVideo.js';

const viewport = { width: 390, height: 844, top: 60 };
function video(top, height = 400, playing = true, left = 0) {
  return {
    element: { getBoundingClientRect: () => ({ top, bottom: top + height, height, left, right: left + 300, width: 300 }) },
    isPlaying: () => playing,
    setMuted(value) { this.muted = value; },
  };
}

test('scrolling transfers sound and preserves offscreen playback', () => {
  const first = video(180);
  const second = video(1000);
  const items = [first, second];
  let active = selectVisibleVideo(items, viewport);
  switchVideoAudio(items, active);
  assert.equal(active, first);
  assert.equal(first.muted, false);
  assert.equal(second.muted, true);
  first.element = video(-500).element;
  second.element = video(180).element;
  active = selectVisibleVideo(items, viewport, active);
  switchVideoAudio(items, active);
  assert.equal(active, second);
  assert.equal(first.muted, true);
  assert.equal(second.muted, false);
  assert.ok(first.isPlaying());
});

test('two visible videos produce only one audio source', () => {
  const first = video(80, 300);
  const second = video(400, 300);
  const items = [first, second];
  switchVideoAudio(items, selectVisibleVideo(items, viewport));
  assert.equal(items.filter((item) => !item.muted).length, 1);
  assert.equal(second.muted, false);
});

test('side-by-side ties retain the current video', () => {
  const left = video(180);
  const right = video(180, 400, true, 190);
  assert.equal(selectVisibleVideo([left, right], viewport, right), right);
});

test('videos behind the header or barely visible remain silent', () => {
  assert.equal(selectVisibleVideo([video(-350), video(820)], viewport), null);
});

test('a portrait video taller than the viewport can have audio', () => {
  const portrait = video(-100, 1100);
  assert.equal(selectVisibleVideo([portrait], viewport), portrait);
});

test('paused videos do not take audio from a playing neighbor', () => {
  const paused = video(200, 400, false);
  const playing = video(450, 300);
  assert.equal(selectVisibleVideo([paused, playing], viewport), playing);
});

test('a hidden tab or a viewport without videos mutes everything', () => {
  const items = [video(180), video(1200)];
  switchVideoAudio(items, selectVisibleVideo(items, { ...viewport, hidden: true }));
  assert.ok(items.every((item) => item.muted));
  assert.equal(selectVisibleVideo([video(1200)], viewport), null);
});

test('old audio is muted before the next video is unmuted', () => {
  const operations = [];
  const next = { setMuted: (value) => operations.push(['next', value]) };
  const old = { setMuted: (value) => operations.push(['old', value]) };
  switchVideoAudio([next, old], next);
  assert.deepEqual(operations, [['old', true], ['next', false]]);
});
