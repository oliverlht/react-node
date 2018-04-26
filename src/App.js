import React from 'react';

export default class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { store, addGun, removeGun, removeGunAsync } = this.props;
        const num = store.getState();
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={() => store.dispatch(addGun())}>申请武器</button>
                <button onClick={() => store.dispatch(removeGun())}>上交武器</button>
                <button onClick={() => store.dispatch(removeGunAsync())}>过两天再上交</button>
            </div>
        )
    }
}