import * as actionTypes from './actionTypes';

export const authPending = (payload) => {
    return {
        type: actionTypes.AUTH_PENDING,
        payload: payload
    };
};
