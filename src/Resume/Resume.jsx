import * as React from 'react';
import './Resume.css';
// import { Link } from 'react-router-dom';

class Resume extends React.Component {
    render() {
        return (
            <div className="resume-container">
                <img className="resume-pdf" alt="resume" src={require('../assets/180625_Francesca Sadikin_Resume.jpg')}/>
            </div>
        )
    }
}

export default Resume;