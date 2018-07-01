import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';


import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/:chord" component={App} />
            <Route path="/:chord/:quality" component={App} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
