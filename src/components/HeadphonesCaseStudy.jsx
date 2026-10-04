import section2Left from '../assets/GPT/2 L.png';
import section2Right from '../assets/GPT/2 R.png';
import section3Left from '../assets/GPT/3 L.png';
import section3Right from '../assets/GPT/3 R.png';
import section4Left from '../assets/GPT/4L.png';
import section4Right from '../assets/GPT/4R.png';
import section5Left from '../assets/GPT/5L.png';
import section5Right from '../assets/GPT/5R.png';
import Footer from './Footer.jsx';

function YouTubeEmbed({ videoId, label }) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    controls: '0',
    playsinline: '1',
    loop: '1',
    playlist: videoId,
    rel: '0',
  });

  return (
    <div className="headphones-youtube-embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?${params}`}
        title={label}
        allow="autoplay; encrypted-media; picture-in-picture"
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

function MediaPlaceholder({ label, kind = 'image', wide = false, videoId, image }) {
  return (
    <figure className={['headphones-media', `headphones-media--${kind}`, wide && 'headphones-media--wide'].filter(Boolean).join(' ')}>
      <div className="headphones-media-surface" aria-hidden={videoId || image ? undefined : true}>
        {videoId ? (
          <YouTubeEmbed videoId={videoId} label={label} />
        ) : image ? (
          <img src={image} alt={label} />
        ) : (
          <span>{kind === 'video' ? 'Video placeholder' : 'Image placeholder'}</span>
        )}
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function MediaPair({ items }) {
  return (
    <div className="headphones-media-pair">
      {items.map((item) => (
        <MediaPlaceholder key={item.label} {...item} />
      ))}
    </div>
  );
}

function StorySection({ number, topic, title, description, media, wideMedia }) {
  return (
    <section className="headphones-section">
      <div className="headphones-section-copy">
        <div className="eyebrow">{number} / {topic}</div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {media && <MediaPair items={media} />}
      {wideMedia && <MediaPlaceholder {...wideMedia} wide />}
    </section>
  );
}

export default function HeadphonesCaseStudy({ project }) {
  return (
    <main className="wrap detail open headphones-case-study" id="project">
      <a className="back" href="#/portfolio">← All projects</a>

      <div className="headphones-intro">
        <div>
          <div className="eyebrow">Selected project / GPT</div>
          <h1>{project.title}</h1>
        </div>
        <div className="headphones-intro-copy">
          <p className="headphones-summary">
            A headphone visualization developed through prompts, visual feedback and repeated refinement in Blender.
          </p>
          <p>
            Astra carried out the Blender work. Prompt direction and annotated screenshots guided the changes from model development to the finished presentation.
          </p>
          <dl className="headphones-meta">
            <div><dt>Project type</dt><dd>AI-directed 3D study</dd></div>
            <div><dt>Production</dt><dd>Blender · Astra</dd></div>
            <div><dt>Final render</dt><dd>14 seconds<br />1080 × 1920</dd></div>
          </dl>
        </div>
      </div>

      <MediaPlaceholder label="Final render / headphones" kind="video" wide videoId="G3YcTGkSOL8" />

      <div className="headphones-bridge">
        <h2>From the whole form<br />to the smallest details.</h2>
        <p>A short studio sequence moves between the complete headphones, the ear cushions and the metal supports.</p>
      </div>

      <StorySection
        number="02"
        topic="Prompt-led workflow"
        title="Direct, inspect, refine."
        description="The Blender production was carried out by Astra through prompts and visual feedback. Screenshots became a way to specify changes: mark an unwanted contour, indicate a joint center, or draw the intended curve, then review the next version."
        media={[
          { label: 'Visual direction / joint alignment and center', image: section2Left },
          { label: 'Visual direction / refined support contour', image: section2Right },
        ]}
      />

      <StorySection
        number="03"
        topic="Shape refinement"
        title="Small corrections. A clearer silhouette."
        description="The development images focus on the curved support around each earcup and its transition into the upper joint. Drawn guides identify changes to thickness, curvature and surface continuity, giving each revision a specific visual target."
        media={[
          { label: 'Review / marked surface transitions', image: section3Left },
          { label: 'Later iteration / revised support geometry', image: section3Right },
        ]}
      />

      <StorySection
        number="04"
        topic="Mechanical controls"
        title="Movement built around the joints."
        description="The Blender setup includes controls for headband height, earcup swivel and tilt, plus a shared fold control. Joint annotations call out alignment and pivot placement; the viewport recording shows the model being inspected in different poses."
        media={[
          { label: 'Blender controls / height, swivel, tilt and fold', image: section4Left },
          { label: 'Alternate view / earcup swivel and articulation', image: section4Right },
        ]}
        wideMedia={{ label: 'Development recording / pose inspection', kind: 'video', videoId: '-ZERodGxbns' }}
      />

      <StorySection
        number="05"
        topic="Materials & lighting"
        title="Leather, mesh and metal."
        description="The finished surface treatment combines fine leather grain, stitched seams, woven grille detail and reflective metal supports. Cool studio lighting follows the edges and separates the dark cushions from the background."
        media={[
          { label: 'Surface details / leather grain and stitching', image: section5Left },
          { label: 'Final render / cushion and metal support', image: section5Right },
        ]}
      />

      <StorySection
        number="06"
        topic="Viewport to render"
        title="The same sequence, through two views."
        description="The viewport and finished render share the same sequence of full product views and close details. Comparing them shows how surface treatment and lighting shape the final presentation."
        media={[
          { label: 'Viewport sequence / scene geometry', kind: 'video', videoId: 'B-P0Ll4T6vY' },
          { label: 'Rendered sequence / materials and light', kind: 'video', videoId: 'G3YcTGkSOL8' },
        ]}
      />

      <StorySection
        number="07"
        topic="Social edits"
        title="The result and the process."
        description="Short vertical edits present both the finished headphones and the work behind them. The second reel brings render comparisons, Blender views and prompt exchanges into the same story."
        media={[
          { label: 'Social Edits / Part One', kind: 'video', videoId: 'dKNTtbs1FdE' },
          { label: 'Social Edits / Part Two', kind: 'video', videoId: 'g2ysDaxzilA' },
        ]}
      />

      <section className="headphones-notes">
        <div>
          <div className="eyebrow">Project notes</div>
          <h2>Iteration through<br />visual feedback.</h2>
        </div>
        <p>
          This project explores directing a 3D production through conversation. Astra executed the work in Blender, while prompts and marked-up reviews defined the requested changes. The resulting material includes a product animation, viewport sequence and social edits.
        </p>
      </section>

      <div className="detail-end">
        <a href="#project">↑ Back to top</a>
      </div>
      <Footer><span>GPT / Blender production</span></Footer>
    </main>
  );
}