import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import View from './View';

const flexColumn = {
    display: 'flex',
    flexDirection: 'column',
};

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
                    <li><Link to="/guidelines/button" style={{marginRight: '1em'}}>Button</Link></li>
                    <li><Link to="/guidelines/icon" style={{marginRight: '1em'}}>Icon</Link></li>
                    <li><Link to="/guidelines/input" style={{marginRight: '1em'}}>Input</Link></li>
                </ul>
            )
        }, {
            title: 'Dependencies',
            children: (
                <ul>
                    <li><a href="https://reactjs.org/" target="_blank" style={{marginRight: '1em'}}>React</a></li>
                    <li><a href="https://github.com/FortAwesome/react-fontawesome" target="_blank" style={{marginRight: '1em'}}>react-fontawesome</a></li>
                    <li><a href="https://github.com/negomi/react-burger-menu" target="_blank" style={{marginRight: '1em'}}>react-burger-menu</a></li>
                    <li><a href="https://github.com/glennflanagan/react-collapsible" target="_blank" style={{marginRight: '1em'}}>react-collapsible</a></li>
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
