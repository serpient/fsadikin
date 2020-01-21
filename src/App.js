import * as React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./LandingPage/LandingPage";
import Header from "./Header/Header";
import ErrorPage from "./ErrorPage/ErrorPage";
import Resume from "./Resume/Resume";
import projects from "project_data";
import Projects from "./Projects/Projects";
import ProjectPageCreator from "./ProjectPage/index";

class App extends React.Component {
  state = {
    dropdownVisibility: false
  };
  closeDropdown = () => {
    this.setState({ dropdownVisibility: false });
  };
  toggleDropdown = e => {
    e.stopPropagation();
    this.setState({ dropdownVisibility: !this.state.dropdownVisibility });
  };
  scrollWithArrows = e => {
    let keyCode = e.key;
    let interval = 2000;
    switch (keyCode) {
      case 38:
        document.body.scrollTop -= interval;
        document.documentElement.scrollTop -= interval;
        break;
      case 39:
        document.body.scrollTop += interval;
        document.documentElement.scrollTop += interval;
        break;
      default:
        return;
    }
  };
  render() {
    return (
      <div
        onClick={() => this.closeDropdown()}
        onKeyPress={e => this.scrollWithArrows(e)}
        className="App"
      >
        <Header
          dropdownVisibility={this.state.dropdownVisibility}
          toggleDropdown={this.toggleDropdown}
        />
        <Switch>
          <Route exact={true} path={"/"} component={Projects} />
          <Route
            exact={true}
            path={"/about"}
            render={() => <LandingPage about={true} />}
          />
          <Route exact={true} path={"/projects"} component={Projects} />
          <Route
            exact={true}
            path="/projects/Project-Match"
            render={() => <ProjectPageCreator projectData={projects.get("project-match")} />}
          />
          <Route
            exact={true}
            path="/projects/turtlesTab"
            render={() => <ProjectPageCreator projectData={projects.get("turtle-tab")} />}
          />
          <Route 
            exact={true} 
            path="/projects/chingu"  
            render={() => <ProjectPageCreator projectData={projects.get("chingu")} />} 
          />
          <Route
            exact={true}
            path="/projects/Book-Finder"
            render={() => <ProjectPageCreator projectData={projects.get("book-finder")} />}
          />
          <Route 
            exact={true} 
            path="/projects/Connect-4" 
            render={() => <ProjectPageCreator projectData={projects.get("connect-4")} />} 
          />
          <Route
            exact={true}
            path="/projects/form-creator-v1"
            render={() => <ProjectPageCreator projectData={projects.get("form-creator")} />}
          />
          <Route
            exact={true}
            path="/projects/inclusive-maps"
            render={() => <ProjectPageCreator projectData={projects.get("inclusive-maps")} />}
          />
          <Route
            exact={true}
            path="/projects/tic-tac-toe"
            render={() => <ProjectPageCreator projectData={projects.get("tic-tac-toe")} />}
          />
           <Route
            exact={true}
            path="/projects/http-server"
            render={() => <ProjectPageCreator projectData={projects.get("http-server")} />}
          />
          <Route
            exact={true}
            path="/projects/rebay"
            render={() => <ProjectPageCreator projectData={projects.get("rebay")} />}
          />
           <Route
            exact={true}
            path="/projects/focal"
            render={() => <ProjectPageCreator projectData={projects.get("focal")} />}
          />
          <Route exact={true} path="/resume" component={Resume} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
