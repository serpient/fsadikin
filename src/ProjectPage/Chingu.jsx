import * as React from "react";
import projects from "project_data";
import ProjectPageCreator from "./index";

var ChinguData = projects.get("chingu");
class Chingu extends React.Component {
  render() {
    return <ProjectPageCreator projectData={ChinguData} />;
  }
}

export default Chingu;
