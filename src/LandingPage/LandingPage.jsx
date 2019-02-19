import * as React from 'react';
import './LandingPage.css';
import About from '../About/About';
import Projects from '../Projects/Projects';

class LandingPage extends React.Component {
    landingText = () => {
        return (
            <section className="landing-text">
                <div className="landing-name">Francesca Sadikin</div>
                <div className="landing-description">
                    Front End Developer & UI/UX Designer
                    </div>
                    <Projects />
            </section>
        )
    }
    render() {
        return (
            <main className="landing-container">
                {/* <section className="landing-shapes">
                    <div className="diamond-large pink" />
                    <div className="diamond yellow" />
                    <div className="circle-small blue" />
                    <div className="circle-big green" />
                    <div className="triangle purple" />
                </section> */}
                {
                    this.props.about
                        ? <About />
                        : this.landingText()
                }
            </main>
        )
    }
}

export default LandingPage;