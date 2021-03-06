const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

// reducer
export function counter(state=0, action){
    console.log(state)
    switch(action.type){
        case '加机关枪':
            return state + 1
        case '减机关枪':
            return state - 1
        default:
            return 10
    }
}

// action creator
export function addGun(){
    return {type: ADD_GUN}
}
export function removeGun(){
    return {type: REMOVE_GUN}
}

export function removeGunAsync(){
    return dispatch => {
        setTimeout(() => {
            dispatch(removeGun());
        },1000);
    }
}