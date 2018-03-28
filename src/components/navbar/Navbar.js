import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, STYLES } from '../../constants';

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    height: STYLES.NAVBAR.HEIGHT,
    boxShadow: '0 2px 5px rgba(0, 0, 0 ,.26)',
    backgroundColor: COLORS.WHITE,
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

const Navbar = ({title = '', children}) =>
    <header style={headerStyle}>
        <h1 style={headerTitle}>{title}</h1>
        {children}
    </header>;

Navbar.propTypes = {
    title: PropTypes.string,
};

export {
    Navbar,
};
