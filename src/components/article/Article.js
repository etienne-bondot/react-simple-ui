import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { COLORS } from "../../constants";
import Anchor from "../anchor/Anchor";

const Article = ({ children }) => <div>{children}</div>;

const articleTitleStyle = {
  display: "flex",
  alignItems: "center",
  color: COLORS.TITLE,
  fontSize: "1.25em",
  fontWeight: 400,
  lineHeight: "32px",
  marginBottom: 20,
  width: "100%"
};

class _ArticleTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  render() {
    return (
      <h1
        style={articleTitleStyle}
        id={this.props.id}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        {this.props.children}
        <Anchor
          show={this.state.isHovered}
          link={`${this.props.location.pathname}${this.props.location.hash}`}
        />
      </h1>
    );
  }
}

const ArticleTitle = withRouter(_ArticleTitle);

const articleContentStyle = {
  margin: "40px 0",
  fontSize: "0.8em"
};

const ArticleContent = ({ children, ...props }) => (
  <div style={{ ...articleContentStyle, ...props.style }}>{children}</div>
);

export { Article, ArticleTitle, ArticleContent };
