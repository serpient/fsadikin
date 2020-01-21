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
        <div className="project-timeline-text">{date}</div>
        <div className="project">
          <div className="project-info">
            <div className="project-title">{name}</div>
            <div className="project-tech">
              <SkillCreator techArray={tech} />
            </div>
            <div className="project-description">{description}</div>
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
