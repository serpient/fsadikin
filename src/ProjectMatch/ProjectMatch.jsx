import * as React from 'react';
import '../ProjectPageStyling/ProjectDetail.css';
import { Link } from 'react-router-dom';
import { projects } from '../utils/projects';
import { skillCreator } from '../utils/skillCreator';
import { projectFeatureCreator } from '../utils/projectFeatureCreator';

var projectMatchData = projects[0];
var features = [
    {
        title: 'Get Matched',
        description: `Looking for a project to build? Filter through our projects by categories and tags to
                        find a team you want to join! Already got an idea? Post a project to
                        find programmers and designers to help build the project.`,
        image: require('../assets/project-match-project.png')
    },
    {
        title: 'Team Portal',
        description: `Once you find your team, use your dedicated project portal to chat, upload 
                        new mockups to review, and a timeline of all previous mockups discussed`,
        image: require('../assets/project-match-project-portal.png')
    },
    {
        title: 'Mockup Revisions',
        description: `Place symbols to draw attention to graphic issues in the mockup, and discuss 
                        the issue with other team members before marking it as resolved.`,
        image: require('../assets/project-match-revision-Portal.png')
    },
    {
        title: 'User Profile',
        description: `Update your user profile with a bio, techstack and projects so that others 
                        can learn more about you as a potential teammate.`,
        image: require('../assets/project-match-user-profile.png')
    },
    {
        title: 'Project Showcase',
        description: `Once your project is complete, enter it into the Project Showcase where 
                        users can rate the project based off its design, usability, and code quality. `,
        image: require('../assets/project-match-project-showcase.png')
    }
]

class ProjectMatch extends React.Component {
    render() {
        return (
            <div className="project-match-container">
                <img
                    className="project-image project-image-padding"
                    src={require('../assets/project-match-main.png')}
                    alt="main-project"
                />
                <div className="project-page-title">{projectMatchData.name}</div>
                <div className="project-page-description">{projectMatchData.description}</div>
                <div className="project-page-tech">{skillCreator(projectMatchData.tech)}</div>
                <div className="project-page-btns">
                    <Link to={projectMatchData.liveLink} className="main-navi-btn">Live Link</Link>
                    <Link to={projectMatchData.githubLink} className="main-navi-btn">Github Link</Link>
                </div>
                {projectFeatureCreator(features)}
            </div>
        )
    }
}

export default ProjectMatch;