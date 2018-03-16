import React from 'react';

const sectionStyle = {
    paddingTop: 80,
};

const Section = ({children}) =>
    <section style={sectionStyle}>{children}</section>;

const sectionTitleStyle = {
    fontSize: 34,
    fontWeight: 400,
    lineHeight: '40px',
    marginBottom: 30,
};

const SectionTitle = ({children}) =>
    <h1 style={sectionTitleStyle}>{children}</h1>;

export {
    Section,
    SectionTitle,
};