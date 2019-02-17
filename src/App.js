import React, { Component } from "react";
import ReactGA from "react-ga";
import { ToastContainer } from "react-toastify";

import { Navbar } from "./components/navbar/Navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarLink,
  SidebarSection
} from "./components/sidebar/Sidebar";
import Routes from "./Routes";
import Icon from "./components/icon/Icon";
import ButtonView from "./containers/guidelines/ButtonView";

const COMPONENTS = [
  {
    name: "button",
    component: ButtonView
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sidebarIsOpen: false };
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  componentWillMount() {
    /**
     * Google Analytics initialization
     */
    ReactGA.initialize("UA-116564057-1");
  }

  closeSidebar() {
    this.setState({ sidebarIsOpen: false });
  }

  render() {
    return (
      <div>
        <Navbar title="react-simple-ui">
          <a
            href="//github.com/etienne-bondot/react-simple-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={["fab", "github"]} size="2x" />
          </a>
        </Navbar>
        <Sidebar customCrossIcon={false} isOpen={this.state.sidebarIsOpen}>
          <SidebarHeader title="react-simple-ui" />
          <SidebarBody>
            <SidebarSection title="Components">
              {COMPONENTS.map(c => (
                <SidebarLink
                  to={`/guideline/${c.name}`}
                  onClick={this.closeSidebar}
                >
                  {c.name}
                </SidebarLink>
              ))}

              {/*<SidebarLink to="/guideline/button" onClick={this.closeSidebar}>Button</SidebarLink>*/}
              {/*<SidebarLink to="/guideline/icon" onClick={this.closeSidebar}>Icon</SidebarLink>*/}
              {/*<SidebarLink to="/guideline/input" onClick={this.closeSidebar}>Input</SidebarLink>*/}
              {/*<SidebarLink to="/guideline/toast" onClick={this.closeSidebar}>Toast</SidebarLink>*/}
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
        <Routes />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
