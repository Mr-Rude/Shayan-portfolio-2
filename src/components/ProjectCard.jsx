const pad = (n) => String(n).padStart(2, '0');

/**
 * Project card used on the homepage (16:9 or 9:16) and the portfolio grid (square).
 */
export default function ProjectCard({ project, index, square = false, homepage = false }) {
  const shape = square ? 'portfolio-card' : project.format === 'wide' ? 'wide' : '';
  const ratio = square ? '1:1' : project.format === 'wide' ? '16:9' : '9:16';
  const placeholder = index > 7 ? 'ADDITIONAL PROJECT PLACEHOLDER' : 'PROJECT MEDIA PLACEHOLDER';
  const showVideo = homepage && Boolean(project.videoId);

  return (
    <a
      href={`#/project/${project.id}`}
      className={['card', shape, project.tone, showVideo && 'video-preview'].filter(Boolean).join(' ')}
      aria-label={`${project.title}, view case study`}
    >
      <div className="art" />
      {showVideo && (
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
        {pad(index + 1)} / {showVideo ? 'AI HEADPHONES PREVIEW' : placeholder}
      </span>
      <span className="ratio">{ratio}</span>
      <div className="card-copy">
        <small>{project.software}</small>
        <h3>{project.title}</h3>
        <p>Project story and media to be added.</p>
      </div>
      <span className="arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
