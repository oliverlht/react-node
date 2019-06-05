import axios from "axios";

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
    ifAuth: false,
    user: '',
    pwd: '',
    type: '',
    msg: '',
}

//reducer
export function user(state=initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state,ifAuth:true,...action.payload}
        case ERROR_MSG:
            return {...state,ifAuth:false,msg:action.msg}
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



export function register({ user, pwd, repeatpwd, type }) {
    if (!user || !pwd || !repeatpwd) {
        return errorMsg('用户名密码必须填写');
    } else if (pwd != repeatpwd) {
        return errorMsg('密码和确认密码不同');
    } else {
        return (dispatch) => {
            axios.post('/user/register', { user, pwd, type })
                .then(res => {
                    if (res.status == 200 && res.data.code == 0) {
                        dispatch(registerSuccess({ user, pwd, type }));
                    } else {
                        dispatch(errorMsg(res.data.msg));
                    }
                })
        }
    }
}