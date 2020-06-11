import * as actionTypes from './actionTypes';

export const authPending = (username, password) => {
    return {
        type: actionTypes.AUTH_PENDING,
        username: username,
        password: password
    };
};
