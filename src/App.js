import React, { Component } from 'react';

import { Navbar } from './components/navbar/Navbar';
import { Sidebar, SidebarBody, SidebarHeader, SidebarLink, SidebarSection } from './components/sidebar/Sidebar';
import Routes from './Routes';
import Icon from "./components/icon/Icon";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {sidebarIsOpen: false};
        this.closeSidebar = this.closeSidebar.bind(this);
    }

    closeSidebar() {
        this.setState({sidebarIsOpen: false});
    }

    render() {
        return (
            <div>
                <Navbar title="React-UI">
                    <a href="//github.com/etienne-bondot/react-ui" target="_blank" rel="noopener noreferrer">
                        <Icon icon={["fab", "github"]} size="2x"/>
                    </a>
                </Navbar>
                <Sidebar customCrossIcon={false} isOpen={this.state.sidebarIsOpen}>
                    <SidebarHeader title="React-UI"/>
                    <SidebarBody>
                        <SidebarSection title="Components">
                            <SidebarLink to="/guideline/button" onClick={this.closeSidebar}>Button</SidebarLink>
                            <SidebarLink to="/guideline/icon" onClick={this.closeSidebar}>Icon</SidebarLink>
                            <SidebarLink to="/guideline/input" onClick={this.closeSidebar}>Input</SidebarLink>
                        </SidebarSection>
                        <SidebarSection title="test">
                        </SidebarSection>
                    </SidebarBody>
                </Sidebar>
                <Routes/>
            </div>
        );
    }
}

export default App;
