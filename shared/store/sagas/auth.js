import { put } from 'redux-saga/effects';
import * as actions from '../actions';


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