import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header-container-all">
                <div className="header-container">
                    <Link to="/" className="logo">Francesca Sadikin</Link>
                    <Link to="/about" className="navigation nav-about">About</Link>
                    <Link to="/projects" className="navigation nav-projects">Projects</Link>
                    <Link to="/resume" className="navigation nav-resume">Resume</Link>
                </div>
                <div className="header-container--mobile">
                    <Link to="/" className="logo">Francesca Sadikin</Link>
                    <img onClick={(e) => this.props.toggleDropdown(e)} className="menu-icon" alt="menu" src={require('../assets/menu.png')} />
                    {
                        this.props.dropdownVisibility && <MobileHeaderDropdown />
                    }
                </div>
                <hr className="header-border" />
            </div>
        )
    }
}

const MobileHeaderDropdown = () => {
    return (
        <div className="menu">
            <Link to="/about" className="navigation">About</Link>
            <Link to="/projects" className="navigation">Projects</Link>
            <Link to="/resume" className="navigation">Resume</Link>
        </div>
    )
}

export default Header;