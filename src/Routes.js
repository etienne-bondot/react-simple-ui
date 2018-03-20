import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Content from './containers/Content';
import ButtonView from './containers/guidelines/ButtonView';
import IconView from './containers/guidelines/IconView';
import InputView from './containers/guidelines/InputView';

const Routes = () =>
    <Switch>
        <Route path="/" exact render={() => <Content>Hello</Content>}/>
        <Route path="/guideline/button" exact component={ButtonView}/>
        <Route path="/guideline/icon" exact component={IconView}/>
        <Route path="/guideline/input" exact component={InputView}/>
    </Switch>;

export default Routes;
