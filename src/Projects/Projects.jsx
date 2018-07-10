import * as React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { projects } from '../utils/projects';
class Projects extends React.Component {
    skillCreator = (techArray) => {
        return techArray.map(skill => {
            return (
                <div className="project-tech-skill">{skill}</div>
            )
        })
    }
    projectCreator = () => {
        return projects.map(project => {
            return (
                <div className="project">
                    <div className="project-title">{project.name}</div>
                    <div className="project-tech">{this.skillCreator(project.tech)}</div>
                    <div className="project-description">{project.description}</div>
                    <Link to={'/' + project.name.replace(/ /g, '-')} className="btn-more">More Details</Link>
                </div>
            );
        })
    }
    render() {
        return (
            <div className="projects-container">
                <div className="project">
                    {this.projectCreator()}
                </div>
            </div>
        )
    }
}

export default Projects;