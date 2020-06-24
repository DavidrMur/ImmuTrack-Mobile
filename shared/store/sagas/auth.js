import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';

export const getAuth = (state) => state.auth;

export function* loginPending(action){
    try {
        console.log ('Saga response');
        let response = {data: 'bop'};
        yield put (actions.loginSuccess(response.data))
    } catch (error) {
        console.log('Saga Error')
        yield put (actions.loginFail(response.data))
    }
}

export function* signupPending(action){
    try {
        console.log ('Saga response');
        let auth = yield select(getAuth);
        console.log(auth);
        // auth holds relevant auth information
        let response = {data: 'bop'};
        yield put (actions.loginSuccess(response.data))
    } catch (error) {
        console.log('Saga Error')
        yield put (actions.loginFail(response.data))
    }
}