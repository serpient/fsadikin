import React, { useState, useEffect } from 'react';
import './Projects.scss';
import projects from 'project_data';
import ProjectCardCreator from './components/ProjectCardCreator';
import { VideoPlayer } from '../ProjectPage/components/FeatureCreator';
import { talk_data } from '../talk_data';

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
    <React.Fragment>
      <div className="below-header projects-container--header full-bleed">
        <div className="content">
          <img
            className="profile-img"
            alt="profile"
            src={require('../assets/profile.png')}
          />
          <div className="header-info">
            <h1 className="projects-container-title">Francesca Sadikin</h1>
            <h2 className="projects-container-subtext">
              Software Engineer & Speaker
            </h2>
            <p>
              Francesca Sadikin delivers high-quality software projects
              utilizing test-driven development (TDD). She uses her design
              background and consulting skills to help clients architect and
              implement the right solution for their business needs.
            </p>
            <div className="social-container">
              <a
                alt="LinkedIn"
                href="https://www.linkedin.com/in/fsadikin/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                alt="Github"
                href="https://github.com/serpient"
                target="_blank"
              >
                <i class="fab fa-github-square"></i>
              </a>
              <a alt="Email" href="mailto:francescasadikin@gmail.com">
                <i class="fas fa-at"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <main className="projects-container">
        <h2 className="section-title">Talks</h2>
        <div className="talks-container">
          {talk_data.map(talk => (
            <div key={talk_data.name} className="talk-container">
              <div className="talk-container--info">
                <h3 className="project-title">{talk.name}</h3>
                <i>
                  <p className="talk-date">{talk.date}</p>
                </i>
                <p className="talk-container--info-description">
                  {talk.description}
                </p>
                <a href={talk.slideLink} target="_blank">
                  Slide Link
                </a>
              </div>
              <VideoPlayer link={talk.liveLink} />
            </div>
          ))}
        </div>
        <hr />
        <h3 className="section-title">Projects</h3>
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
    </React.Fragment>
  );
};

export default Projects;
