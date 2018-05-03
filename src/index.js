import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import reducer from './reducer';
import Auth from './Auth';
import Dashboard from './Dashboard';
import './config'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => { };
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

console.log(store.getState());

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/login' exact component={Auth} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Redirect to='/dashboard' />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

