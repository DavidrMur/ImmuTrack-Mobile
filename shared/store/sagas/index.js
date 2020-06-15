import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { loginPending } from './auth';

export function* watchAuth(){
    yield takeEvery(actionTypes.LOGIN_PENDING, loginPending);
}