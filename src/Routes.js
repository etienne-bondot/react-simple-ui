import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeView from './containers/HomeView';
import ButtonView from './containers/guidelines/ButtonView';
import DialogView from './containers/guidelines/DialogView';
import IconView from './containers/guidelines/IconView';
import InputView from './containers/guidelines/InputView';
import ToastView from './containers/guidelines/ToastView';
import withTracker from './withTracker';

const Routes = () =>
    <Switch>
        <Route path="/" exact component={withTracker(HomeView)}/>
        <Route path="/guideline/button" exact component={withTracker(ButtonView)}/>
        <Route path="/guideline/dialog" exact component={withTracker(DialogView)}/>
        <Route path="/guideline/icon" exact component={withTracker(IconView)}/>
        <Route path="/guideline/input" exact component={withTracker(InputView)}/>
        <Route path="/guideline/toast" exact component={withTracker(ToastView)}/>
    </Switch>;

export default Routes;
