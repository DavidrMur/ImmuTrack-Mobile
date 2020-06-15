import * as actionTypes from '../actions/actionTypes';

const initialState = {}

const loginSuccess = (state, action) => {
    return state;
}

const loginFail = (state, action) => {
    return state;
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_SUCCESS:
            console.log("SUCCESS");
            return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL:
            console.log("FAIL");
            return loginFail(state,action);
        default:
            return state;        

    }
}

export default reducer;