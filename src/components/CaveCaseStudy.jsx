import Footer from './Footer.jsx';
import '../styles/cave.css';
import film from '../assets/Cave/cave-film.mp4';
import comparison from '../assets/Cave/before-after.mp4';
import poster from '../assets/Cave/poster.jpg';
import comparisonPoster from '../assets/Cave/comparison.jpg';
import rockKit from '../assets/Cave/rock-kit.jpg';
import shell from '../assets/Cave/rock-shell.jpg';
import pillars from '../assets/Cave/pillars.jpg';
import stalactites from '../assets/Cave/stalactites.jpg';
import ground from '../assets/Cave/ground.jpg';
import lighting from '../assets/Cave/lighting.jpg';
import dressing from '../assets/Cave/set-dressing.jpg';
import statue from '../assets/Cave/statue.jpg';
import water from '../assets/Cave/water.jpg';
import arch from '../assets/Cave/arch.jpg';
import cavern from '../assets/Cave/cavern.jpg';

function Still({src, label}) {
  return <figure><a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${label}`}><img src={src} alt={label} loading="lazy" decoding="async" /></a><figcaption>{label}</figcaption></figure>;
}
function Chapter({number, topic, title, text, children}) {
  return <section className="cave-chapter" aria-labelledby={`cave-${number}`}><p className="eyebrow">{number} / {topic}</p><div className="cave-heading"><h2 id={`cave-${number}`}>{title}</h2><p>{text}</p></div>{children}</section>;
}
export default function CaveCaseStudy() {
  return <main className="wrap detail open cave-case-study" id="project" aria-labelledby="cave-title">
    <a className="back" href="#/portfolio">← All projects</a>
    <div className="cave-intro"><div><p className="eyebrow">Environment / Cinematic study</p><h1 id="cave-title">Cinematic<br/>Cave Environment.</h1></div><div><p className="cave-lede">A hidden chamber.<br/>A story told through light.</p><p>Weathered stone, still water and traces of an abandoned sanctuary. A journey from an open arrangement of rocks to a dark, atmospheric cavern.</p><dl><div><dt>Focus</dt><dd>Environment design</dd></div><div><dt>Visual direction</dt><dd>Light & atmosphere</dd></div><div><dt>Format</dt><dd>Portrait cinematic</dd></div></dl></div></div>
    <Chapter number="01" topic="The film" title="Step into the chamber." text="The film moves from small details to the scale of the cavern: leaves on water, worn stonework and a hooded statue waiting at the end of the path.">
      <div className="cave-film-layout"><figure className="cave-film"><video muted src={film} poster={poster} controls playsInline preload="metadata"/><figcaption>Cinematic Cave Environment / Main film</figcaption></figure><div className="cave-film-notes"><h3>Detail. Depth. Discovery.</h3><p>Close views establish texture. Pillars and hanging rock formations frame the passage. The wider shots reveal how the warm torchlight and cool reflections connect the space.</p><div className="cave-palette"><span/> <span/> <span/></div><p className="cave-note">Stone grey / Amber / Midnight blue</p></div></div>
    </Chapter>
    <Chapter number="02" topic="Building the space" title="From rock pieces to a cavern." text="The first recording begins with a selection of rock forms on an open ground plane. Moving, rotating and layering these pieces establishes the walls, floor and enclosing roof."><div className="cave-grid"><Still src={rockKit} label="Rock selection / establishing the building blocks"/><Still src={shell} label="Cave shell / layered rocks enclose the space"/></div></Chapter>
    <Chapter number="03" topic="Composition & structure" title="Give the eye a path to follow." text="Pillars introduce a repeated rhythm through the interior. Stalactites break up the ceiling, while uneven stone underfoot keeps the passage organic. The statue becomes a focal point deeper inside."><div className="cave-grid"><Still src={pillars} label="Interior structure / positioning the pillars"/><Still src={stalactites} label="Ceiling detail / hanging formations frame the passage"/></div><div className="cave-triptych"><Still src={arch} label="Final frame / the stone entrance"/><Still src={poster} label="Final frame / the central passage"/><Still src={statue} label="Final frame / the hooded statue"/></div></Chapter>
    <Chapter number="04" topic="Surface & set dressing" title="A place with traces of time." text="Rough ground, scattered leaves, vegetation and small props add variation at close range. In the finished film, reflective water carries the lighting across the floor and connects these details."><div className="cave-grid"><Still src={ground} label="Ground assembly / uneven stone surfaces"/><Still src={dressing} label="Set dressing / leaves, plants and small light fixtures"/></div></Chapter>
    <Chapter number="05" topic="Light & atmosphere" title="Warm light. Cold depths." text="The lighting pass introduces small sources along the ground and tests how they read across the scene. The final composition pairs blue reflections with amber torches, leaving dark areas between them to preserve depth."><Still src={lighting} label="Lighting development / local sources and reflections"/><div className="cave-duo"><Still src={water} label="Final detail / light carried across water"/><Still src={cavern} label="Final atmosphere / amber columns and blue rock"/></div></Chapter>
    <Chapter number="06" topic="Before & after" title="The same space, transformed." text="The comparison reel brings the working scene and finished atmosphere together, followed by glimpses of the placement process and final cinematic shots."><figure className="cave-film cave-comparison"><video muted src={comparison} poster={comparisonPoster} controls playsInline preload="metadata"/><figcaption>Before & after / process reel</figcaption></figure></Chapter>
    <section className="cave-end"><p className="eyebrow">The result</p><h2>A small world,<br/>revealed one frame at a time.</h2><p>The finished environment brings structure, surface detail and contrasting light into a single visual journey.</p><a href="#/portfolio">← Explore all projects</a></section><Footer><span>Cinematic Cave Environment</span></Footer>
  </main>;
}

