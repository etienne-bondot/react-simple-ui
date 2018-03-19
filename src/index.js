import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Font Awesome
 */
import fontawesome from '@fortawesome/fontawesome';
import icons from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';
import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

// This setup is done once adding all of the icons to be use in the app's React components.
fontawesome.library.add(
    brands,
    icons,
);

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
registerServiceWorker();
