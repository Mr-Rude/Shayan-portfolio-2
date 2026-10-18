import portrait from '../assets/Shayan-cutout.optimized.webp';
import { software } from '../data/software.js';
import SoftwareLogo from './SoftwareLogo.jsx';

const RINGS = Array.from({ length: 12 }, (_, i) => 260 + i * 27);

function HeroRings() {
  return (
    <div className="hero-rings" aria-hidden="true">
      <svg viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ring-color" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#397fc4" />
            <stop offset=".5" stopColor="#6751af" />
            <stop offset="1" stopColor="#a070ca" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#ring-color)" strokeWidth="1" vectorEffect="non-scaling-stroke">
          {RINGS.map((r) => (
            <circle key={r} cx="600" cy="600" r={r} />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="home-stage" id="intro-stage" data-stage-label="Introduction">
      <section className="hero" aria-label="Portrait and software interaction concept">
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="orb orb-one" />
          <span className="orb orb-two" />
          <span className="orb orb-green" />
        </div>
        <HeroRings />
        <div className="hero-top">
          <span className="dot" />
          SHAYAN KHAN / CGI &amp; MOTION
        </div>
        <img className="portrait" fetchpriority="high" decoding="async" src={portrait} alt="Shayan Khan" />
        {software.map((s) => (
          <SoftwareLogo key={s.cls} {...s} />
        ))}
        <div className="hero-caption">
          Entrance concept:
          <br />
          logos emerge from behind the portrait, spread out, then settle.
        </div>
      </section>
      <div className="role">
        <h1>CGI ARTIST / 3D VISUALIZER</h1>
        <span>WORKING TITLE ↙</span>
      </div>
    </div>
  );
}
