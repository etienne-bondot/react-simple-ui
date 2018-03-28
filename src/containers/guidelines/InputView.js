import React  from 'react';

import View from '../View';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const InputView = ({...props}) => {
    const _inputView = {
        title: 'Input',
        sections: [{
            title: 'Text Field',
            desc: <p>The <strong>Input</strong> component is a styled component. It contains a state to handle change and every properties an input can usually takes.</p>,
            children: (
                <form onSubmit={evt => {
                    evt.preventDefault();
                }}>
                    <Input type="text" name="username" placeholder="Username" required/>
                    <Input type="email" name="email" placeholder="Email" required/>
                    <Input type="password" name="password" placeholder="Password" required/>
                    <Input type="text" name="disabledField" placeholder="Disabled" disabled/>
                    <Input type="text" name="patternField" placeholder="Validate three letters" pattern="[A-Za-z]{3}"/>
                    <Button type="submit" raised>Submit</Button>
                </form>
            ),
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
        }, {
            name: 'disabled',
            type: 'bool | false',
            desc: 'True if the field is disabled, false otherwise',
        }, {
            name: 'pattern',
            type: 'string',
            desc: 'A regex pattern to respect',
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
