import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.click = this.click.bind(this)
    }
    click(){
        console.log('click!',this);
        this.props.history.push('/register');
    }
    render() {
        // this.click = this.click.bind(this)
        // console.log('this',this)
        return (
            <div>
                <Logo></Logo>
                <h2>登录页</h2>
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.click}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}