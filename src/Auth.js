import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { login, getUserData } from './Auth.redux';

@connect(
    state => state.auth,
    { login, getUserData }
)
class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        this.props.getUserData();
        // axios.get('/data')
        //     .then(res => {
        //         if (res.status === 200) {
        //             this.setState({
        //                 data: res.data
        //             })
        //         }
        //     })
    }
    render() {
        return (
            <div>
                <h1>名字：{this.props.user}</h1>
                <h1>年龄：{this.props.age}</h1>
                {this.props.auth ? <Redirect to='/dashboard' /> : null}
                <h1>您没有登录，请先登录</h1>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

export default Auth;