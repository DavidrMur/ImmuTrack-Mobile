import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import { formatStateToPayload } from '../../HelperFunctions/authHelper';

export const getAuth = (state) => state.auth;

export function* loginPending(action){
    try {
        console.log ('Saga response');
        let response = yield axios.post("http://127.0.0.1:5000/signin")
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
        console.log(auth);
        let payload = formatStateToPayload(auth);
        console.log(payload);
        let response = yield axios.post("http://127.0.0.1:5000/signup",payload)
        yield put (actions.loginSuccess(response.data))
    } catch (error) {
        console.log('Saga Error')
        console.log(error);
    }
}