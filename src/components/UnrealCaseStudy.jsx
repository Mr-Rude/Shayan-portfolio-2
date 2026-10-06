import storyboardLeft from '../assets/Unreal/2L.png';
import storyboardRight from '../assets/Unreal/2R.png';
import lookLeft from '../assets/Unreal/3L.png';
import lookCenter from '../assets/Unreal/3C.png';
import lookRight from '../assets/Unreal/3R.png';
import chaseUpper from '../assets/Unreal/4U.png';
import chaseLower from '../assets/Unreal/4D.png';
import blueprint from '../assets/Unreal/5.png';
import layout from '../assets/Unreal/7L.jpeg';
import bedroomSet from '../assets/Unreal/7R.jpeg';
import finalFrame from '../assets/Unreal/8.png';
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
    <figure className={`unreal-media${wide ? ' unreal-media--wide' : ''}`}>
      <div className="unreal-media-frame">
        {image ? (
          <img src={image} alt={label} />
        ) : (
          <iframe
            src={youtubeEmbedUrl(videoId)}
            title={label}
            allow="autoplay; encrypted-media; picture-in-picture"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function StoryCopy({ number, topic, title, children }) {
  return (
    <div className="unreal-section-copy">
      <div className="eyebrow">{number} / {topic}</div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default function UnrealCaseStudy({ project }) {
  return (
    <main className="wrap detail open unreal-case-study" id="project">
      <div className="unreal-intro">
        <div>
          <div className="eyebrow">Selected project / CGI commercial</div>
          <h1>Hot Wheels<br />fan-made<br />commercial</h1>
        </div>
        <div className="unreal-intro-copy">
          <p className="unreal-summary">
            A dramatic chase moves from slow to city speed, then back into a child’s bedroom.
          </p>
          <p>
            An orange supercar tears through the city before the story shifts to a Hot Wheels track built for the chase. The journey ends by revealing the imagination behind the miniature world.
          </p>
          <dl className="unreal-meta">
            <div><dt>Project type</dt><dd>Fan-made CGI commercial</dd></div>
            <div><dt>Focus</dt><dd>Automotive · environment · story</dd></div>
            <div><dt>Software</dt><dd>Unreal Engine</dd></div>
          </dl>
        </div>
      </div>

      <section className="unreal-hero">
        <div className="unreal-labels">
          <span>01 / Final commercial</span>
          <span>Hot Wheels · CGI</span>
        </div>
        <Media label="Hot Wheels fan-made commercial / final film" videoId="jlNNxGAux4o" wide />
        <div className="unreal-caption">
          <h2>A chase that begins as a dream.</h2>
          <p>
            A cinematic car chase races through a city before revealing the playful world that inspired it.
          </p>
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="02" topic="Concept & storyboards" title={<>Plan the motion<br />before building the world.</>}>
          The chase begins on paper. Storyboards map the camera, the car’s path and the moments that carry the story from the city to the track.
        </StoryCopy>
        <div className="unreal-pair">
          <Media label="Storyboard / chase sequence and camera direction" image={storyboardLeft} />
          <Media label="Storyboard / action beats and shot planning" image={storyboardRight} />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="03" topic="Look development" title={<>One pursuit.<br />Three distinct looks.</>}>
          Lighting, color and camera distance shape three visual treatments for the same chase. Each frame tests how the orange car reads against its surroundings.
        </StoryCopy>
        <div className="unreal-trio">
          <Media label="Look development / first chase treatment" image={lookLeft} />
          <Media label="Look development / alternate city lighting" image={lookCenter} />
          <Media label="Look development / warm final palette" image={lookRight} />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="04" topic="City chase" title={<>Keep the car close.<br />Let the city move around it.</>}>
          Close camera work keeps the car at the center of the action while motion blur, traffic and city streets give the chase its speed.
        </StoryCopy>
        <div className="unreal-chase-pair">
          <Media label="City chase / close front view" image={chaseUpper} wide />
          <Media label="City chase / side tracking shot" image={chaseLower} wide />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="05" topic="Track & motion" title={<>Shape the route,<br />then test the motion.</>}>
          A blueprint-driven spline shapes the track route. Testing the camera and car along the path brings the layout from a technical setup into a moving chase.
        </StoryCopy>
        <div className="unreal-blueprint">
          <Media label="Unreal Engine blueprint / spline-built track route" image={blueprint} />
        </div>
        <Media label="Track test / car following the route" videoId="-jE3QWvT7VM" wide />
      </section>

      <section className="unreal-section">
        <StoryCopy number="06" topic="Timing & speed" title={<>Finding the right<br />sense of speed.</>}>
          The edit balances readable action with the rush of the chase. Timing, cuts and motion cues help the car feel fast while keeping its path clear.
        </StoryCopy>
        <div className="unreal-pair unreal-pair--video">
          <Media label="Edit review / chase timing and pace" videoId="miEpK_jya44" />
          <Media label="Edit review / alternate timing and motion" videoId="oZt4HLaRReg" />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="07" topic="Scale shift" title={<>From layout model<br />to bedroom set.</>}>
          The track moves from a simple layout model into a finished miniature set. Warm room lighting and familiar toys reveal the small-scale world behind the chase.
        </StoryCopy>
        <div className="unreal-pair">
          <Media label="Track layout / model and route" image={layout} />
          <Media label="Bedroom set / finished miniature track" image={bedroomSet} />
        </div>
      </section>

      <section className="unreal-section">
        <StoryCopy number="08" topic="Final reveal" title={<>From full scale chase<br />to a toy in hand.</>}>
          The final frame brings the city chase back to its starting point: a child imagining the whole adventure with a Hot Wheels car.
        </StoryCopy>
        <Media label="Final reveal / child and Hot Wheels car" image={finalFrame} wide />
      </section>

      <section className="unreal-notes">
        <div>
          <div className="eyebrow">Production notes</div>
          <h2>A compact CGI<br />production workflow.</h2>
        </div>
        <p>
          The project moves from storyboard and look development into a real-time city chase, then transforms the route into a bedroom-scale track. Unreal Engine brings the environments, camera movement and final reveal into one cohesive commercial concept.
        </p>
      </section>

      <Footer><span>{project.software} / Hot Wheels fan-made commercial</span></Footer>
    </main>
  );
}
