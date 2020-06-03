import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuthentication(){
    yield takeEvery(actionTypes.TEMP, TEMP);
}