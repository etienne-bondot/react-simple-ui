import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import { COLORS } from "../../constants";
import "./Button.css";

const styles = {
  default: {
    height: 36,
    fontSize: "1em",
    padding: "0 16px",
    textTransform: "uppercase",
    borderRadius: 4,
    fontFamily: "Roboto, sans-serif",
    border: 0,
    minWidth: 120,
    cursor: "pointer",
    outline: "none",
    transition: "all 150ms linear"
  },
  flat: {
    default: {},
    onFocus: {
      backgroundColor: COLORS.FOCUSED
    },
    onPressed: {
      backgroundColor: COLORS.PRESSED
    },
    disabled: {
      color: COLORS.DISABLED
    }
  },
  raised: {
    default: {
      boxShadow:
        "rgba(0, 0, 0, 0.2) -2px 2px 0px -2px, rgba(0, 0, 0, 0.2) 0px 2px 4px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -2px"
    },
    onFocus: {
      boxShadow:
        "rgba(0, 0, 0, 0.2) -2px 2px 0px -2px, rgba(0, 0, 0, 0.2) 0px 4px 4px 0px, rgba(0, 0, 0, 0.2) 0px 4px 4px -2px"
    },
    onPressed: {
      boxShadow: "none"
    },
    disabled: {
      backgroundColor: COLORS.DISABLED
    }
  }
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      isPressed: false,
      rippleVisibility: "hidden"
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ rippleVisibility: "visible" }), 1000);
  }

  handleFocus(isFocused) {
    this.setState({ isFocused });
  }

  handlePress(isPressed) {
    this.setState({ isPressed });
  }

  render() {
    let style = _.assign(
      {},
      styles.default,
      this.props.style ? this.props.style : {}
    );

    if (this.props.disabled) {
      style = _.assign(
        {},
        style,
        this.props.raised ? styles.raised.disabled : styles.flat.disabled
      );
    } else {
      style = _.assign(
        {},
        style,
        this.props.raised ? styles.raised.default : styles.flat.default
      );
      style = _.assign(
        {},
        style,
        this.state.isFocused
          ? this.props.raised
            ? styles.raised.onFocus
            : styles.flat.onFocus
          : {}
      );
      style = _.assign(
        {},
        style,
        this.state.isPressed
          ? this.props.raised
            ? styles.raised.onPressed
            : styles.flat.onPressed
          : {}
      );
    }

    return (
      <button
        type={this.props.type}
        onClick={this.props.onClick}
        style={style}
        onMouseOver={() => this.handleFocus(true)}
        onMouseOut={() => this.handleFocus(false)}
        onMouseDown={() => this.handlePress(true)}
        onMouseUp={() => this.handlePress(false)}
        disabled={this.props.disabled}
        className="Button"
      >
        {this.props.ripple ? (
          <div
            className="Ripple"
            style={{ visibility: this.state.rippleVisibility }}
          />
        ) : null}
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  raised: PropTypes.bool,
  style: PropTypes.object,
  ripple: PropTypes.bool
};

Button.defaultProps = {
  disabled: false,
  raised: false,
  ripple: true
};

export default Button;
