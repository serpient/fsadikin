import * as React from "react";
import ProjectPageCreator from "./index";
import projects from "project_data";

var projectMatchData = projects.get("project-match");
class ProjectMatch extends React.Component {
  render() {
    return <ProjectPageCreator projectData={projectMatchData} />;
  }
}

export default ProjectMatch;
