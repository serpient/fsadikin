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
                <React.Fragment>
                    <div className="project-timeline-dot" />
                    <div className="project-timeline-text">{project.date}</div>
                    <div className="project">
                        <div className="project-info">
                            <div className="project-title">{project.name}</div>
                            <div className="project-tech">{this.skillCreator(project.tech)}</div>
                            <div className="project-description">{project.description}</div>
                            <Link to={'/projects/' + project.name.replace(/ /g, '-')} className="btn-more">More Details</Link>
                        </div>
                        <img className="project-coverPhoto" src={project.coverPhoto} alt="coverPhoto" />
                    </div>
                </React.Fragment>
            );
        })
    }
    render() {
        return (
            <div className="projects-container">
                <div className="projects-container-title">Projects</div>
                <div className="projects projects-border">
                    {this.projectCreator()}
                </div>
            </div>
        )
    }
}

export default Projects;