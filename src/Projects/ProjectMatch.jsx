import * as React from 'react';
import '../ProjectPageStyling/ProjectDetail.css';
import { projects } from '../utils/projects';
import { individualProjectPageCreator } from '../utils/individualProjectPageCreator';

var projectMatchData = projects.get('project-match');
class ProjectMatch extends React.Component {
    render() {
        return (individualProjectPageCreator(projectMatchData, "project-match-main.png"))
    }
}

export default ProjectMatch;