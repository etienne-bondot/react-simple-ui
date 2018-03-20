import React  from 'react';

import View from './View';
import Input from '../../components/input/Input';

const InputView = ({...props}) => {
    const _inputView = {
        title: 'Input',
        sections: [{
            title: 'Text Field',
            desc: <p>The <strong>Input</strong> component is a styled component. It contains a state to handle change and every properties an input can usually takes.</p>,
            children: <Input type="email" name="email" placeholder="Email"/>,
        }],
        properties: [{
            name: 'type',
            type: 'string | "text"',
            desc: 'The input type (e.g. text, email, password...)',
        }, {
            name: 'name',
            type: 'string',
            desc: 'The input name',
        }, {
            name: 'placeholder',
            type: 'string',
            desc: 'The input placeholdre',
        }, {
            name: 'required',
            type: 'bool | false',
            desc: 'True if the field is required, false otherwise',
        }]
    };

    return (
        <View
            title={_inputView.title}
            sections={_inputView.sections}
            properties={_inputView.properties}
            {...props}
        />
    );
};

export default InputView;
