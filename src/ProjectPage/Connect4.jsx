import * as React from "react";
import ProjectPageCreator from "./index";
import projects from "project_data";

var Connect4Data = projects.get("connect-4");
class Connect4 extends React.Component {
  render() {
    return <ProjectPageCreator projectData={Connect4Data} />;
  }
}

export default Connect4;
