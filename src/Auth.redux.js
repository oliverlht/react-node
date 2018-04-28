const LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT';

// reducer
export function auth(state = { auth: false, user: '李云龙' }, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, auth: true };
        case 'LOGOUT':
            return { ...state, auth: false };
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