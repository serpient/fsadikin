import React, { useState, useEffect } from 'react';
import './Projects.scss';
import projects from 'project_data';
import ProjectCardCreator from './components/ProjectCardCreator';

const Projects = () => {
  const [viewMode, setViewMode] = useState(
    localStorage.getItem('projectViewMode') || 'timeline'
  );
  const [viewControlsIsVisible, setViewControlVisibility] = useState(false);

  const getProjectClassName = viewMode => {
    if (viewMode === 'timeline') {
      return 'projects projects-border';
    } else {
      return 'projects-grid';
    }
  };

  const getButtonClassName = (viewMode, match) => {
    return `projects-view-mode-btn ${viewMode === match &&
      'projects-view-mode-btn--active'}`;
  };

  useEffect(() => {
    if (window.innerWidth < 500) {
      setViewControlVisibility(false);
    } else {
      setViewControlVisibility(true);
    }
  }, [window.innerWidth]);

  useEffect(() => {
    localStorage.setItem('projectViewMode', viewMode);
  }, [viewMode]);

  return (
    <main className="projects-container">
      <div className="projects-container-title">Francesca Sadikin</div>
      <div className="projects-container-subtext">
        Software Developer & UI/UX Designer
      </div>
      {viewControlsIsVisible && (
        <div className="project-view-mode-controller">
          <button
            className={getButtonClassName(viewMode, 'grid')}
            onClick={() => setViewMode('grid')}
          >
            <i class="fas fa-th-large"></i>
          </button>
          <button
            className={getButtonClassName(viewMode, 'timeline')}
            onClick={() => setViewMode('timeline')}
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
      )}
      <section className={getProjectClassName(viewMode)}>
        <ProjectCardCreator projects={projects} />
      </section>
    </main>
  );
};

export default Projects;
