import * as React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

class ErrorPage extends React.Component {
  render() {
    return (
      <main className="error-page-container">
        <img
          className="error-image"
          alt="404"
          src={require('../assets/404-03.png')}
        />
        <div className="back-btn">
          <Link to="/" className="error-goBack-btn">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }
}

export default ErrorPage;
