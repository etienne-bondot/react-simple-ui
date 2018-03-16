import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Content from './containers/Content';
import ButtonView from './containers/guidelines/ButtonView';
import IconView from './containers/guidelines/IconView';

const Routes = () =>
    <Switch>
        <Route path="/" exact render={() => <Content>Hello</Content>}/>
        <Route path="/guideline/buttons" exact component={ButtonView}/>
        <Route path="/guideline/icons" exact component={IconView}/>
    </Switch>;

export default Routes;