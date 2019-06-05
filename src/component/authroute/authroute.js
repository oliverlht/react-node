import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

@withRouter
export default class AuthRoute extends React.Component {
    componentDidMount() {
        //判断路由
        console.log('判断路由');
        const publicList = ['/login', '/register'];
        const { pathname } = this.props.location;
        if (publicList.indexOf(pathname) > -1) {
            return null
        }
        axios.get('/user/info')
            .then(res => {
                if (res.status === 200) {
                    console.log('res', res.data)
                    if (res.data.code === 1) { //已登录
                        console.log('已登录')
                    } else { //未登录
                        console.log('未登录');
                        this.props.history.push('/login');
                    }
                }
            })

    }
    render() {
        return null
    }
}