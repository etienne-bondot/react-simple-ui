import React, { Component } from 'react';

import { Navbar } from './components/navbar/Navbar';
import { Sidebar, SidebarBody, SidebarHeader, SidebarLink, SidebarSection } from './components/sidebar/Sidebar';
import Routes from './Routes';

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
                <Navbar title="React-UI"/>
                <Sidebar customCrossIcon={false} isOpen={this.state.sidebarIsOpen}>
                    <SidebarHeader title="React-UI"/>
                    <SidebarBody>
                        <SidebarSection title="Components">
                            <SidebarLink to="/guideline/buttons" onClick={this.closeSidebar}>Button</SidebarLink>
                            <SidebarLink to="/guideline/icons" onClick={this.closeSidebar}>Icons</SidebarLink>
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
