import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

import Content from './Content';
import { Section, SectionTitle } from '../components/section/Section';
import { Article, ArticleContent, ArticleTitle } from '../components/article/Article';
import Table from '../components/table/Table';

const View = ({title, sections, properties, references, ...props}) =>
    <Content>
        <Section>
            <SectionTitle>{title}</SectionTitle>
            <Article>
                <ArticleTitle id="content">Content</ArticleTitle>
                <ArticleContent style={{
                    borderLeft: '1px solid black',
                    paddingLeft: '1em',
                    listStyleType: 'none',
                }}>
                    {
                        sections.map((s, i) =>
                            <li key={i}><Link to={`${props.location.pathname}#${s.title.split(' ').join('-').toLowerCase()}`}>{s.title}</Link></li>
                        )
                    }
                    {properties && <li><Link to={`${props.location.pathname}#properties`}>Properties</Link></li>}
                </ArticleContent>
                {
                    sections.map((s, i) =>
                        <Fragment key={i}>
                            <ArticleTitle id={`${s.title.split(' ').join('-').toLowerCase()}`}>{s.title}</ArticleTitle>
                            <ArticleContent>
                                {
                                    s.desc && typeof s.desc === 'object' ? s.desc :
                                        s.desc && typeof s.desc === 'string' ? <p>{s.desc}</p> :
                                            null
                                }
                                {s.children}
                            </ArticleContent>
                        </Fragment>
                    )
                }
                {
                    properties &&
                    <Fragment>
                        <ArticleTitle id="properties">Properties</ArticleTitle>
                        <ArticleContent>
                            <Table>
                                <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    properties.map((property, i) =>
                                        <tr key={i}>
                                            <td>{property.name}</td>
                                            <td><span className="Red">{property.type}</span></td>
                                            <td>{property.desc}</td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                        </ArticleContent>
                    </Fragment>
                }
                {
                    references &&
                    <Fragment>
                        <ArticleTitle id="references">References</ArticleTitle>
                        <ArticleContent>{references.children}</ArticleContent>
                    </Fragment>
                }
            </Article>
        </Section>
    </Content>;

View.propTypes = {
    title: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        children: PropTypes.element.isRequired,
    })),
    properties: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    })),
    references: PropTypes.shape({
        children: PropTypes.element.isRequired,
    }),
};

export default View;
