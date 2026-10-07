import section2Center from '../assets/Maya/2C.png';
import section2Left from '../assets/Maya/2L.png';
import section2Right from '../assets/Maya/2R.png';
import section3BottomLeft from '../assets/Maya/3BL.png';
import section3BottomRight from '../assets/Maya/3BR.png';
import section3CenterLeft from '../assets/Maya/3CL.png';
import section3CenterRight from '../assets/Maya/3CR.png';
import section3TopLeft from '../assets/Maya/3TL.png';
import section3TopRight from '../assets/Maya/3TR.png';
import section4BottomLeft from '../assets/Maya/4BL.jpg';
import section4BottomRight from '../assets/Maya/4BR.jpg';
import section4CenterLeft from '../assets/Maya/4CL.png';
import section4CenterRight from '../assets/Maya/4CR.png';
import section4TopLeft from '../assets/Maya/4TL.png';
import section4TopRight from '../assets/Maya/4TR.png';
import Footer from './Footer.jsx';

function Media({ label, image }) {
  return (
    <figure className="maya-media">
      <div className="maya-media-frame">
        <img src={image} alt={label} loading="lazy" />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function StorySection({ number, topic, title, children, className = '', media }) {
  return (
    <section className={`maya-section ${className}`.trim()}>
      <div className="maya-section-copy">
        <div className="eyebrow">{number} / {topic}</div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <div className={`maya-gallery ${className ? `maya-gallery--${className}` : ''}`.trim()}>
        {media.map((item) => <Media key={item.label} {...item} />)}
      </div>
    </section>
  );
}

const section2Media = [
  { label: 'Side reference / initial car proportions', image: section2Left },
  { label: 'Bodywork / fender topology in Maya', image: section2Center },
  { label: 'Bodywork / assembled model and rear spoiler', image: section2Right },
];

const section3Media = [
  { label: 'Substance Painter / baked surface maps', image: section3TopLeft },
  { label: 'Substance Painter / car material study', image: section3TopRight },
  { label: 'Maya / finished car model', image: section3CenterLeft },
  { label: 'Material study / weathered bodywork', image: section3CenterRight },
  { label: 'Close-up / wheel, tire and body finish', image: section3BottomLeft },
  { label: 'Close-up / front bodywork and wheel', image: section3BottomRight },
];

const section4Media = [
  { label: 'Maya / blocking the garage scene', image: section4TopLeft },
  { label: 'Maya / lighting and camera setup', image: section4TopRight },
  { label: 'Garage materials / wall and surface detail', image: section4CenterLeft },
  { label: 'Maya / garage lighting test', image: section4CenterRight },
  { label: 'Final film frame / car in the garage', image: section4BottomLeft },
  { label: 'Final film frame / car on the mountain road', image: section4BottomRight },
];

export default function MayaCaseStudy({ project }) {
  return (
    <main className="wrap detail open maya-case-study" id="project">
      <a className="back" href="#/portfolio">← All projects</a>

      <div className="maya-intro">
        <div>
          <div className="eyebrow">Selected project / CGI film</div>
          <h1>{project.title}</h1>
        </div>
        <div className="maya-intro-copy">
          <p className="maya-summary">
            A weathered sports car moves from a dim garage onto a mountain road at night.
          </p>
          <p>
            A short cinematic teaser combining vehicle modeling, atmospheric lighting and surface detail.
          </p>
          <dl className="maya-meta">
            <div><dt>Project type</dt><dd>CGI film</dd></div>
            <div><dt>Tools</dt><dd>Maya + Substance Painter</dd></div>
            <div><dt>Format</dt><dd>42 seconds</dd></div>
          </dl>
        </div>
      </div>

      <section className="maya-hero">
        <div className="maya-media-labels">
          <span>01 / Final film</span>
          <span>Final cut · 0:42</span>
        </div>
        <div className="maya-hero-frame">
          <video src={project.homeVideoSrc} title="The Last Code / final film" autoPlay controls loop playsInline preload="auto" />
        </div>
        <div className="maya-hero-caption">
          <h2>Out of the shadows.</h2>
          <p>
            Reflections and pools of light introduce the weathered car before the film moves from the enclosed garage to an open mountain road, where its headlights carry the scene through the darkness.
          </p>
        </div>
      </section>

      <StorySection
        number="02"
        topic="Car modeling"
        title={<>From reference<br />to bodywork.</>}
        className="maya-section--trio"
        media={section2Media}
      >
        The Maya modeling process follows the car from its side reference through the body panels to the assembled form. These views trace the fender topology and show the rear spoiler in place.
      </StorySection>

      <StorySection
        number="03"
        topic="Vehicle materials"
        title={<>Wear across<br />every surface.</>}
        className="maya-section--grid"
        media={section3Media}
      >
        The car’s surfaces were textured in Substance Painter, where paint, glass, tires and trim were given a worn finish. Material studies and close-ups show how the aged look carries across the bodywork and smaller details.
      </StorySection>

      <StorySection
        number="04"
        topic="Garage, lighting and camera"
        title={<>From enclosed light<br />to open darkness.</>}
        className="maya-section--grid"
        media={section4Media}
      >
        The garage scene was assembled in Maya, with the camera and lighting developed around the car. Tests refine the enclosed space and its overhead light; the finished film then opens out to a night road framed by rocky terrain.
      </StorySection>

      <section className="maya-notes">
        <div>
          <div className="eyebrow">Production notes</div>
          <h2>Maya scenes.<br />Substance textures.</h2>
        </div>
        <div>
          <p>
            The project was created in Maya, with the car and garage textures prepared in Substance Painter. The finished work combines modeling, materials, lighting and camera into a short cinematic film.
          </p>
          <p>Project film: Shayan Khan · Sound: Royalty-free audio</p>
        </div>
      </section>

      <div className="maya-end">
        <a href="#/portfolio">← Back to all projects</a>
      </div>
      <Footer><a href="#/portfolio">All projects</a></Footer>
    </main>
  );
}
