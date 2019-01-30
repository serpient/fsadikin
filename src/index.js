import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from './ScrollToTop';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </HashRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
