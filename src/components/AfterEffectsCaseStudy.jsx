import section2Left from '../assets/After Effects/2L.png';
import section2Right from '../assets/After Effects/2R.png';
import section3Left from '../assets/After Effects/3L.png';
import section3Right from '../assets/After Effects/3R.png';
import section4Left from '../assets/After Effects/4L.png';
import section4Right from '../assets/After Effects/4R.png';
import section5 from '../assets/After Effects/5.png';
import Footer from './Footer.jsx';

function youtubeEmbedUrl(videoId) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    controls: '0',
    playsinline: '1',
    loop: '1',
    playlist: videoId,
    rel: '0',
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params}`;
}

function Media({ label, image, videoId, wide = false }) {
  return (
    <figure className={`ae-media${wide ? ' ae-media--wide' : ''}`}>
      <div className="ae-media-frame">
        {image ? (
          <img src={image} alt={label} />
        ) : videoId ? (
          <iframe
            src={youtubeEmbedUrl(videoId)}
            title={label}
            allow="autoplay; encrypted-media; picture-in-picture"
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : null}
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function StorySection({ number, topic, title, description, images, single = false }) {
  return (
    <section className="ae-section">
      <div className="ae-section-copy">
        <div className="eyebrow">{number} / {topic}</div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={`ae-media-pair${single ? ' ae-media-pair--single' : ''}`}>
        {images.map((image) => <Media key={image.label} {...image} wide={single} />)}
      </div>
    </section>
  );
}

export default function AfterEffectsCaseStudy() {
  return (
    <main className="wrap detail open ae-case-study" id="project">
      <div className="ae-intro">
        <div>
          <div className="eyebrow">Selected project / Animation explainer</div>
          <h1>Types of<br />2D animation.</h1>
        </div>
        <div className="ae-intro-copy">
          <p className="ae-summary">
            A short explainer introducing four styles of animation: modern 2D, motion graphics, kinetic typography and 2.5D (isometric).
          </p>
          <p>
            Visual concepts connect each style to its storytelling potential, moving from illustrated characters and graphic shapes to animated words and scenes with depth.
          </p>
          <dl className="ae-meta">
            <div><dt>Project type</dt><dd>2D explainer video</dd></div>
            <div><dt>Focus</dt><dd>Four animation styles</dd></div>
            <div><dt>Format</dt><dd>1:12 · 25 fps<br />1920 × 1080</dd></div>
          </dl>
        </div>
      </div>

      <section className="ae-hero">
        <div className="ae-media-labels">
          <span>01 / Explainer film</span>
          <span>Four animation styles · 2D</span>
        </div>
        <Media label="Types of 2D animation / explainer film" videoId="flkgchLutFM" wide />
        <div className="ae-hero-caption">
          <h2>One introduction.<br />Four ways to animate.</h2>
          <p>
            The film introduces each style through narration and visual examples, ending with an invitation to explore the versatility of 2D animation.
          </p>
        </div>
      </section>

      <StorySection
        number="02"
        topic="Modern 2D animation"
        title={<>Characters bring<br />the idea to life.</>}
        description="Modern 2D animation brings the character of traditional drawing into a digital workflow. The film uses illustrated people, expressive poses and everyday situations to introduce this approach."
        images={[
          { label: 'Character illustration / communicating an idea', image: section2Left },
          { label: 'Illustrated scene / people and their surroundings', image: section2Right },
        ]}
      />

      <StorySection
        number="03"
        topic="Motion graphics"
        title={<>Design elements<br />in motion.</>}
        description="Motion graphics combines graphic design with animation. Abstract shapes, rich color and playful fields give this section a visual rhythm, showing how movement can make simple design elements engaging."
        images={[
          { label: 'Color and form / abstract motion graphic', image: section3Left },
          { label: 'Motion graphic / animated shapes and accents', image: section3Right },
        ]}
      />

      <StorySection
        number="04"
        topic="Kinetic typography"
        title={<>Words become<br />the visual story.</>}
        description="Kinetic typography uses movement to give words emphasis. The video introduces the style with an animated title, then returns to moving type in its closing message about creativity and imagination."
        images={[
          { label: 'Kinetic typography / introducing the style', image: section4Left },
          { label: 'Closing message / words about creativity and imagination', image: section4Right },
        ]}
      />

      <StorySection
        number="05"
        topic="2.5D (Isometric) animation"
        title={<>Depth within<br />a flat image.</>}
        description="2.5D (isometric) animation gives two-dimensional artwork a sense of space. An angled view, layered forms and shadows give the house, trees and people a dimensional appearance."
        images={[
          { label: '2.5D (isometric) home environment, people and landscape', image: section5 },
        ]}
        single
      />

      <section className="ae-closing">
        <div>
          <div className="eyebrow">06 / Closing thought</div>
          <h2>Let imagination<br />take shape.</h2>
        </div>
        <p>
          The video closes on the creative possibilities shared by all four styles. The final typographic sequence leaves an invitation into the next visual idea of the film.
        </p>
      </section>

      <Footer><span>After Effects / Animation explainer</span></Footer>
    </main>
  );
}
