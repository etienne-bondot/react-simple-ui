import React from 'react';

import Content from '../Content';
import { Section, SectionTitle } from '../../components/section/Section';
import { Article, ArticleContent, ArticleTitle } from '../../components/article/Article';
import Button from '../../components/button/Button';

const ButtonView = () =>
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
    </Content>;

export default ButtonView;