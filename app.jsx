import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import MainPage from './components/main_page'

export default () => (

    <div>
        <HashRouter>
            <Switch> 
                <Route exact path="/" component={MainPage} />
            </Switch>
        </HashRouter>
    </div>
);