import * as React from 'react';
import './ErrorPage.css';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="error-page-container">
                <img className="error-image" alt="404" src={'../assets/404-03.png'} />
                <a href="https://www.projectmatch.me" className="back-btn">
                    <button className="error-goBack-btn">Back to Home</button>
                </a>
            </div>
        )
    }
}

export default ErrorPage;