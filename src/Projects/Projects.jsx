import * as React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { projects } from '../utils/projects';
import { skillCreator } from '../utils/skillCreator';

const reversedProjects = projects.reverse();

class Projects extends React.Component {
    projectCreator = () => {
        return reversedProjects.map((project, index) => {
            return (
                <React.Fragment key={"project_" + index}>
                    <div className="project-timeline-dot" />
                    <div className="project-timeline-text">{project.date}</div>
                    <div className="project">
                        <div className="project-info">
                            <div className="project-title">{project.name}</div>
                            <div className="project-tech">{skillCreator(project.tech)}</div>
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
            <main className="projects-container">
                <div className="projects-container-title">Projects</div>
                <section className="projects projects-border">
                    {this.projectCreator()}
                </section>
            </main>
        )
    }
}

export default Projects;