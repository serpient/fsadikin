import * as React from 'react';
import '../ProjectPageStyling/ProjectDetail.css';
import { projects } from '../utils/projects';
import { skillCreator } from '../utils/skillCreator';
import { projectFeatureCreator } from '../utils/projectFeatureCreator';

var turtleTabData = projects[1];
var features = [
    {
        image: require('../assets/turtleTab-search.png')
    },
    {
        image: require('../assets/turtleTab-feature1.png')
    },
    {
        image: require('../assets/turtleTab-feature2.png')
    }
]

class TurtleTab extends React.Component {
    render() {
        return (
            <div className="project-match-container">
            <img
                className="project-image project-image-padding"
                src={require('../assets/turtleTab-main.png')}
                alt="main-project"
            />
            <div className="project-page-title">{turtleTabData.name}</div>
            <div className="project-page-description">{turtleTabData.description}</div>
            <div className="project-page-tech">{skillCreator(turtleTabData.tech)}</div>
            <div className="project-page-btns">
                <a href={turtleTabData.liveLink} target="_blank" className="main-navi-btn">Live Link</a>
                <a href={turtleTabData.githubLink} target="_blank" className="main-navi-btn">Github Link</a>
            </div>
            {projectFeatureCreator(features)}
        </div>
        )
    }
}

export default TurtleTab;