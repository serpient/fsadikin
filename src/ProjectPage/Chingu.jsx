import * as React from "react";
import { projects } from "../utils/projects";
import { individualProjectPageCreator } from "../utils/individualProjectPageCreator";

var ChinguData = projects.get("chingu");
class Chingu extends React.Component {
  render() {
    return individualProjectPageCreator(ChinguData, "chingu-landingImage.JPG");
  }
}

export default Chingu;
