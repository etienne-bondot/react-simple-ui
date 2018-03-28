import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';

import './Sidebar.css';

import { COLORS } from '../../constants';

const Sidebar = ({width = 250, isOpen, children, ...props}) =>
    <Menu {...props} isOpen={isOpen} width={width}>{children}</Menu>;

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    borderBottom: '1px solid #e0e0e0',
};

const headerTitle = {
    fontSize: 18,
    fontWeight: 400,
};

const SidebarHeader = ({title}) =>
    <header style={headerStyle}>
        <h1 style={headerTitle}>{title}</h1>
    </header>;

const sidebarBodyStyle = {
    fontSize: 13,
    padding: '12px 0 40px 0',
};

const SidebarBody = ({children}) =>
    <nav style={sidebarBodyStyle}>{children}</nav>;

const sidebarSectionTitleStyle = {
    color: COLORS.TITLE,
    fontWeight: 700,
    marginTop: 0,
    padding: '15px 0 15px 22px',
    fontSize: 13,
};

class SidebarSection extends Component {
    constructor(props) {
        super(props);
        this.state = {shouldOpen: false};
    }

    render() {
        return (
            <dl style={{margin: 0, padding: 0, cursor: 'pointer',}}>
                <Collapsible
                    trigger={
                        <dt style={sidebarSectionTitleStyle} onClick={() => this.setState(prevState => ({shouldOpen: !prevState.shouldOpen}))}>
                            {this.props.title}
                        </dt>
                    }
                    transitionTime={150}
                >
                    <div>
                        <dd style={{margin: 0, fontSize: 13,}}>{this.props.children}</dd>
                    </div>
                </Collapsible>
            </dl>
        );
    }
}

const sidebarLinkStyle = {
    padding: '10px 10px 10px 46px',
    display: 'block',
};

const SidebarLink = ({to, onClick, children}) =>
    <Link to={to} onClick={onClick} style={sidebarLinkStyle} className="SidebarLink" activeStyle={{backgroundColor: '#eee'}}>{children}</Link>;

SidebarLink.propTypes = {
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export {
    Sidebar,
    SidebarHeader,
    SidebarBody,
    SidebarSection,
    SidebarLink,
};
