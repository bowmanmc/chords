import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';


import './index.css';


const startApplication = () => {
    ReactDOM.render(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/:chord" component={App} />
                <Route path="/:chord/:quality" component={App} />
            </Switch>
        </HashRouter>,
        document.getElementById('root')
    );
    registerServiceWorker();
};

/*
 * Check to see if we are running as an app or in a web browser. If we're
 * in an app, we need to wait for the "deviceready" event to fire before
 * we start things up.
 */
if(!window.cordova) {
    // We're running in a web browser. Since we have the script tag at the
    // end of the file, we can just call startApplication
    startApplication();
}
else {
    // We're in cordova. Register an event listener for the deviceready
    // event for when we can start rendering our application to the DOM
    document.addEventListener('deviceready', startApplication, false);
}
