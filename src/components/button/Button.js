import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants';

// TODO:
// - raised style

const defaultStyle = {
    height: 36,
    fontSize: '1em',
    padding: '0 16px',
    textTransform: 'uppercase',
    borderRadius: 4,
    fontFamily: 'Roboto, sans-serif',
    border: 0,
    minWidth: 120,
    cursor: 'pointer',
    outline: 'none',
};

const onFocusStyle = {
    backgroundColor: COLORS.BUTTON.FOCUSED,
};

const onPressedStyle = {
    backgroundColor: COLORS.BUTTON.PRESSED,
};

const disabledStyle = {
    color: COLORS.BUTTON.DISABLED,
};

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {isFocused: false, isPressed: false};
        this.handleFocus = this.handleFocus.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }

    handleFocus(isFocused) {
        this.setState({isFocused});
    }

    handlePress(isPressed) {
        this.setState(({isPressed}));
    }

    render() {
        let style;
        if (this.props.disabled) {
            style = Object.assign({}, defaultStyle, disabledStyle);
        } else {
            style = Object.assign({}, defaultStyle, this.state.isFocused ? onFocusStyle : {});
            style = Object.assign({}, style, this.state.isPressed ? onPressedStyle : {});
        }

        return (
            <button
                type={this.props.type}
                onClick={this.props.onClick}
                style={style}
                onMouseEnter={() => this.handleFocus(true)}
                onMouseLeave={() => this.handleFocus(false)}
                onMouseDown={() => this.handlePress(true)}
                onMouseUp={() => this.handlePress(false)}
                disabled={this.props.disabled}
            >
                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    raised: PropTypes.bool,
};

export default Button;