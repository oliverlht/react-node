import React from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, removeGunAsync} from './index.redux';

const mapStatetoProps = (state) => {
    return {num: state.counter}
}
const actionCreator = { addGun, removeGun, removeGunAsync}

@connect(
    mapStatetoProps,
    actionCreator
)
class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { num, addGun, removeGun, removeGunAsync } = this.props;
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={addGun}>申请武器</button>
                <button onClick={removeGun}>上交武器</button>
                <button onClick={removeGunAsync}>过两天再上交</button>
            </div>
        )
    }
}


export default App;