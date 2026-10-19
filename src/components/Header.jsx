import { useState } from 'react';
import glyphs from '../assets/name-letters/metrics.json';
const glyphImages = import.meta.glob('../assets/name-letters/*.png', { eager: true, query: '?url', import: 'default' });
const nameWidth = glyphs.reduce((sum, glyph) => sum + glyph.advance, 0);

function MobileName() {
  let offset = 0;
  let index = 0;
  return glyphs.map((glyph, position) => {
    const left = offset;
    offset += glyph.advance;
    if (glyph.code === 32) return null;
    return (
      <span className="name-glyph" key={position} style={{ '--i': index++, left: `${left / nameWidth * 100}%`, width: `${glyph.advance / nameWidth * 100}%` }}>
        <span className="name-glyph-ink" style={{ '--glyph-image': `url("${glyphImages[`../assets/name-letters/${glyph.code}.png`]}")`, left: `${glyph.left / glyph.advance * 100}%`, width: `${glyph.width / glyph.advance * 100}%` }} />
      </span>
    );
  });
}

const NAME = 'Shayan Khan';

// Each letter gets an index so the hover flip ripples across the name.
function AnimatedName() {
  let i = 0;
  return NAME.split('').map((ch, pos) =>
    ch === ' ' ? ' ' : (
      <span key={pos} style={{ '--i': i++ }}>
        {ch}
      </span>
    )
  );
}

export default function Header() {
  const [nameTap, setNameTap] = useState(false);
  return (
    <header>
      <div className="nav">
        <a className="name" href="#/home" aria-label="Shayan Khan, home" onPointerDown={(event) => { if (event.pointerType !== 'mouse') setNameTap(true); }} onClick={(event) => { if (event.detail === 0) setNameTap(true); }}>
          <span className="name-letters" aria-hidden="true"><AnimatedName /></span>
          <span onAnimationEnd={(event) => { if (event.target === event.currentTarget.lastElementChild) setNameTap(false); }} className={`name-wordmark${nameTap ? ' is-tapped' : ''}`} style={{ '--name-height': 96 / nameWidth }} aria-hidden="true"><MobileName /></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#/portfolio">Portfolio</a>
          <a href="#/home/about">About Me</a>
          <a href="#/home/contact">Contact Me</a>
        </nav>
      </div>
    </header>
  );
}
