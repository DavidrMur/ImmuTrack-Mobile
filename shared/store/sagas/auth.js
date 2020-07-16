import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import { formatStateToLoginPayload, formatStateToSignupPayload, formatStateToVerifyPasswordPayload } from '../../HelperFunctions/authHelper';
import axios from 'axios';

export const getAuth = (state) => state.auth;

export function* loginPending(action){
    try {
        debugger;
        console.log ('Saga response');
        let payload = formatStateToLoginPayload(action);
        let response = yield axios.post("http://127.0.0.1:5000/signin", payload)
        localStorage.setItem('jwtToken', response.data.token);
        response.data = {
            profession: 'nurse',
            firstName: 'John',
            lastName: 'Doe',
            OHIP: '324252352',
            DOB: 'June-15-1995'
        }
        localStorage.setItem('loggedIn', true);
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
        // auth holds relevant auth information
        // need a payload with race and education level
        console.log(auth);
        let payload = formatStateToSignupPayload(auth);
        console.log(payload);
        let response = yield axios.post("http://127.0.0.1:5000/signup",payload)
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
        let response = yield axios.post("http://127.0.0.1:5000/verifyChangePassword",payload)
        localStorage.setItem('jwtToken', response.data.token);
        yield put (actions.loginSuccess(response.data))
    } catch (error) {
        console.log('Saga Error')
        console.log(error);
    }
}

export function* changePasswordPending(action){
    try {
        debugger;
        console.log ('Saga response');
        let response = yield axios.post("http://127.0.0.1:5000/changePassword",action.payload)
        yield put (actions.loginSuccess(response.data))
    } catch (error) {
        console.log('Saga Error')
        console.log(error);
    }
}