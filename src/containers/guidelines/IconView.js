import React from 'react';

import Content from '../Content';
import { Section, SectionTitle } from '../../components/section/Section';
import { Article, ArticleContent, ArticleTitle } from '../../components/article/Article';
import Icon from '../../components/icon/Icon';

const IconView = () =>
    <Content>
        <Section>
            <SectionTitle>Icons</SectionTitle>
            <Article>
                <ArticleTitle>Icons types</ArticleTitle>
                <ArticleContent>
                    <Icon icon="coffee"/>
                </ArticleContent>
            </Article>
        </Section>
    </Content>;

export default IconView;