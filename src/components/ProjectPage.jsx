import { caseStudy } from '../data/projects.js';
import Footer from './Footer.jsx';
import BlenderCaseStudy from './BlenderCaseStudy.jsx';
import HeadphonesCaseStudy from './HeadphonesCaseStudy.jsx';

// Media block. Every card on a case study takes the project's colour tone.
function Media({ label, wide = false, tone }) {
  return (
    <div tabIndex={0} className={['card', wide && 'wide', tone].filter(Boolean).join(' ')}>
      <div className="art" />
      <span className="media-label">{label}</span>
    </div>
  );
}

export default function ProjectPage({ project }) {
  const c = caseStudy(project);
  const tone = project.tone;

  if (project.id === 'gpt-ai') {
    return <HeadphonesCaseStudy project={project} />;
  }
  if (project.id === 'blender') {
    return <BlenderCaseStudy project={project} />;
  }

  return (
    <main className="wrap detail open" id="project">
      <a className="back" href="#/portfolio">
        ← All projects
      </a>

      <div className="detail-intro">
        <div>
          <div className="eyebrow">Selected project / Case study</div>
          <h1 id="project-title">{project.title}</h1>
        </div>
        <div>
          <p id="project-summary">{c.summary}</p>
          <div className="detail-meta">
            <span>
              DISCIPLINE
              <br />
              <br />
              <span id="project-discipline">{c.discipline}</span>
            </span>
            <span>
              SOFTWARE
              <br />
              <br />
              <span id="project-software">{c.software}</span>
            </span>
            <span>
              YEAR
              <br />
              <br />
              <span id="project-year">{c.year}</span>
            </span>
          </div>
        </div>
      </div>

      <Media wide tone={tone} label="FULL-WIDTH PROJECT FILM / HERO IMAGE" />

      <div className="detail-split">
        <div>
          <div className="eyebrow">The idea</div>
          <h2>Where it started.</h2>
          <p id="project-idea">{c.idea}</p>
        </div>
        <Media tone={tone} label="DETAIL / DEVELOPMENT IMAGE" />
      </div>

      <section className="detail-copy">
        <div className="eyebrow">Render preview</div>
        <h2>A closer look at the final scene.</h2>
        <p id="project-render-intro">{c.renderIntro}</p>
      </section>

      <Media wide tone={tone} label="LARGE PROCESS IMAGE / RENDER" />

      <section className="detail-copy">
        <div className="eyebrow">Supporting detail</div>
        <h2>Details worth a closer look.</h2>
        <p id="project-detail-note">{c.detailNote}</p>
      </section>

      <div className="detail-split">
        <Media tone={tone} label="CLOSE-UP / SUPPORTING IMAGE" />
        <div>
          <div className="eyebrow">The process</div>
          <h2>
            From detail
            <br />
            to the final frame.
          </h2>
          <p id="project-process">{c.process}</p>
          <p id="project-support">{c.support}</p>
        </div>
      </div>

      <div className="detail-end">
        <a href="#/portfolio">← Back to all projects</a>
      </div>

      <Footer>
        <span>Case study preview</span>
      </Footer>
    </main>
  );
}
