import React, { Component, Fragment } from 'react';
import copy from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import Icon from "../icon/Icon";

class Anchor extends Component {
    constructor(props) {
        super(props);
        this.state = {isCopied: false};
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard() {
        copy(`${process.env.REACT_APP_BASE_URL}${this.props.link}`);
        this.setState({isCopied: true});
        setTimeout(() => {
            this.setState({isCopied: false});
        }, 1000);
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.show &&
                    <Icon
                        icon="link"
                        size="1x"
                        onClick={this.copyToClipboard}
                        style={{paddingLeft: '1em', cursor: 'pointer',}}
                    />
                }
                {
                    this.props.show && this.state.isCopied &&
                    <span style={{fontSize: 11, paddingLeft: '1em',}}>Copied</span>
                }
            </Fragment>
        );
    }
}

Anchor.propTypes = {
    link: PropTypes.string.isRequired,
    show: PropTypes.bool,
};

export default Anchor;