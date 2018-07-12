import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header-container-all">
                <div className="header-container">
                    <Link to="/" className="logo">Francesca Sadikin</Link>
                    <div className="header-spacer" />
                    <Link to="/projects" className="navigation nav-projects">Projects</Link>
                    <Link to="/about" className="navigation nav-about">About</Link>
                </div>
                <hr className="header-border" />
            </div>
        )
    }
}

export default Header;