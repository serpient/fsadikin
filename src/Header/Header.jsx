import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header-container-all">
        <nav className="header-container">
          <Link to="/" className="logo">
            Francesca Sadikin
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
          <button
            onClick={e => this.props.toggleDropdown(e)}
            className="menu-icon"
          >
            <i class="fas fa-bars"></i>
          </button>
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
      <Link to="/projects" className="navigation">
        Projects
      </Link>
      <Link to="/resume" className="navigation">
        Resume
      </Link>
    </section>
  );
};

export default Header;
