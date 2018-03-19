import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Content from '../Content';
import { Section, SectionTitle } from '../../components/section/Section';
import { Article, ArticleContent, ArticleTitle } from '../../components/article/Article';
import Button from '../../components/button/Button';
import Table from '../../components/table/Table';

const ButtonView = ({...props}) =>
    <Content>
        <Section>
            <SectionTitle>Buttons</SectionTitle>
            <Article>
                <ArticleTitle id="content">Content</ArticleTitle>
                <ArticleContent style={{
                    borderLeft: '1px solid black',
                    paddingLeft: '1em',
                    listStyleType: 'none',
                }}>
                    <li><Link to={`${props.location.pathname}#button-types`}>Button types</Link></li>
                    <li><Link to={`${props.location.pathname}#flat-button`}>Flat button</Link></li>
                    <li><Link to={`${props.location.pathname}#raised-button`}>Raised button</Link></li>
                    <li><Link to={`${props.location.pathname}#properties`}>Properties</Link></li>
                </ArticleContent>
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
                    <Button style={{marginRight: '1em'}}>Button</Button>
                    <Button disabled style={{marginRight: '1em'}}>Button</Button>
                </ArticleContent>
                <ArticleTitle id="raised-button">Raised Button</ArticleTitle>
                <ArticleContent>
                    <Button raised style={{marginRight: '1em'}}>Button</Button>
                    <Button raised disabled style={{marginRight: '1em'}}>Button</Button>
                </ArticleContent>
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
                        <tr>
                            <td>onCLick</td>
                            <td><span className="Red">func</span></td>
                            <td>Fired when a click event is triggered</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td><span className="Red">bool | false</span></td>
                            <td>Fired when a click event is triggered</td>
                        </tr>
                        <tr>
                            <td>raised</td>
                            <td><span className="Red">bool | false</span></td>
                            <td>Define the type of the button</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td><span className="Red">object | null</span></td>
                            <td>Customize the button style</td>
                        </tr>
                        </tbody>
                    </Table>
                </ArticleContent>
            </Article>
        </Section>
    </Content>;

export default ButtonView;