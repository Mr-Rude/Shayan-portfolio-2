import { useEffect } from 'react';
import useHashRoute from './hooks/useHashRoute.js';
import { findProject } from './data/projects.js';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import PortfolioPage from './components/PortfolioPage.jsx';
import ProjectPage from './components/ProjectPage.jsx';

export default function App() {
  const { view, param, key } = useHashRoute();

  // Unknown project ids fall back to the portfolio grid; unknown routes to home.
  const project = view === 'project' ? findProject(param) : null;
  const page = view === 'portfolio' || (view === 'project' && !project) ? 'portfolio' : project ? 'project' : 'home';

  useEffect(() => {
    document.body.classList.toggle('is-home', page === 'home');
    if (page === 'home') return; // Home handles its own stage scrolling.
    const frame = requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    return () => cancelAnimationFrame(frame);
  }, [page, key]);

  return (
    <>
      <Header />
      {page === 'home' && <Home section={param} routeKey={key} />}
      {page === 'portfolio' && <PortfolioPage />}
      {page === 'project' && <ProjectPage key={project.id} project={project} />}
    </>
  );
}
