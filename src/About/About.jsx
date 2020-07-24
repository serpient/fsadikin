import * as React from 'react';
import './About.scss';

class About extends React.Component {
  render() {
    return (
      <section classname="about-page">
        <section className="about-page-container">
          <section className="user-info-section">
            <img
              className="profile-img"
              alt="profile"
              src={require('../assets/profile.png')}
            />
            <h1 className="name">Francesca Sadikin</h1>
            <h2 className="location">Based in Los Angeles</h2>
            <section className="user-links-section">
              <a
                className="user-link"
                rel="noopener noreferrer"
                href="https://github.com/serpient"
                target="_blank"
              >
                <img
                  className="user-link-img"
                  alt="github"
                  src={require('../assets/github.png')}
                />
              </a>
              <a
                className="user-link"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/fsadikin/"
                target="_blank"
              >
                <img
                  className="user-link-img"
                  alt="github"
                  src={require('../assets/linkedin.png')}
                />
              </a>
            </section>
          </section>

          <p className="description">
            Francesca Sadikin is a Software Engineer Crafter at 8th Light where
            she delivers high quality custom software projects utilizing TDD and
            SOLID principles. She uses her design background and consulting
            skills to help clients architect and implement the right solution
            for their needs.
            <br />
            <br />
            She is experienced with AWS Services, React, TypeScript,
            Javascript/Node, Phoenix (Elixir), Java, and Ruby.
            <br />
            <br />
            Francesca earned her Bachelor of Arts in Architecture from the
            University of California, Berkeley. She worked as an office design
            architect before switching careers, and taught herself programming
            through a combination of online tutorials and communities.
            <br />
            <br />
            She can be contacted at {'  '}
            <div className="bio-link"> FrancescaSadikin@gmail.com</div>
          </p>
        </section>
      </section>
    );
  }
}

export default About;
