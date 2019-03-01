import * as React from "react";
import "./ProjectPage.scss";
import SkillCreator from "../UI/SkillCreator";
import FeatureCreator from "./components/FeatureCreator";
import ProjectLinks from "./components/ProjectLinks";

const ProjectPageCreator = ({ projectData }) => {
  let { mainImage, name, description, workDone, tech, features } = projectData;
  return (
    <section className="individual-project-container">
      <img
        className="project-image project-image-padding"
        src={mainImage}
        alt="main-project"
      />
      <div className="project-page-title">{name}</div>
      <div className="project-page-description">{description}</div>
      <div className="project-page-work">
        <div className="project-page-work--title">My Accomplishments</div>
        {workDone.map((role, index) => {
          return (
            <div key={index} className="role-container">
              <div className="role" key={index}>
                <i className="role-dot fas fa-check" />
                <div className="role-text">{role}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="project-page-tech">
        <SkillCreator techArray={tech} />
      </div>
      <div className="project-page-btns">
        <ProjectLinks projectData={projectData} />
      </div>
      <FeatureCreator features={features} />
    </section>
  );
};

export default ProjectPageCreator;
