import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className="InputWrapper">
                <input className='Input' {...this.props} value={this.state.value}/>
            </div>
        );
    }
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
};

export default Input;
