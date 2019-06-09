import axios from "axios";
import { getRedirectPath } from '../util';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';
const initState = {
    redirectTo: '',
    ifAuth: false,
    user: '',
    type: '',
    msg: '',
    _id: '',
}

//reducer
export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, msg: '', ifAuth: true, ...action.payload }
        case LOGIN_SUCCESS:
            return { ...state, msg: '', ifAuth: true, ...action.payload }
        case LOAD_DATA:
            return { ...state, ifAuth: true, ...action.payload }
        case ERROR_MSG:
            return { ...state, ifAuth: false, msg: action.msg }
        default:
            return state
    }
}

//actionCreator
function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}
function registerSuccess(data) {
    return { payload: data, type: REGISTER_SUCCESS }
}

function loginSuccess(data){
    return { payload: data, type: LOGIN_SUCCESS }
}

export function loadData(data){
    return { payload: data, type: LOAD_DATA }
}



export function register({ user, pwd, repeatpwd, type }) {
    if (!user || !pwd || !repeatpwd) {
        return errorMsg('用户名密码必须填写');
    } else if (pwd !== repeatpwd) {
        return errorMsg('密码和确认密码不同');
    } else {
        return (dispatch) => {
            axios.post('/user/register', { user, pwd, type })
                .then(res => {
                    if (res.status === 200 && res.data.code === 0) {
                        dispatch(registerSuccess({ user, type, redirectTo: getRedirectPath({ type, avatar: res.data.avatar }) }));
                    } else {
                        dispatch(errorMsg(res.data.msg));
                    }
                })
        }
    }
}

export function login({ user, pwd }) {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须填写');
    } else {
        return (dispatch) => {
            axios.post('/user/login', { user, pwd })
                .then(res => {
                    if (res.status === 200 && res.data.code === 0) {
                        dispatch(loginSuccess({...res.data.data, redirectTo: getRedirectPath({ type: res.data.type, avatar: res.data.avatar })}));
                    } else {
                        dispatch(errorMsg(res.data.msg));
                    }
                })
        }
    }
}