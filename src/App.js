import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Projects from './Projects/Projects';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TurtleTab from './TurtleTab/TurtleTab';
import ProjectMatch from './ProjectMatch/ProjectMatch';
import ErrorPage from './ErrorPage/ErrorPage';
import Resume from './Resume/Resume';
class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Switch>
            <Route exact={true} path={'/'} component={LandingPage} />
            <Route exact={true} path="/fsadikin" component={LandingPage} />
            <Route exact={true} path={'/projects'} component={Projects} />
            <Route exact={true} path="/projects/Project-Match" component={ProjectMatch} />
            <Route exact={true} path="/projects/turtlesTab" component={TurtleTab} />
            <Route exact={true} path="/resume" component={Resume} />
            <Route path="/*" component={ErrorPage} />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;