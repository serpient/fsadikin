import * as React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <main className="about-page-container">
                <section className="user-info-section">
                    <img className="profile-img" alt="profile" src={require('../assets/profile.jpg')} />
                    <div className="name">Francesca Sadikin</div>
                    <div className="location">Based in Los Angeles</div>
                    <div className="user-links-section">
                        <a className="user-link" rel="noopener noreferrer" href="https://github.com/serpient" target="_blank">
                            <img className="user-link-img" alt="github" src={require('../assets/github.png')} />
                        </a>
                        <a className="user-link" rel="noopener noreferrer" href="https://www.linkedin.com/in/fsadikin/" target="_blank">
                            <img className="user-link-img" alt="github" src={require('../assets/linkedin.png')} />
                        </a>
                    </div>
                </section>

                <section className="description">
                    After graduating from UC Berkeley with a B.A. in Architecture, I became a professional
                    Architectural Designer at a boutique firm in Los Angeles working on multi-million dollar
                    projects for well-known brands. But after 3+ years of working, I realized I was bored at
                    my job because I was not creatively or intellectually challenged.

                    <br />
                    <br />

                    Once I found programming and web development, I realized that this is where my passion is.
                    After honing my skills by making my dream projects and contributing to open source projects,
                    I'm looking for a company whose goals and values I believe in, a place where I can pour my
                    effort and creativity into, and where I can do my best to help the company succeed and
                    reach new heights.

                    <br />
                    <br />

                    If you would like to chat with me, please feel free to email me at
                    <div className="bio-link">  FrancescaSadikin@gmail.com</div>

                </section>
            </main>
        )
    }
}

export default About;