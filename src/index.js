import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import reducer from './reducer';
import './config'
import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authroute/authroute';


// import 'antd-mobile/dist/antd-mobile.css';

// const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => { };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk),
    // reduxDevtools
));

function Boss (){
    return <h1>BOSs页面</h1>
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path="/boss" component={Boss}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                
            </div>
            
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

