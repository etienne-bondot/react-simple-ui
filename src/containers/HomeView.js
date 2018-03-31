import React from 'react';
import { Link } from 'react-router-dom';

import View from './View';

const HomeView = ({...props}) => {
    const _homeView = {
        title: 'react-simple-ui',
        sections: [{
            title: 'Goals',
            desc: 'The main goal is to provide a minimal amount of pre-build components using common dependencies.',
        }, {
            title: 'Components',
            children: (
                <ul>
                    <li><Link to="/guideline/button">Button</Link></li>
                    <li><Link to="/guideline/icon">Icon</Link></li>
                    <li><Link to="/guideline/input">Input</Link></li>
                </ul>
            )
        }, {
            title: 'Dependencies',
            children: (
                <ul>
                    <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></li>
                    <li><a href="https://github.com/FortAwesome/react-fontawesome" target="_blank" rel="noopener noreferrer">react-fontawesome</a></li>
                    <li><a href="https://github.com/negomi/react-burger-menu" target="_blank" rel="noopener noreferrer">react-burger-menu</a></li>
                    <li><a href="https://github.com/glennflanagan/react-collapsible" target="_blank" rel="noopener noreferrer">react-collapsible</a></li>
                </ul>
            )
        }],
    };

    return (
        <View
            title={_homeView.title}
            sections={_homeView.sections}
            properties={_homeView.properties}
            {...props}
        />
    );
};

export default HomeView;

// # react-simple-ui
//
//
// ### Table of Contents
// - [Components](#components)
// - [Dependencies](#dependencies)
// - [Links](#links)
//
// ### Components
// - [Button](https://react-simple-ui.herokuapp.com/guideline/button)
// - [Icon](https://react-simple-ui.herokuapp.com/guideline/icon)
// - [Input](https://react-simple-ui.herokuapp.com/guideline/input)
//
// ### Dependencies
// - [react](https://reactjs.org/)
// - [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
// - [react-burger-menu](https://github.com/negomi/react-burger-menu)
// - [react-collapsible](https://github.com/glennflanagan/react-collapsible)
//
// ### Links
// - [Website](https://react-simple-ui.herokuapp.com)
//
