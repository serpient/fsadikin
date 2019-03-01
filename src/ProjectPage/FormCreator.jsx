import * as React from "react";
import { projects } from "../utils/projects";
import { individualProjectPageCreator } from "../utils/individualProjectPageCreator";

var FormCreatorData = projects.get("form-creator");
class FormCreator extends React.Component {
  render() {
    return individualProjectPageCreator(FormCreatorData, "form-creator.gif");
  }
}

export default FormCreator;
