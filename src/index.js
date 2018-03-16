import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Font Awesome
 */
import fontawesome from '@fortawesome/fontawesome';
import {faCheckSquare, faCoffee} from '@fortawesome/fontawesome-free-solid';

import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

// This setup is done once adding all of the icons to be use in the app's React components.
fontawesome.library.add(
    faCheckSquare,
    faCoffee
);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
