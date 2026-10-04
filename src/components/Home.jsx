import { useEffect, useRef } from 'react';
import useStageScroll from '../hooks/useStageScroll.js';
import { projects, homeGroups } from '../data/projects.js';
import { aboutCopy, skills, experience, contacts } from '../data/site.js';
import Hero from './Hero.jsx';
import ProjectCard from './ProjectCard.jsx';
import Footer from './Footer.jsx';

function SelectedProjects() {
  return (
    <section id="portfolio" aria-labelledby="selected-title">
      <div className="section-head">
        <div>
          <div className="eyebrow">01 / Selected projects</div>
          <h2 id="selected-title">Ideas into images.</h2>
        </div>
        <p>
          Eight project slots across 3D, motion, illustration and AI.
          <br />
          Media and project stories are pending.
        </p>
      </div>
      <div className="projects" id="home-projects">
        {homeGroups.map((indices, g) => (
          <div
            key={g}
            className="home-stage project-stage"
            id={`project-stage-${g + 1}`}
            role="group"
            aria-label={`Project group ${g + 1} of ${homeGroups.length}`}
          >
            {indices.map((i) => (
              <div className="project-tile" key={projects[i].id}>
                <h3 className="software-heading">{projects[i].software}</h3>
                <ProjectCard project={projects[i]} index={i} homepage />
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="note">Project artwork and descriptions are placeholders until final work is selected.</p>
    </section>
  );
}

function AboutAndSkills() {
  return (
    <div className="home-stage about-stage" id="about-stage" data-stage-label="About and skills">
      <section className="about" id="about">
        <div>
          <div className="eyebrow">02 / About me</div>
          <h2>
            Hello,
            <br />
            I'm Shayan.
          </h2>
        </div>
        <div>
          {aboutCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {experience.map((row) => (
            <div className="experience" key={row.label}>
              <span>{row.label}</span>
              <span>{row.detail}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="skills" id="skills">
        <div className="eyebrow">03 / What I do</div>
        <h2>A mix of craft &amp; curiosity.</h2>
        <div className="tags">
          {skills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContactRow({ label, text, href }) {
  const content = (
    <>
      <span>{label}</span>
      <span>{text}</span>
    </>
  );
  if (!href) return <div className="contact-row">{content}</div>;
  const external = /^https?:/.test(href);
  return (
    <a className="contact-row" href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {content}
    </a>
  );
}

function Contact() {
  return (
    <div className="home-stage contact-stage" id="contact-stage" data-stage-label="Contact">
      <section className="contact contact--details" id="contact">
        <div className="contact-copy">
          <div className="eyebrow">04 / Contact me</div>
          <h2>Let's connect.</h2>
          <div className="contact-list">
            {contacts.map((c) => (
              <ContactRow key={c.label} {...c} />
            ))}
          </div>
        </div>
      </section>
      <Footer>
        <a href="#/home">Back to top ↑</a>
      </Footer>
    </div>
  );
}

// Which stage each #/home/<section> link should land on.
const SECTION_STAGE = { about: 'about-stage', skills: 'about-stage', contact: 'contact-stage' };

export default function Home({ section, routeKey }) {
  const ref = useRef(null);
  const go = useStageScroll(ref);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const id = SECTION_STAGE[section] || 'intro-stage';
      go(document.getElementById(id));
    });
    return () => cancelAnimationFrame(frame);
  }, [section, routeKey, go]);

  return (
    <main id="home" className="wrap home" ref={ref}>
      <Hero />
      <SelectedProjects />
      <AboutAndSkills />
      <Contact />
    </main>
  );
}
