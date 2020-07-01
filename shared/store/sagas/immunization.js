import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';

export function* patientsPending(action){
    try {
        console.log ('Saga response');
        let response = [
            {'id': '1248443', 'name': 'Jim Dane', 'DOB': 'Dec-31-1998', 'OHIP': '42342354'},
            {'id': '2834923', 'name': 'Bob Roe', 'DOB': 'Dec-31-1998', 'OHIP': '654323521'},
            {'id': '9357932', 'name': 'Florence Iu', 'DOB': 'Dec-31-1998', 'OHIP': '82374628'},]
        yield put (actions.patientsSuccess(response))
    } catch (error) {
        console.log('Saga Error')
        yield put (actions.loginFail(response.data))
    }
}