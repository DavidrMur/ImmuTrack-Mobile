import * as actionTypes from './actionTypes';

export const loginPending = (username, password) => {
    return {
        type: actionTypes.LOGIN_PENDING,
        username: username,
        password: password
    };
};

export const loginSuccess = (payload) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: payload
    };
};

export const loginFail = (payload) => {
    return {
        type: actionTypes.LOGIN_PENDING,
        payload: payload
    };
};