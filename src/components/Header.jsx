import wordmark from '../assets/shayan-wordmark.svg';

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
  return (
    <header>
      <div className="nav">
        <a className="name" href="#/home" aria-label="Shayan Khan, home">
          <span className="name-letters" aria-hidden="true"><AnimatedName /></span>
          <img className="name-wordmark" src={wordmark} alt="" aria-hidden="true" />
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
