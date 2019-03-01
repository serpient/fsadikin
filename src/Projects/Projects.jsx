import * as React from "react";
import "./Projects.scss";
import projects from "project_data";
import ProjectCardCreator from "./components/ProjectCardCreator";

class Projects extends React.Component {
  render() {
    return (
      <main className="projects-container">
        <div className="projects-container-title">Francesca Sadikin</div>
        <div className="projects-container-subtext">
          Frontend Developer & UI/UX Designer
        </div>
        <section className="projects projects-border">
          <ProjectCardCreator projects={projects} />
        </section>
      </main>
    );
  }
}

export default Projects;
