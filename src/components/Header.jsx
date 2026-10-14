import { useState } from 'react';
import wordmark from '../assets/shayan-wordmark.png';

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
  const [nameTap, setNameTap] = useState(0);
  return (
    <header>
      <div className="nav">
        <a className="name" href="#/home" aria-label="Shayan Khan, home" onClick={() => setNameTap((tap) => tap + 1)}>
          <span className="name-letters" aria-hidden="true"><AnimatedName /></span>
          <img key={nameTap} className={`name-wordmark${nameTap ? ' is-tapped' : ''}`} src={wordmark} alt="" aria-hidden="true" />
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#/home/about">About Me</a>
          <a href="#/portfolio">Portfolio</a>
          <a href="#/home/contact">Contact Me</a>
        </nav>
      </div>
    </header>
  );
}
