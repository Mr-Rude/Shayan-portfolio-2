import useHoldPreview from '../hooks/useHoldPreview.js';
import '../styles/hold-preview.css';
import '../styles/cave.css';
const pad = (n) => String(n).padStart(2, '0');

/**
 * Project card used on the homepage (16:9 or 9:16) and the portfolio grid (square).
 */
export default function ProjectCard({ project, index, square = false, homepage = false }) {
  const hasHoldPreview = square && Boolean(project.portfolioVideoSrc);
  const { active: previewActive, cardRef, handlers } = useHoldPreview(hasHoldPreview);
  const shape = square ? 'portfolio-card' : project.format === 'wide' ? 'wide' : '';
  const ratio = square ? '1:1' : project.format === 'wide' ? '16:9' : '9:16';
  const placeholder = index > 7 ? 'ADDITIONAL PROJECT PLACEHOLDER' : 'PROJECT MEDIA PLACEHOLDER';
  const showVideo = homepage && Boolean(project.videoId || project.homeVideoSrc);
  const hasThumbnail = square && Boolean(project.thumbnailUrl);
  const cropThumbnail16x9 = hasThumbnail && project.thumbnailCrop16x9;

  return (
    <a
      ref={cardRef}
      {...handlers}
      href={`#/project/${project.caseStudyRouteId || project.id}`}
      className={['card', shape, hasHoldPreview && 'has-hold-preview', previewActive && 'is-previewing', project.tone, showVideo && 'video-preview', hasThumbnail && 'has-thumbnail', hasThumbnail && project.thumbnailFit === 'contain' && 'thumbnail-contain', hasThumbnail && project.thumbnailBackground && 'has-thumbnail-background', hasThumbnail && project.thumbnailLetterbox && 'thumbnail-letterbox', cropThumbnail16x9 && 'thumbnail-crop-16x9'].filter(Boolean).join(' ')}
      aria-label={`${project.title}, view case study`}
    >
      <div className="art" />
      {hasThumbnail && project.thumbnailBackground && <img className="card-thumbnail-background" src={project.thumbnailUrl} alt="" loading="lazy" referrerPolicy="no-referrer" />}
      {cropThumbnail16x9 ? (
        <span className="card-thumbnail-frame">
          <img className="card-thumbnail" src={project.thumbnailUrl} alt="" loading="lazy" referrerPolicy="no-referrer" />
        </span>
      ) : hasThumbnail ? (
        <img className="card-thumbnail" src={project.thumbnailUrl} alt="" loading="lazy" referrerPolicy="no-referrer" />
      ) : null}
      {square && project.portfolioVideoSrc && previewActive && <video className="portfolio-film-preview" src={project.portfolioVideoSrc} poster={project.thumbnailUrl} autoPlay muted loop playsInline aria-hidden="true" />}
      {showVideo && project.homeVideoSrc && (
        <video
          className="home-video-preview"
          src={project.homeVideoSrc}
          title={`${project.title} video preview`}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      )}
      {showVideo && project.videoId && (
        <iframe
          className="home-video-preview"
          src={`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${project.videoId}&rel=0`}
          title={`${project.title} video preview`}
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
      <span className="media-label">
        {pad(index + 1)} / {hasThumbnail ? project.thumbnailLabel : showVideo ? `${project.software.toUpperCase()} VIDEO PREVIEW` : placeholder}
      </span>
      <span className="ratio">{ratio}</span>
      <div className="card-copy">
        <small>{project.software}</small>
        <h3>{project.title}</h3>
        {hasHoldPreview && <span className="hold-preview-hint">{previewActive ? 'Previewing…' : 'Hold to preview'}</span>}
        <p>{square && project.description ? project.description : 'Project story and media to be added.'}</p>
      </div>
      <span className="arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
