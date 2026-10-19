import { mobileVideoSources } from '../lib/mobileVideoSources.js';
import { useEffect, useRef, useState } from 'react';

// Share bandwidth with the visible content instead of downloading every film at once.
export default function ViewportVideo({ src, autoPlay = true, preload, ...props }) {
  const ref = useRef(null);
  // Choose once per mount so rotating or resizing never restarts a playing film.
  const [useMobileVideo] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches);
  const playbackSrc = useMobileVideo ? (mobileVideoSources.get(src) || src) : src;
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!('IntersectionObserver' in window)) {
      setNear(true);
      setVisible(true);
      return;
    }
    const loading = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setNear(true); loading.disconnect(); }
    }, { rootMargin: '300px' });
    const playback = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });
    loading.observe(video);
    playback.observe(video);
    return () => { loading.disconnect(); playback.disconnect(); };
  }, []);
  useEffect(() => {
    const video = ref.current;
    const sync = () => {
      if (!visible || document.hidden) video.pause();
      else if (near && autoPlay) video.play().catch(() => {});
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => { document.removeEventListener('visibilitychange', sync); video.pause(); };
  }, [near, visible, playbackSrc, autoPlay]);
  return <video {...props} ref={ref} data-viewport-managed="true"
    src={near ? playbackSrc : undefined} autoPlay={false} preload={near ? 'metadata' : 'none'} />;
}
