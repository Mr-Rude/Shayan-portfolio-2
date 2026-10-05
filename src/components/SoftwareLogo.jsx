import { Fragment, useState } from 'react';

/**
 * A floating software mark. Mouse and keyboard users see the preview on hover/focus (CSS).
 */
export default function SoftwareLogo({ cls, mark, label, title, lines, videoId, videoOrientation = 'portrait' }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const icon = typeof mark === 'string' ? (
    <img src={mark} alt={label} />
  ) : mark;

  return (
    <span
      tabIndex={0}
      className={`logo ${cls}${previewOpen ? ' is-preview-open' : ''}`}
      aria-label={label}
      onMouseEnter={() => videoId && setPreviewOpen(true)}
      onMouseLeave={() => videoId && setPreviewOpen(false)}
      onFocus={() => videoId && setPreviewOpen(true)}
      onBlur={(event) => {
        if (videoId && !event.currentTarget.contains(event.relatedTarget)) setPreviewOpen(false);
      }}
      onClick={() => {
        if (videoId && !window.matchMedia('(hover: hover)').matches) {
          setPreviewOpen((open) => !open);
        }
      }}
    >
      <span className="logo-mark" aria-hidden="true">{icon}</span>
      <span className="peek">
        {title}
        {videoId && previewOpen ? (
          <span className={`logo-preview-video logo-preview-video--${videoOrientation}`}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${videoId}&rel=0`}
              title={`${title} video preview`}
              allow="autoplay; encrypted-media; picture-in-picture"
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
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
            {!videoId && <span>▶ PREVIEW</span>}
          </>
        )}
      </span>
    </span>
  );
}
