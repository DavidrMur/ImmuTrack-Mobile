import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { authPending } from './auth';

export function* watchAuthentication(){
    yield takeEvery(actionTypes.AUTH_PENDING, authPending);
}