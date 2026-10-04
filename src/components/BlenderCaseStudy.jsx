import Footer from './Footer.jsx';

function MediaSlot({ label, shape = 'landscape' }) {
  return (
    <figure className={`blender-media blender-media--${shape}`}>
      <div className="blender-media-frame" aria-hidden="true" />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function MediaPair({ left, right }) {
  return (
    <div className="blender-media-pair">
      <MediaSlot {...left} />
      <MediaSlot {...right} />
    </div>
  );
}

function StorySection({ number, title, heading, description, media, note }) {
  return (
    <section className="blender-section">
      <div className="blender-section-copy">
        <div className="eyebrow">{number} / {title}</div>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      {note ? (
        <div className="blender-development-grid">
          <MediaSlot {...media[0]} />
          <div>
            <MediaSlot {...media[1]} />
            <p className="blender-media-note">{note}</p>
          </div>
        </div>
      ) : (
        <MediaPair left={media[0]} right={media[1]} />
      )}
    </section>
  );
}

export default function BlenderCaseStudy({ project }) {
  return (
    <main className="wrap detail open blender-case-study" id="project">
      <header className="blender-intro">
        <div>
          <div className="eyebrow">Selected project / Dark fantasy environment</div>
          <h1>{project.title}</h1>
        </div>
        <div className="blender-intro-copy">
          <p className="blender-summary">
            A floating magical orb wrapped in swirling energy strands, rising from ancient stone ruins.
          </p>
          <p>
            A dark fantasy 3D environment created entirely in Blender, with layered materials, lighting, VFX and final composition shaping its cinematic atmosphere.
          </p>
          <dl className="blender-meta">
            <div><dt>Project type</dt><dd>CGI / 3D environment</dd></div>
            <div><dt>Software</dt><dd>Blender</dd></div>
            <div><dt>Format</dt><dd>9 seconds · 24 fps<br />1080 × 1920</dd></div>
          </dl>
        </div>
      </header>

      <section className="blender-hero">
        <div className="blender-media-labels">
          <span>01 / Final cinematic render</span>
          <span>Portrait reel · Sound available</span>
        </div>
        <div className="blender-hero-frame" aria-hidden="true">
          <div className="blender-hero-portrait" />
        </div>
        <div className="blender-hero-caption">
          <h2>Magic rising from ancient ruins.</h2>
          <p>
            The final render brings the floating magical orb, swirling energy strands and ancient stone ruins together in a cinematic dark fantasy scene.
          </p>
        </div>
      </section>

      <StorySection
        number="02"
        title="Environment & composition"
        heading="A magical orb. An ancient setting."
        description="The floating orb is the central subject, framed by ancient stone ruins. Swirling energy strands lead the eye around it, while broken masonry and surrounding vegetation establish the environment. The composition places the magical presence at the heart of the scene."
        media={[
          { label: 'Blender process / scene structure in solid view', shape: 'square' },
          { label: 'Final composition / magical orb and ancient ruins', shape: 'square' },
        ]}
      />

      <StorySection
        number="03"
        title="Orb development"
        heading="Shaping the magical orb."
        description="The orb takes shape through Geometry Nodes in Blender. A noise-based displacement changes the sphere into an irregular form, giving the magical subject its distinctive silhouette before materials and lighting are added."
        media={[
          { label: 'Orb development / base sphere to displaced form', shape: 'portrait' },
          { label: 'Geometry nodes / noise-driven position offset', shape: 'landscape' },
        ]}
        note="Noise is centered with a 0.5 vector subtraction, then scaled by 0.7 before displacing the sphere."
      />

      <StorySection
        number="04"
        title="Materials, lighting & VFX"
        heading="Building a dark fantasy atmosphere."
        description="Layered materials and lighting define the orb, energy strands and weathered ruins. Blue-green reflections and warmer accents give the magical elements contrast against the dark setting. VFX and the final composition bring these elements into a cinematic fantasy atmosphere."
        media={[
          { label: 'Solid view / magical orb geometry', shape: 'square' },
          { label: 'Material preview / magical orb surface', shape: 'square' },
        ]}
      />

      <StorySection
        number="05"
        title="Swirling energy"
        heading="Energy in motion around the orb."
        description="Swirling energy strands wrap around the floating orb, opening and gathering as the animation progresses. Their movement gives the magical subject a changing silhouette within the ancient stone setting."
        media={[
          { label: 'Energy strands / extended swirl', shape: 'square' },
          { label: 'Energy strands / gathered around the orb', shape: 'square' },
        ]}
      />

      <StorySection
        number="06"
        title="Blender process"
        heading="From solid view to cinematic render."
        description="The process moves from basic scene structure in solid view to material preview and the final cinematic render. These comparisons show how the orb, energy strands and ruins develop into the finished dark fantasy environment through materials, lighting, VFX and composition."
        media={[
          { label: 'Blender process / solid view to material preview', shape: 'landscape' },
          { label: 'Blender process / solid view to final cinematic render', shape: 'landscape' },
        ]}
      />

      <section className="blender-project-notes">
        <div className="eyebrow">Project details</div>
        <h2>A dark fantasy environment in Blender.</h2>
        <p>
          Created entirely in Blender, this CGI portfolio piece centers on a floating magical orb wrapped in swirling energy strands above ancient stone ruins. The case study follows the scene from solid view and material preview to a final cinematic render, presented as a nine-second portrait reel.
        </p>
      </section>

      <Footer><span>Blender / Dark fantasy environment</span></Footer>
    </main>
  );
}