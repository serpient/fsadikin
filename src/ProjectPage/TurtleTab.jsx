import * as React from "react";
import ProjectPageCreator from "./index";
import projects from "project_data";

var turtleTabData = projects.get("turtle-tab");

class TurtleTab extends React.Component {
  render() {
    return <ProjectPageCreator projectData={turtleTabData} />;
  }
}

export default TurtleTab;
