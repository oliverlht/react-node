import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../redux/user.redux';

@connect(
    state => state.user,
    {login}
)
export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius' //genus牛人，boss老板
        };
        this.click = this.click.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        });
    }
    handleLogin(){
        console.log(this.state);
        this.props.login(this.state);
    };
    click(){
        console.log('click!',this);
        this.props.history.push('/register');
    }
    render() {
        // this.click = this.click.bind(this)
        // console.log('this',this)
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                <h2>登录页</h2>
                <WingBlank>
                    {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}  
                    <List>
                        <InputItem
                            onChange={(v) => this.handleChange('user', v)}
                        >用户</InputItem>
                        <InputItem
                            onChange={(v) => this.handleChange('pwd', v)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button
                        onClick={this.handleLogin}
                        type="primary"
                    >登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.click}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}