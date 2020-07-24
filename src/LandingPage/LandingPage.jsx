import * as React from 'react';
import './LandingPage.scss';
import About from '../About/About';
import Projects from '../Projects/Projects';

class LandingPage extends React.Component {
  render() {
    return this.props.about ? (
      <About />
    ) : (
      <section className="landing-container">
        <section className="landing-text">
          <div className="landing-name">Francesca Sadikin</div>
          <div className="landing-description">
            Software Developer & UI/UX Designer
          </div>
          <Projects />
        </section>
      </section>
    );
  }
}

export default LandingPage;
