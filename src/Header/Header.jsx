import * as React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header-container-all">
        <nav className="header-container">
          <Link to="/" className="logo">
            Francesca Sadikin
          </Link>
          <Link to="/about" className="navigation nav-about">
            About
          </Link>
          <Link to="/projects" className="navigation nav-projects">
            Projects
          </Link>
          <Link to="/resume" className="navigation nav-resume">
            Resume
          </Link>
        </nav>
        <nav className="header-container--mobile">
          <Link to="/" className="logo">
            Francesca Sadikin
          </Link>
          <img
            onClick={e => this.props.toggleDropdown(e)}
            className="menu-icon"
            alt="menu"
            src={require('../assets/menu.png')}
          />
          {this.props.dropdownVisibility && <MobileHeaderDropdown />}
        </nav>
        <hr className="header-border" />
      </header>
    );
  }
}

const MobileHeaderDropdown = () => {
  return (
    <section className="menu">
      <Link to="/about" className="navigation">
        About
      </Link>
      <Link to="/projects" className="navigation">
        Projects
      </Link>
      <Link to="/resume" className="navigation">
        Resume
      </Link>
    </section>
  );
};

export default (Header = withRouter(Header));
