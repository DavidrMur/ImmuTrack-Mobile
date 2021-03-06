import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import { formatStateToLoginPayload, formatStateToSignupPayload, formatStateToVerifyPasswordPayload } from '../../HelperFunctions/authHelper';
import axios from '../../axios-config';

export const getAuth = (state) => state.auth;

export function* loginPending(action){
    try {
        console.log ('Saga response');
        let payload = formatStateToLoginPayload(action);
        let response = yield axios.post("https://immutrack.herokuapp.com/signin", payload)
        var object = {token: response.data.token, timestamp: new Date().getTime()}
        localStorage.setItem('jwtToken', JSON.stringify(object));
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userInfo', JSON.stringify(response.data));
        yield put (actions.loginSuccess(response.data))
    } catch (error) {
        console.log('Saga Error')
        yield put (actions.loginFail(response.data))
    }
}

export function* signupPending(action){
    try {
        debugger;
        console.log ('Saga response');
        let auth = yield select(getAuth);
        // auth holds relevant auth information
        // need a payload with race and education level
        console.log(auth);
        let payload = formatStateToSignupPayload(auth);
        console.log(payload);
        let response = yield axios.post("https://immutrack.herokuapp.com/signup",payload)
        yield put (actions.loginSuccess(response.data))
    } catch (error) {
        console.log('Saga Error')
        console.log(error);
    }
}

export function* verifyPasswordPending(action){
    try {
        console.log ('Saga response');
        let payload = formatStateToVerifyPasswordPayload(action.payload);
        let response = yield axios.post("https://immutrack.herokuapp.com/verifyChangePassword",payload)
        localStorage.setItem('jwtToken', response.data.token);
        yield put (actions.loginSuccess(response.data))
    } catch (error) {
        console.log('Saga Error')
        console.log(error);
    }
}

export function* changePasswordPending(action){
    try {
        console.log ('Saga response');
        let response = yield axios.post("https://immutrack.herokuapp.com/changePassword",action.payload)
        yield put (actions.loginSuccess(response.data))
    } catch (error) {
        console.log('Saga Error')
        console.log(error);
    }
}