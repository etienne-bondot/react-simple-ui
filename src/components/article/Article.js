import React from 'react';
import { COLORS } from '../../constants';

const Article = ({children}) =>
    <div>{children}</div>;

const articleTitleStyle = {
    color: COLORS.ARTICLE.TITLE,
    fontSize: '1.25em',
    fontWeight: 400,
    lineHeight: '32px',
    marginBottom: 20,
};

const ArticleTitle = ({children}) =>
    <h1 style={articleTitleStyle}>{children}</h1>;

const articleContentStyle = {
    margin: '40px 0',
    fontSize: '0.8em',
};

const ArticleContent = ({children}) =>
    <div style={articleContentStyle}>{children}</div>;

export {
    Article,
    ArticleTitle,
    ArticleContent,
};
