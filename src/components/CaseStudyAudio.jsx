import { useEffect, useRef, useState } from 'react';
import { selectVisibleVideo, switchVideoAudio } from '../lib/visibleVideo.js';
import '../styles/case-study-audio.css';

let youtubeAPI;
function loadYouTubeAPI() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!youtubeAPI) {
    youtubeAPI = new Promise((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        resolve(window.YT);
      };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.onerror = () => { youtubeAPI = null; reject(new Error('YouTube API unavailable')); };
      document.head.append(script);
    });
  }
  return youtubeAPI;
}

export default function CaseStudyAudio() {
  const [needsTap, setNeedsTap] = useState(false);
  const enableSound = useRef(() => {});

  useEffect(() => {
    const root = document.getElementById('project');
    if (!root) return;
    const items = [];
    const cleanups = [];
    let active = null;
    let disposed = false;
    let frame = 0;

    function update() {
      frame = 0;
      if (disposed) return;
      const next = selectVisibleVideo(items, {
        width: window.innerWidth,
        height: window.innerHeight,
        top: document.querySelector('header')?.getBoundingClientRect().bottom ?? 0,
        hidden: document.hidden,
      }, active);
      if (next !== active) {
        active = next;
        switchVideoAudio(items, active);
      }
      for (const item of items) if (item !== active) item.setMuted(true);
      setNeedsTap(Boolean(active?.blocked));
    }
    function schedule() {
      if (!disposed && !frame) frame = requestAnimationFrame(update);
    }
    function listen(target, event, callback) {
      target.addEventListener(event, callback, { passive: true });
      cleanups.push(() => target.removeEventListener(event, callback));
    }

    // Apply these defaults centrally so new case studies inherit autoplay.
    // Only initialize once; later user pauses must remain respected.
    const registeredVideos = new WeakSet();
    function registerVideo(video) {
      if (registeredVideos.has(video)) return;
      registeredVideos.add(video);
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      if (video.dataset.viewportManaged !== 'true') {
        video.autoplay = true;
        video.play().catch(() => {});
      } // Native controls remain available if playback is blocked.
      if (video.dataset.audioDisabled === 'true') {
        const keepMuted = () => { if (!video.muted) video.muted = true; };
        keepMuted();
        listen(video, 'volumechange', keepMuted);
        return;
      }
      let started = !video.paused;
      let attemptingSound = false;
      let expectedMuted = true;
      let manuallyMuted = false;
      const item = {
        element: video,
        blocked: false,
        isPlaying: () => video.isConnected && !video.ended && (!video.paused || attemptingSound || (video.autoplay && !started)),
        setMuted(muted) {
          const desired = muted || manuallyMuted || item.blocked;
          if (video.muted === desired) return;
          expectedMuted = desired;
          video.muted = desired;
          if (!desired) {
            // Unmuting may pause playback on mobile. Restore muted autoplay
            // if the browser rejects sound, and offer a real tap to enable it.
            attemptingSound = true;
            video.play().then(() => {
              attemptingSound = false;
              if (disposed || active !== item) {
                expectedMuted = true;
                video.muted = true;
              }
              schedule();
            }).catch((error) => {
              attemptingSound = false;
              if (disposed) return;
              if (error.name === 'NotAllowedError') item.blocked = true;
              expectedMuted = true;
              video.muted = true;
              if (error.name === 'NotAllowedError') video.play().catch(() => {});
              schedule();
            });
          }
        },
        enable() {
          item.blocked = false;
          manuallyMuted = false;
          item.setMuted(false);
        },
      };
      video.muted = true;
      items.push(item);
      listen(video, 'playing', () => { started = true; schedule(); });
      listen(video, 'pause', schedule);
      listen(video, 'ended', schedule);
      listen(video, 'volumechange', () => {
        if (video.muted === expectedMuted) return;
        manuallyMuted = video.muted;
        expectedMuted = video.muted;
        if (!video.muted) {
          item.blocked = false;
          if (active !== item) {
            expectedMuted = true;
            video.muted = true;
          }
        }
        schedule();
      });
    }

    for (const video of root.querySelectorAll('video')) registerVideo(video);
    // Also initialize videos inserted later by a project gallery or lazy section.
    const mediaObserver = new MutationObserver(() => {
      for (const video of root.querySelectorAll('video')) registerVideo(video);
      schedule();
    });
    mediaObserver.observe(root, { childList: true, subtree: true });
    const embeds = [...root.querySelectorAll('iframe[src*="youtube-nocookie.com/embed/"]')];
    if (embeds.length) loadYouTubeAPI().then((YT) => {
      if (disposed) return;
      for (const iframe of embeds) {
        const audioDisabled = iframe.dataset.audioDisabled === 'true';
        let ready = false;
        let muted = true;
        const item = {
          element: iframe,
          blocked: false,
          isPlaying: () => !audioDisabled && ready && player.getPlayerState() === YT.PlayerState.PLAYING,
          setMuted(value) {
            if (audioDisabled) value = true;
            if (!ready || (value === muted && !value)) return;
            muted = value;
            if (value || item.blocked) player.mute();
            else player.unMute();
          },
          enable() { item.blocked = false; muted = true; item.setMuted(false); player.playVideo(); },
        };
        const player = new YT.Player(iframe, { events: {
          onReady() { ready = true; player.mute(); if (!disposed) player.playVideo(); schedule(); },
          onStateChange() { if (audioDisabled && ready) player.mute(); schedule(); },
          onAutoplayBlocked() {
            item.blocked = true;
            player.mute();
            player.playVideo();
            schedule();
          },
        } });
        items.push(item);
        // React owns the iframe. Mute on cleanup without destroying its DOM.
        cleanups.push(() => { if (ready) player.mute(); });
      }
      schedule();
    }).catch(() => {}); // The standard embedded player remains available.

    enableSound.current = () => { active?.enable(); schedule(); };
    listen(window, 'scroll', schedule);
    listen(window, 'resize', schedule);
    listen(document, 'visibilitychange', update);
    listen(document, 'fullscreenchange', schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(root);
    update();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      mediaObserver.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      items.forEach((item) => item.setMuted(true));
      enableSound.current = () => {};
    };
  }, []);

  return needsTap ? (
    <button className="case-study-sound" onClick={() => enableSound.current()}>
      Turn sound on
    </button>
  ) : null;
}
