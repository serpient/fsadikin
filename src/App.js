import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Projects from './Projects/Projects';
import Header from './Header/Header';
import TurtleTab from './TurtleTab/TurtleTab';
import ProjectMatch from './ProjectMatch/ProjectMatch';
import ErrorPage from './ErrorPage/ErrorPage';
import Resume from './Resume/Resume';
import Chingu from './Chingu/Chingu';
import Blog from './Blog/Blog';

class App extends React.Component {
  state = {
    dropdownVisibility: false
  }
  closeDropdown = () => {
    this.setState({ dropdownVisibility: false })
  }
  toggleDropdown = (e) => {
    e.stopPropagation();
    this.setState({ dropdownVisibility: !this.state.dropdownVisibility })
  }
  scrollWithArrows = (e) => {
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
  }
  render() {
    return (
      <div onClick={() => this.closeDropdown()} onKeyPress={e => this.scrollWithArrows(e)} className="App">
        <Header dropdownVisibility={this.state.dropdownVisibility} toggleDropdown={this.toggleDropdown}/>
        <Switch>
          <Route exact={true} path={'/'} component={LandingPage} />
          <Route exact={true} path={'/about'} render={() => <LandingPage about={true} />} />
          <Route exact={true} path={'/projects'} component={Projects} />
          <Route exact={true} path="/projects/Project-Match" component={ProjectMatch} />
          <Route exact={true} path="/projects/turtlesTab" component={TurtleTab} />
          <Route exact={true} path="/projects/chingu" component={Chingu} />
          <Route exact={true} path="/resume" component={Resume} />
          <Route exact={true} path="/blog" component={Blog} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;