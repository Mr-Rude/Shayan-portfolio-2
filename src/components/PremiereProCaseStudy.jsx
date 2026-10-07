import harbor from '../assets/PremierePro/harbor.jpg';
import boatDetail from '../assets/PremierePro/boat-detail.jpg';
import rowing from '../assets/PremierePro/rowing.jpg';
import portrait from '../assets/PremierePro/portrait.jpg';
import overhead from '../assets/PremierePro/overhead.jpg';
import work from '../assets/PremierePro/work.jpg';
import fishermanTitle from '../assets/PremierePro/Screenshot 2026-09-22 205013.png';
import entrepreneurTitle from '../assets/PremierePro/Screenshot 2026-09-22 204906.png';
import Footer from './Footer.jsx';

const selectedMoments = [
  { image: overhead, label: 'Harbor / boats moving through the water' },
  { image: portrait, label: 'Portrait / a fisherman at work' },
  { image: boatDetail, label: 'On the water / daily work from the boat' },
  { image: rowing, label: 'Along the harbor / securing a boat' },
  { image: harbor, label: 'Boat detail / weathered wood and water' },
  { image: work, label: 'Harbor study / boats seen from above' },
];

function Media({ image, label, wide = false }) {
  return (
    <figure className={`fisherman-media${wide ? ' fisherman-media--wide' : ''}`}>
      <div className="fisherman-media-frame">
        <img src={image} alt={label} loading="lazy" />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export default function PremiereProCaseStudy({ project }) {
  return (
    <main className="wrap detail open fisherman-case-study" id="project">
      <a className="back" href="#/portfolio">← All projects</a>

      <div className="fisherman-intro">
        <div>
          <div className="eyebrow">Selected project / Premiere Pro</div>
          <h1>The Story<br />of Fisherman.</h1>
        </div>
        <div className="fisherman-intro-copy">
          <p className="fisherman-summary">
            A short portrait of life and work around the fishing harbor.
          </p>
          <p>
            An editorial project bringing together people, boats and everyday activity on the water, with title graphics tracing the story.
          </p>
          <dl className="fisherman-meta">
            <div><dt>Project type</dt><dd>Video editing</dd></div>
            <div><dt>Software</dt><dd>Adobe Premiere Pro</dd></div>
            <div><dt>Duration</dt><dd>53 seconds</dd></div>
          </dl>
        </div>
      </div>

      <section className="fisherman-hero">
        <div className="fisherman-media-labels">
          <span>01 / Finished film</span>
          <span>Adobe Premiere Pro · 0:53</span>
        </div>
        <div className="fisherman-video-panel">
          <video src={project.homeVideoSrc} title="The Story of Fisherman / finished film" autoPlay controls loop playsInline preload="auto" />
        </div>
      </section>

      <section className="fisherman-bridge">
        <h2>Life around<br />the harbor.</h2>
        <p>
          The film moves between the harbor and the people who work there. Boats, daily routines and details from the water build a portrait of fishing life.
        </p>
      </section>

      <section className="fisherman-section">
        <div className="fisherman-section-copy">
          <div className="eyebrow">02 / Selected moments</div>
          <h2>From the setting<br />to the person.</h2>
          <p>
            Wide views establish the harbor, then closer moments bring attention to the people, boats and physical work that shape each day.
          </p>
        </div>
        <div className="fisherman-gallery">
          {selectedMoments.map((item) => <Media key={item.label} {...item} />)}
        </div>
      </section>

      <section className="fisherman-section fisherman-title-section">
        <div className="fisherman-section-copy">
          <div className="eyebrow">03 / Title design</div>
          <h2>Giving the story<br />a name.</h2>
          <p>
            Title treatments combine footage with expressive typography and hand-drawn graphic gestures, carrying the film’s visual identity across its opening and closing moments.
          </p>
        </div>
        <div className="fisherman-title-gallery">
          <Media image={entrepreneurTitle} label="Title treatment / Independent Entrepreneur" wide />
          <Media image={fishermanTitle} label="Film title / The Story of Fisherman" wide />
        </div>
      </section>

      <section className="fisherman-notes">
        <div>
          <div className="eyebrow">Project notes</div>
          <h2>A brief portrait<br />of working life.</h2>
        </div>
        <p>
          This case study presents the Adobe Premiere Pro edit through its imagery, title design and final composition. The finished film link can be added here when it is ready.
        </p>
      </section>

      <div className="detail-end">
        <a href="#/portfolio">← Back to all projects</a>
      </div>
      <Footer><span>Adobe Premiere Pro / Documentary edit</span></Footer>
    </main>
  );
}
