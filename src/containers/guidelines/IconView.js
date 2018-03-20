import React from 'react';

import View from './View';
import Icon from '../../components/icon/Icon';

const IconView = ({...props}) => {
    const _iconView = {
        title: 'Icon',
        sections: [{
            title: 'Icon types',
            children: <Icon icon="coffee"/>
        },],
        properties: [{
            name: 'icon',
            type: 'string | string[]',
            desc: 'The icon name'
        },]
    };

    return (
        <View
            title={_iconView.title}
            sections={_iconView.sections}
            properties={_iconView.properties} {...props}
        />
    );
};

export default IconView;
