import { Fragment } from 'react';

/**
 * A floating software mark. Mouse and keyboard users see the preview on hover/focus (CSS).
 */
export default function SoftwareLogo({ cls, mark, label, title, lines }) {
  const icon = typeof mark === 'string' ? (
    <img src={mark} alt={label} />
  ) : mark;

  return (
    <span
      tabIndex={0}
      className={`logo ${cls}`}
      aria-label={label}
    >
      <span className="logo-mark" aria-hidden="true">{icon}</span>
      <span className="peek">
        {title}
        <small>
          {lines.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </small>
        <span>▶ PREVIEW</span>
      </span>
    </span>
  );
}
