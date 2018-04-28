import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import { logout } from './Auth.redux'

function ErYing() {
    return <h2>二营</h2>
}
function QiBingLian() {
    return <h2>骑兵连</h2>
}

@connect(
    state => state.auth,
    { logout }
)
class Dashboard extends React.Component {
    // constructor() {
    //     super();
    // }
    render() {
        console.log(this.props);
        const { url } = this.props.match
        const dashboard = (
            <div>
                <ul>
                    <li>
                        <Link to={`${url}`}>仓库</Link>
                    </li>
                    <li>
                        <Link to={`${url}/erying`}>二营</Link>
                    </li>
                    <li>
                        <Link to={`${url}/qibinglian`}>骑兵连</Link>
                    </li>
                </ul>
                <Route path={`${url}`} exact component={App} />
                <Route path={`${url}/erying`} component={ErYing} />
                <Route path={`${url}/qibinglian`} component={QiBingLian} />
                <button onClick={this.props.logout}>注销</button>
            </div>
        );
        const redirect = <Redirect to='/login' />
        return (
            this.props.auth ? dashboard : redirect
        )
    }
}

export default Dashboard;