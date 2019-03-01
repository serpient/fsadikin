import * as React from "react";
import ProjectPageCreator from "./index";
import projects from "project_data";

var FormCreatorData = projects.get("form-creator");
class FormCreator extends React.Component {
  render() {
    return <ProjectPageCreator projectData={FormCreatorData} />;
  }
}

export default FormCreator;
