import * as React from 'react';
import '../ProjectPageStyling/ProjectDetail.css';
import { projects } from '../utils/projects';
import { individualProjectPageCreator } from '../utils/individualProjectPageCreator';

var ChinguData = projects[0];
class Chingu extends React.Component {
    render() {
        return (individualProjectPageCreator(ChinguData, "chingu-landingImage.JPG"))
    }
}

export default Chingu;