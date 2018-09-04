import * as React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import About from '../About/About'

class LandingPage extends React.Component {
    landingText = () => {
        return (
            <div className="landing-text">
                <div className="landing-name">Francesca Sadikin</div>
                <div className="landing-description">
                    Architect turned Web Developer looking for the opportunity to build awesome projects with an amazing team.
                    </div>
                <Link to="/projects" className="btn-navi">Projects</Link>
            </div>
        )
    }
    render() {
        console.log(this.props.about)
        return (
            <div className="landing-container">
                <div className="landing-shapes">
                    <div className="diamond-large pink" />
                    <div className="diamond yellow" />
                    <div className="circle-small blue" />
                    <div className="circle-big green" />
                    <div className="triangle purple" />
                </div>
                {
                    this.props.about
                        ? <About />
                        : this.landingText()
                }
            </div>
        )
    }
}

export default LandingPage;