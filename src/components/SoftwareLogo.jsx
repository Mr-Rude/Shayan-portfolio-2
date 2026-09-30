import { Fragment, useRef, useState } from 'react';

const HOLD_MS = 350;
const MOVE_TOLERANCE = 12;

/**
 * A floating software mark. Mouse and keyboard users see the preview on hover/focus (CSS).
 * Touch users press and hold to preview; moving the finger cancels it.
 */
export default function SoftwareLogo({ cls, mark, label, title, lines }) {
  const [previewing, setPreviewing] = useState(false);
  const timer = useRef(null);
  const start = useRef(null);

  const clear = () => {
    clearTimeout(timer.current);
    start.current = null;
    setPreviewing(false);
  };

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse') return;
    start.current = [e.clientX, e.clientY];
    timer.current = setTimeout(() => setPreviewing(true), HOLD_MS);
  };

  const onPointerMove = (e) => {
    if (start.current && Math.hypot(e.clientX - start.current[0], e.clientY - start.current[1]) > MOVE_TOLERANCE) clear();
  };

  const icon = typeof mark === 'string' ? (
    <img src={mark} alt={label} />
  ) : mark;

  return (
    <span
      tabIndex={0}
      className={`logo ${cls}${previewing ? ' is-previewing' : ''}`}
      aria-label={label}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={clear}
      onPointerCancel={clear}
      onPointerLeave={clear}
      onBlur={clear}
      onContextMenu={(e) => e.preventDefault()}
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
