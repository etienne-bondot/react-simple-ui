import React from 'react';
import PropTypes from 'prop-types';

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    height: 64,
    boxShadow: '0 2px 5px rgba(0,0,0,.26)',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
    position: 'fixed',
    padding: '0 3em',
};

const headerTitle = {
    fontSize: 18,
    width: '100%',
    fontWeight: 400,
};

const Navbar = ({title = '',}) =>
    <header style={headerStyle}>
        <h1 style={headerTitle}>{title}</h1>
    </header>;

Navbar.propTypes = {
    title: PropTypes.string,
};

export {
    Navbar,
};