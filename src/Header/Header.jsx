import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="header-container">
                    <Link to="/" className="logo">Francesca Sadikin</Link>
                    <div className="header-spacer" />
                    <Link to="/projects" className="navigation projects">Projects</Link>
                    <Link to="/about" className="navigation about">About</Link>
                </div>
                <hr className="header-border" />
            </React.Fragment>
        )
    }
}

export default Header;