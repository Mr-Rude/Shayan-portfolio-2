const pad = (n) => String(n).padStart(2, '0');

/**
 * Project card used on the homepage (16:9 or 9:16) and the portfolio grid (square).
 */
export default function ProjectCard({ project, index, square = false }) {
  const shape = square ? 'portfolio-card' : project.format === 'wide' ? 'wide' : '';
  const ratio = square ? '1:1' : project.format === 'wide' ? '16:9' : '9:16';
  const placeholder = index > 7 ? 'ADDITIONAL PROJECT PLACEHOLDER' : 'PROJECT MEDIA PLACEHOLDER';

  return (
    <a
      href={`#/project/${project.id}`}
      className={['card', shape, project.tone].filter(Boolean).join(' ')}
      aria-label={`${project.title}, view case study`}
    >
      <div className="art" />
      <span className="media-label">
        {pad(index + 1)} / {placeholder}
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
