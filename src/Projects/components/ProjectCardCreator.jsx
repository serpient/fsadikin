import * as React from "react";
import { Link } from "react-router-dom";
import SkillCreator from "UI/SkillCreator";

const ProjectCardCreator = ({ projects }) => {
  return Array.from(projects).map((project, index) => {
    project = project[1];
    let {
      date,
      name,
      tech,
      description,
      liveLink,
      githubLink,
      coverPhoto
    } = project;
    return (
      <React.Fragment key={"project_" + index}>
        <div className="project-timeline-dot" />
        <div className="project-timeline-text">{date}</div>
        <div className="project">
          <div className="project-info">
            <div className="project-title">{name}</div>
            <div className="project-tech">
              <SkillCreator techArray={tech} />
            </div>
            <div className="project-description">{description}</div>
            <div className="project-btns">
              <Link
                to={"/projects/" + name.replace(/ /g, "-")}
                className="btn-more"
              >
                More Details
              </Link>
              <a href={liveLink} className="btn-more">
                Live Link
              </a>
              <a href={githubLink} className="btn-more">
                GitHub Link
              </a>
            </div>
          </div>
          <img
            className="project-coverPhoto"
            src={coverPhoto}
            alt="coverPhoto"
          />
        </div>
      </React.Fragment>
    );
  });
};

export default ProjectCardCreator;
