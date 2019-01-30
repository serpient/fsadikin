import * as React from 'react';
import '../ProjectPageStyling/ProjectDetail.css';
import { projects } from '../utils/projects';
import { individualProjectPageCreator } from '../utils/individualProjectPageCreator';

var BookFinderData = projects.get('book-finder');
class BookFinder extends React.Component {
    render() {
        return (individualProjectPageCreator(BookFinderData, "book-finder-main.png"))
    }
}

export default BookFinder;