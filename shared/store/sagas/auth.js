import { put } from 'redux-saga/effects';
import * as actions from '../actions';


export function* authPending(action){
    try {
        console.log ('Saga response');
    } catch (error) {
        yield put (actions.setError());
    }
}