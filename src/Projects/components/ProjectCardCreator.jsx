import * as React from 'react';
import { Link } from 'react-router-dom';
import SkillCreator from 'UI/SkillCreator';

const ProjectCardCreator = ({ projects }) => {
  return Array.from(projects).map((project, index) => {
    project = project[1];
    let { date, name, tech, description, coverPhoto } = project;
    return (
      <section key={'project_' + index}>
        <div className="project-timeline-dot" />
        <p className="project-timeline-text">{date}</p>
        <div className="project">
          <div className="project-info">
            <h1 className="project-title">{name}</h1>
            <div className="project-tech">
              <SkillCreator techArray={tech} />
            </div>
            <p className="project-description">{description}</p>
          </div>
          <Link
            to={'/projects/' + name.replace(/ /g, '-')}
            className="project-coverPhoto"
          >
            <img
              className="project-coverPhoto"
              src={coverPhoto}
              alt="coverPhoto"
            />
          </Link>
        </div>
      </section>
    );
  });
};

export default ProjectCardCreator;
