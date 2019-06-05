import React from 'react';
import Logo from '../../component/logo/logo';
import { List, InputItem, Radio, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import {connect} from 'react-redux';
import {register} from '../../redux/user.redux';
import './register.css'

@connect(
    state=>state.user,
    {register}
)
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius' //genus牛人，boss老板
        };
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        });
    }
    handleRegister(){
        console.log(this.state);
        this.props.register(this.state);
    };
    render() {
        const { RadioItem } = Radio;
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}  
                    <List>
                        <InputItem
                            onChange={(v) => this.handleChange('user', v)}
                        >用户名</InputItem>
                        <InputItem
                            onChange={(v) => this.handleChange('pwd', v)}
                            type="password"
                        >密码</InputItem>
                        <InputItem
                            onChange={(v) => this.handleChange('repeatpwd', v)}
                            type="password"
                        >确认密码</InputItem>
                        <RadioItem
                            onChange={(v) => this.handleChange('type', 'genius')}
                            checked={this.state.type === 'genius'}
                        >牛人</RadioItem>
                        <RadioItem
                            onChange={(v) => this.handleChange('type', 'boss')}
                            checked={this.state.type === 'boss'}
                        >BOSS</RadioItem>
                    </List>
                    <WhiteSpace />
                    <Button
                        onClick={this.handleRegister}
                        type="primary"
                    >注册</Button>
                </WingBlank>
                <h2>注册页</h2>
            </div>
        )
    }
}