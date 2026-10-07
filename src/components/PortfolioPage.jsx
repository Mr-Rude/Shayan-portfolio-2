import { portfolioProjects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import Footer from './Footer.jsx';

export default function PortfolioPage() {
  return (
    <main className="wrap portfolio-page" id="portfolio-page" aria-labelledby="portfolio-page-title">
      <div className="page-heading">
        <div className="eyebrow">Portfolio / All projects</div>
        <h1 id="portfolio-page-title">Explore the work.</h1>
        <p>Case studies in filmmaking, animation, 3D modeling and AI-directed production.</p>
      </div>
      <div className="portfolio-grid" id="portfolio-grid">
        {portfolioProjects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} square />
        ))}
      </div>
      <Footer>
        <a href="#/home">Back to home ↑</a>
      </Footer>
    </main>
  );
}
