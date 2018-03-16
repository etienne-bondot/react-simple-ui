import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * This is a wrapper for the Font Awesome icons, thus it can take every
 * props of the FontAwesome component:
 * More here: https://github.com/FortAwesome/react-fontawesome
 */
const Icon = ({icon, ...props}) =>
    <FontAwesomeIcon icon={icon} {...props}/>;

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    spin: PropTypes.bool,
    pulse: PropTypes.bool,
    fixedWidth: PropTypes.bool,
    border: PropTypes.bool,
    listItem: PropTypes.bool,
    inverse: PropTypes.bool,
    pull: PropTypes.oneOf([
        'left',
        'right'
    ]),
    flip: PropTypes.oneOf([
        'horizontal',
        'vertical',
        'both'
    ]),
    rotation: PropTypes.number,
    transform: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.object
    ]),
    mask: PropTypes.object,
    symbol: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.bool
    ]),
};

export default Icon;