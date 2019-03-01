import * as React from "react";
import ProjectPageCreator from "./index";
import projects from "project_data";

var BookFinderData = projects.get("book-finder");
class BookFinder extends React.Component {
  render() {
    return <ProjectPageCreator projectData={BookFinderData} />;
  }
}

export default BookFinder;
