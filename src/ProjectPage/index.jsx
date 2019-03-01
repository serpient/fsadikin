import * as React from "react";
import "./ProjectPage.scss";
import SkillCreator from "../UI/SkillCreator";
import FeatureCreator from "./components/FeatureCreator";

const removeRelativeLink = string => {
  var index = string.search("http");
  return string.substring(index);
};

const ProjectPageCreator = (projectData, mainImage) => {
  return (
    <section className="individual-project-container">
      <img
        className="project-image project-image-padding"
        src={require("../assets/" + mainImage)}
        alt="main-project"
      />
      <div className="project-page-title">{projectData.name}</div>
      <div className="project-page-description">{projectData.description}</div>
      <div className="project-page-work">
        <div className="project-page-work--title">My Accomplishments</div>
        {projectData.workDone.map((role, index) => {
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
        <SkillCreator techArray={projectData.tech} />
      </div>
      <div className="project-page-btns">
        <ProjectLinks projectData={projectData} />
      </div>
      <FeatureCreator features={projectData.features} />
    </section>
  );
};

export default ProjectPageCreator;
