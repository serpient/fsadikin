import * as React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import Header from "./Header/Header";
import ErrorPage from "./ErrorPage/ErrorPage";
import Resume from "./Resume/Resume";

import Projects from "./Projects/Projects";
import Chingu from "./ProjectPage/Chingu";
import Connect4 from "./ProjectPage/Connect4";
import BookFinder from "./ProjectPage/BookFinder";
import FormCreator from "./ProjectPage/FormCreator";
import TurtleTab from "./ProjectPage/TurtleTab";
import ProjectMatch from "./ProjectPage/ProjectMatch";

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
    let interval = 1000;
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
            component={ProjectMatch}
          />
          <Route
            exact={true}
            path="/projects/turtlesTab"
            component={TurtleTab}
          />
          <Route exact={true} path="/projects/chingu" component={Chingu} />
          <Route
            exact={true}
            path="/projects/Book-Finder"
            component={BookFinder}
          />
          <Route exact={true} path="/projects/Connect-4" component={Connect4} />
          <Route
            exact={true}
            path="/projects/form-creator-v1"
            component={FormCreator}
          />
          <Route exact={true} path="/resume" component={Resume} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
