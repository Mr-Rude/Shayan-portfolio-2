import ViewportVideo from './ViewportVideo.jsx';
import Footer from './Footer.jsx';
import '../styles/illustrator.css';
import showcaseVideo from '../assets/Illustrator/Video/illustrator-showcase-static-fast-15s.mp4';
import image02_0 from '../assets/Illustrator/2 (2).optimized.webp';
import image02_1 from '../assets/Illustrator/2 (3).optimized.webp';
import image02_2 from '../assets/Illustrator/2 (4).optimized.webp';
import image02_3 from '../assets/Illustrator/2 (5).optimized.webp';
import image02_4 from '../assets/Illustrator/2.optimized.webp';
import image03_0 from '../assets/Illustrator/3 (4).optimized.webp';
import image03_1 from '../assets/Illustrator/3 (3).optimized.webp';
import image03_2 from '../assets/Illustrator/3 (1).optimized.webp';
import image03_3 from '../assets/Illustrator/3 (5).optimized.webp';
import image03_4 from '../assets/Illustrator/3 (2).optimized.webp';
import image04_0 from '../assets/Illustrator/4 (3).optimized.webp';
import image04_1 from '../assets/Illustrator/4 (4).optimized.webp';
import image04_2 from '../assets/Illustrator/4 (5).optimized.webp';
import image04_3 from '../assets/Illustrator/4 (1).optimized.webp';
import image04_4 from '../assets/Illustrator/4 (2).optimized.webp';
import image05_0 from '../assets/Illustrator/5 (1).optimized.webp';
import image05_1 from '../assets/Illustrator/5 (2).optimized.webp';
import image05_2 from '../assets/Illustrator/5(3).optimized.webp';
import image06_0 from '../assets/Illustrator/6 (4).png';
import image06_1 from '../assets/Illustrator/6 (5).png';
import image06_2 from '../assets/Illustrator/6 (3).png';
import image06_3 from '../assets/Illustrator/6 (1).png';
import image06_4 from '../assets/Illustrator/6 (2).optimized.webp';
import image07_0 from '../assets/Illustrator/7 (3).optimized.webp';
import image07_1 from '../assets/Illustrator/7 (2).optimized.webp';
import image07_2 from '../assets/Illustrator/7.optimized.webp';

const sections = [
  { number: "02", topic: "Social campaigns", title: "A bold voice for a digital brand.", description: "The Shadowbey series pairs a consistent black and lime palette with varied imagery: classical sculpture, chess, space and digital interfaces. Large headlines give each composition a clear point of entry.", layout: "campaigns", images: [{ src: image02_0, label: "Brand voice / sculpture and typography" }, { src: image02_1, label: "UI/UX services / promotional layout" }, { src: image02_2, label: "Stand tall / a visual metaphor" }, { src: image02_3, label: "Digital galaxy / social media campaign" }, { src: image02_4, label: "Avatar and metaverse / headline study" }] },
  { number: "03", topic: "Product communication", title: "One brand. Many compositions.", description: "Go Royale appears across product banners, promotional posts and a website layout. The pack remains the focal point while color, setting and typography change around it.", layout: "packaging", images: [{ src: image03_0, label: "Go Royale / product range" }, { src: image03_1, label: "The royal snack of Pakistan / campaign composition" }, { src: image03_2, label: "Social campaign / coordinated product posts" }, { src: image03_3, label: "Karara Twist / promotional banner" }, { src: image03_4, label: "Go Royale / website composition" }] },
  { number: "04", topic: "Character development", title: "From rough sketch to a little explorer.", description: "The character sheets document an idea taking shape: an initial sketch, a more defined silhouette and a final rough drawing. The same mouse character is explored at different ages and in an astronaut outfit, then placed in illustrated space scenes.", layout: "character", images: [{ src: image04_0, label: "Character lineup / age and outfit variations" }, { src: image04_1, label: "Concept building / rough sketch to refined drawing" }, { src: image04_2, label: "Character variations / toddler, minor and grown-up" }, { src: image04_3, label: "Finished scene / preparing for a space adventure" }, { src: image04_4, label: "Finished scene / exploring an alien landscape" }] },
  { number: "05", topic: "Illustration", title: "Expression through shape and contrast.", description: "Human to Demon explores a split identity through a fractured face, contrasting silhouettes and a limited palette. Its line-art and color versions sit alongside a faceted portrait study, showing different approaches to building an image with shapes.", layout: "illustration", images: [{ src: image05_0, label: "Human to Demon / line-art version" }, { src: image05_1, label: "Human to Demon / color version" }, { src: image05_2, label: "Faceted portrait / geometric illustration" }] },
  { number: "06", topic: "Identity and editorial", title: "Symbols, palettes and page hierarchy.", description: "A candle mark for Monica Own, a gold palette study, a sports federation graphic and a climate education booklet bring together a range of visual applications. Each uses a different balance of symbol, type and supporting imagery.", layout: "identity", images: [{ src: image06_0, label: "Monica Own / aroma essentials identity" }, { src: image06_1, label: "Monica Own / identity presentation" }, { src: image06_2, label: "Gold palette / gradient study" }, { src: image06_3, label: "Qatar Billiard Sports Federation / graphic presentation" }, { src: image06_4, label: "Climate education / activity booklet cover" }] },
  { number: "07", topic: "Layout collections", title: "A consistent look across a series.", description: "Real estate, travel and fitness layouts explore how repeating colors, image treatments and typography can connect multiple posts. The supplied presentation boards bring each series together in one view.", layout: "collections", images: [{ src: image07_0, label: "Real estate / coordinated social layouts" }, { src: image07_1, label: "Travel / promotional posts and social preview" }, { src: image07_2, label: "Fitness / coordinated campaign layouts" }] }
];

function Artwork({ src, label }) {
  return (
    <figure className="illustrator-artwork">
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${label}`}>
        <img src={src} alt={label} decoding="async"  loading="lazy" />
      </a>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export default function IllustratorCaseStudy() {
  return (
    <main className="wrap detail open illustrator-case-study" id="project" aria-labelledby="illustrator-title">
      <div className="illustrator-intro">
        <div>
          <p className="eyebrow">Selected projects / Adobe Illustrator</p>
          <h1 id="illustrator-title">Ideas in<br />every shape.</h1>
        </div>
        <div className="illustrator-intro-copy">
          <p className="illustrator-lede">A collection of campaigns,<br />characters and visual identities.</p>
          <p>Selected Illustrator work spanning expressive illustrations, promotional compositions and coordinated graphic collections.</p>
          <dl className="illustrator-meta">
            <div><dt>Discipline</dt><dd>Graphic design</dd></div>
            <div><dt>Tool</dt><dd>Adobe Illustrator</dd></div>
            <div><dt>Format</dt><dd>Selected works</dd></div>
          </dl>
        </div>
      </div>

      <section className="illustrator-chapter" aria-labelledby="illustrator-showcase-title">
        <div className="illustrator-section-heading">
          <p className="eyebrow">01 / Project showcase</p>
          <div className="illustrator-heading-row">
            <h2 id="illustrator-showcase-title">A collection in 15 seconds.</h2>
            <p>Ten selected projects bring together campaigns, characters, illustration and identity work. The galleries below take a closer look at each part of the collection.</p>
          </div>
        </div>
        <figure className="illustrator-showcase">
          <ViewportVideo autoPlay muted src={showcaseVideo} controls playsInline preload="metadata" aria-label="15-second Illustrator project showcase" />
          <figcaption>Selected Illustrator projects / 15-second showcase</figcaption>
        </figure>
      </section>

      {sections.map(({ number, topic, title, description, layout, images }) => (
        <section key={number} className="illustrator-chapter" aria-labelledby={`illustrator-section-${number}`}>
          <div className="illustrator-section-heading">
            <p className="eyebrow">{number} / {topic}</p>
            <div className="illustrator-heading-row">
              <h2 id={`illustrator-section-${number}`}>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className={`illustrator-gallery illustrator-gallery--${layout}`}>
            {images.map((image) => <Artwork key={image.src} {...image} />)}
          </div>
        </section>
      ))}

      <section className="illustrator-notes">
        <p className="eyebrow">Collection notes</p>
        <h2>Different subjects.<br />A shared attention to composition.</h2>
        <p>This selection brings together finished artwork, presentation boards and character development sheets. Color, typography, shape and visual hierarchy connect the work across different subjects and formats.</p>
        <a href="#/portfolio">? Back to all projects</a>
      </section>
      <Footer><span>Selected works / Illustrator</span></Footer>
    </main>
  );
}
