import React, { Component } from 'react';

import { Navbar, NavbarTitle } from './components/navbar/Navbar';
import Content from './containers/Content';
import { Section, SectionTitle } from './components/section/Section';
import { Article, ArticleContent, ArticleTitle } from './components/article/Article';
import Button from './components/button/Button';
import Icon from './components/icon/Icon';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <NavbarTitle>React-UI</NavbarTitle>
                </Navbar>
                <Content>
                    <Section>
                        <SectionTitle>Buttons</SectionTitle>
                        <Article>
                            <ArticleTitle>Button types</ArticleTitle>
                            <ArticleContent>
                                <p>There are two standard types of buttons:</p>
                                <ul>
                                    <li>Raised button</li>
                                    <li>Flat button</li>
                                </ul>
                                <Button>Button</Button>
                                <Button disabled>Button</Button>
                            </ArticleContent>
                        </Article>
                    </Section>
                    <Section>
                        <SectionTitle>Icons</SectionTitle>
                        <Article>
                            <ArticleTitle>Icons types</ArticleTitle>
                            <ArticleContent>
                                <Icon icon="coffee"/>
                            </ArticleContent>
                        </Article>
                    </Section>
                </Content>
            </div>
        );
    }
}

export default App;
