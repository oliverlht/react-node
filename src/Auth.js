import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from './Auth.redux';

@connect(
    state => state.auth,
    { login }
)
class Auth extends React.Component {
    // constructor(){
    //     super();
    // }
    render() {
        return (
            <div>
                {this.props.auth ? <Redirect to='/dashboard' /> : null}
                <h1>您没有登录，请先登录</h1>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

export default Auth;