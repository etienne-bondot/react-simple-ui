import React  from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Content from '../Content';
import { Section, SectionTitle } from '../../components/section/Section';
import { Article, ArticleContent, ArticleTitle } from '../../components/article/Article';
import Button from '../../components/button/Button';

const ButtonView = ({...props}) =>
    <Content>
        <Section>
            <SectionTitle>Buttons</SectionTitle>
            <Article>
                <ArticleTitle id="button-types">Button types</ArticleTitle>
                <ArticleContent>
                    <p>There are two standard types of buttons:</p>
                    <ul>
                        <li><Link to={`${props.location.pathname}#flat-button`}>Raised button</Link></li>
                        <li><Link to={`${props.location.pathname}#raised-button`}>Flat button</Link></li>
                    </ul>
                </ArticleContent>
                <ArticleTitle id="flat-button">Flat Button</ArticleTitle>
                <ArticleContent>
                    <Button>Button</Button>
                    <Button disabled>Button</Button>
                </ArticleContent>
                <ArticleTitle id="raised-button">Raised Button</ArticleTitle>
                <ArticleContent>
                    <Button disabled>Button</Button>
                </ArticleContent>
            </Article>
        </Section>
    </Content>;

export default ButtonView;