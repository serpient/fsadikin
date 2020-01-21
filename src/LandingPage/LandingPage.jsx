import * as React from 'react';
import './LandingPage.scss';
import About from '../About/About';
import Projects from '../Projects/Projects';

class LandingPage extends React.Component {
  landingText = () => {
    return (
      <section className="landing-text">
        <div className="landing-name">Francesca Sadikin</div>
        <div className="landing-description">
          Software Developer & UI/UX Designer
        </div>
        <Projects />
      </section>
    );
  };
  render() {
    return (
      <main className="landing-container">
        {this.props.about ? <About /> : this.landingText()}
      </main>
    );
  }
}

export default LandingPage;
