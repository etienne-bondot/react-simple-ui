import React, { Component } from 'react';
import Button from './components/button/Button';
import Icon from './components/icon/Icon';

class App extends Component {
    render() {
        return (
            <div>
                <section>
                    <h2>Buttons</h2>
                    <div>
                        <Button disabled>Button</Button>
                    </div>
                </section>
                <section>
                    <h2>Icons</h2>
                    <Icon icon="coffee"/>
                </section>
            </div>
        );
    }
}

export default App;
