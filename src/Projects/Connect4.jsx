import * as React from 'react';
import '../ProjectPageStyling/ProjectDetail.css';
import { projects } from '../utils/projects';
import { individualProjectPageCreator } from '../utils/individualProjectPageCreator';

var Connect4Data = projects.get('connect-4');
class Connect4 extends React.Component {
    render() {
        return (individualProjectPageCreator(Connect4Data, "connect-4-main.png"))
    }
}

export default Connect4;