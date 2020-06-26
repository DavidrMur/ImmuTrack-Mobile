import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { loginPending, signupPending } from './auth';

export function* watchAuth(){
    yield takeEvery(actionTypes.LOGIN_PENDING, loginPending);
    yield takeEvery(actionTypes.SIGNUP_PENDING, signupPending);
}