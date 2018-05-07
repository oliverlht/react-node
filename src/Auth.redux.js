import axios from 'axios';

const LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    USER_DATA = 'USER_DATA';

// reducer
export function auth(state = { auth: false, user: '李云龙', age: 26 }, action) {
    console.log(action)
    switch (action.type) {
        case 'LOGIN':
            return { ...state, auth: true };
        case 'LOGOUT':
            return { ...state, auth: false };
        case 'USER_DATA':
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

// actionCreator
export function login() {
    return { type: LOGIN }
}

export function logout() {
    return { type: LOGOUT }
}

export function getUserData() {
    return dispatch => {
        axios.get('http://47.98.166.211:9093/data')
            .then(res => {
                if (res.status === 200) {
                    dispatch(userData(res.data))
                }
            })
    }
}
export function userData(data) {
    return { type: USER_DATA, payload: data }
}