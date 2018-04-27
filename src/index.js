import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './App';
import { counter } from './index.redux';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => { };
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
));
function ErYing() {
    return <h2>二营</h2>
}
function QiBingLian() {
    return <h2>骑兵连</h2>
}
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>仓库</Link>
                    </li>
                    <li>
                        <Link to='erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='qibinglian'>骑兵连</Link>
                    </li>
                </ul>
                <Route path='/' exact component={App} />
                <Route path='/erying' component={ErYing} />
                <Route path='/qibinglian' component={QiBingLian} />

            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

