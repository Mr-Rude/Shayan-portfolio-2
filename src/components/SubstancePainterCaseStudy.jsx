import Footer from './Footer.jsx';
import section1Left from '../assets/Substance Painter/1L.png';
import section1Right from '../assets/Substance Painter/1R.png';
import section2TopLeft from '../assets/Substance Painter/2TL.png';
import section2TopRight from '../assets/Substance Painter/2TR.png';
import section2BottomLeft from '../assets/Substance Painter/2BL.png';
import section2BottomRight from '../assets/Substance Painter/2BR.png';
import section3TopLeft from '../assets/Substance Painter/3TL.jpg';
import section3TopRight from '../assets/Substance Painter/3TR.jpg';
import section3Bottom from '../assets/Substance Painter/3B.jpg';
import mainVideo from '../assets/Substance Painter/video/substance-painter-showcase-full-frame-15s.mp4';

function Media({ label, wide = false, image, videoSrc }) {
  return (
    <figure className={`substance-media${wide ? ' substance-media--wide' : ''}`}>
      <div className="substance-media-frame">
        {videoSrc ? (
          <video src={videoSrc} title={label} autoPlay controls loop playsInline preload="metadata" />
        ) : (
          <img src={image} alt={label} loading="lazy" />
        )}
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export default function SubstancePainterCaseStudy() {
  return (
    <main className="wrap detail open substance-case-study" id="project">
      <div className="substance-intro">
        <div>
          <div className="eyebrow">Selected project / Texture study</div>
          <h1>Weathered<br />vehicle.</h1>
        </div>
        <div className="substance-intro-copy">
          <p className="substance-summary">Chipped paint, exposed metal and rust across an armored car.</p>
          <p>A vehicle texturing study in Substance Painter, bringing a worn finish to the bodywork, protective panels and oversized tires.</p>
          <dl className="substance-meta">
            <div><dt>Focus</dt><dd>Vehicle texturing</dd></div>
            <div><dt>Tool</dt><dd>Substance Painter</dd></div>
            <div><dt>Finish</dt><dd>Rust &amp; wear</dd></div>
          </dl>
        </div>
      </div>

      <section className="substance-section substance-hero">
        <div className="substance-labels"><span>01 / Finished texture</span><span>Vehicle study</span></div>
        <Media label="Front quarter / the complete material treatment" videoSrc={mainVideo} wide />
        <div className="substance-caption">
          <h2>A surface shaped<br />by wear.</h2>
          <p>Dark blue paint breaks into broad patches of rust and bright exposed metal. The same worn finish runs across the body, grille guards and window armor, tying the different parts of the vehicle together.</p>
        </div>
        <div className="substance-gallery">
          <Media label="Alternate front / bodywork and protective frame" image={section1Left} />
          <Media label="Rear view / wear across the trunk and roof" image={section1Right} />
        </div>
      </section>

      <section className="substance-section">
        <div className="substance-section-copy">
          <div className="eyebrow">02 / Material details</div>
          <h2>Metal, paint<br />and dirty rubber.</h2>
          <p>Close views show the finish at different scales: fine wear along bars and mesh, larger corroded areas on armor plates, and dirt across the tires. Bright metal edges stand out against the darker painted surfaces.</p>
        </div>
        <div className="substance-gallery">
          <Media label="Grille and bumper / chipped paint and corrosion" image={section2TopLeft} />
          <Media label="Window protection / mesh and exposed edges" image={section2TopRight} />
          <Media label="Armor panels / rust, bolts and surface variation" image={section2BottomLeft} />
          <Media label="Wheel and body / rubber, dirt and metal" image={section2BottomRight} />
        </div>
      </section>

      <section className="substance-section">
        <div className="substance-section-copy">
          <div className="eyebrow">03 / Workflow reference</div>
          <h2>Studying layers<br />of wear.</h2>
          <p>Selected frames from ProductionCrate’s Substance Painter tutorial show material adjustments, a chipped paint treatment, and the layer and anchor point setup. They provide workflow context alongside the finished texture study above.</p>
        </div>
        <div className="substance-gallery substance-gallery--workflow">
          <Media label="Video reference / metal material adjustments" image={section3TopLeft} />
          <Media label="Video reference / layers and anchor points" image={section3TopRight} />
        </div>
        <div className="substance-workflow-wide">
          <Media label="Video reference / chipped paint treatment" image={section3Bottom} wide />
        </div>
        <p className="substance-source">Video screenshots: ProductionCrate, <span>Learn EVERYTHING About Substance Painter!</span></p>
      </section>

      <section className="substance-notes">
        <div>
          <div className="eyebrow">Project notes</div>
          <h2>A study in<br />surface character.</h2>
        </div>
        <div>
          <p>My work on this project focused on texturing the vehicle in Substance Painter. The finished screenshots show the resulting material treatment across the car and its details.</p>
          <p>The process gallery uses stills from the linked ProductionCrate tutorial.</p>
        </div>
      </section>
      <div className="detail-end"><a href="#project">↑ Back to top</a></div>
      <Footer><span>Texturing / Substance Painter</span></Footer>
    </main>
  );
}
