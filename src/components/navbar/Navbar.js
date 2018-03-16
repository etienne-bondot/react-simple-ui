import React from 'react';

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
    padding: '0 1em',
};

const Navbar = ({children}) =>
    <header style={headerStyle}>{children}</header>;

const headerTitle = {
    fontSize: 18,
    width: '100%',
    fontWeight: 400,
};

const NavbarTitle = ({children}) =>
    <h1 style={headerTitle}>{children}</h1>

export {
    Navbar,
    NavbarTitle,
};