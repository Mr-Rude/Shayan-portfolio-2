import ViewportVideo from './ViewportVideo.jsx';
import { Fragment, useEffect, useRef, useState } from 'react';

/**
 * A floating software mark. Mouse and keyboard users see the preview on hover/focus (CSS).
 */
export default function SoftwareLogo({ cls, mark, label, title, lines, videoId, videoSrc, videoOrientation = 'portrait' }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const hasVideo = Boolean(videoId || videoSrc);
  const iconRef = useRef(null);
  const pointer = useRef('mouse');
  const openPreview = () => {
    window.dispatchEvent(new CustomEvent('software-preview-open', { detail: iconRef.current }));
    setPreviewOpen(true);
  };
  useEffect(() => {
    if (!previewOpen) return;
    const close = () => setPreviewOpen(false);
    const outside = (event) => { if (!iconRef.current?.contains(event.target)) close(); };
    const other = (event) => { if (event.detail !== iconRef.current) close(); };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('scroll', close, { capture: true, passive: true });
    document.addEventListener('touchmove', close, { passive: true });
    window.addEventListener('software-preview-open', other);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('scroll', close, true);
      document.removeEventListener('touchmove', close);
      window.removeEventListener('software-preview-open', other);
    };
  }, [previewOpen]);
  const icon = typeof mark === 'string' ? (
    <img src={mark} alt={label} />
  ) : mark;

  return (
    <span
      tabIndex={0}
      className={`logo ${cls}${previewOpen ? ' is-preview-open' : ''}`}
      aria-label={label}
      ref={iconRef}
      role="button"
      aria-expanded={previewOpen}
      onPointerDown={(event) => { pointer.current = event.pointerType; }}
      onPointerEnter={(event) => { if (event.pointerType === 'mouse') openPreview(); }}
      onPointerLeave={(event) => { if (event.pointerType === 'mouse') setPreviewOpen(false); }}
      onClick={() => {
        if (pointer.current !== 'mouse') {
          if (previewOpen) setPreviewOpen(false);
          else openPreview();
        }
      }}
      onFocus={(event) => { if (event.currentTarget.matches(':focus-visible')) openPreview(); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPreviewOpen(false); }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') setPreviewOpen(false);
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          if (previewOpen) setPreviewOpen(false); else openPreview();
        }
      }}
    >
      <span className="logo-mark" aria-hidden="true">{icon}</span>
      <span className="peek">
        {title}
        {hasVideo && previewOpen ? (
          <span className={`logo-preview-video logo-preview-video--${videoOrientation}`}>
            {videoSrc ? (
              <ViewportVideo src={videoSrc} title={`${title} video preview`} autoPlay muted loop playsInline preload="none" />
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${videoId}&rel=0`}
                title={`${title} video preview`}
                allow="autoplay; encrypted-media; picture-in-picture"
                loading="eager"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </span>
        ) : (
          <>
            <small>
              {lines.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </small>
            {!hasVideo && <span>▶ PREVIEW</span>}
          </>
        )}
      </span>
    </span>
  );
}
