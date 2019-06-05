import React from 'react';
import logo from './logo.png';
import './logo.css';

console.log('img:' +  logo);

export default class Logo extends React.Component {
    render(){
        return (
            <div className="logo-container">
                <img src={logo} alt=""/>
            </div>
        )
    }
}