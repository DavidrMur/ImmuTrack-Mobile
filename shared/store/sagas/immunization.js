import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from '../../axios-config';

export function* patientsPending(action){
    try {
        console.log ('Saga response');
        let response = yield axios.post("http://127.0.0.1:5000/retrievePatients");
        yield put (actions.patientsSuccess(response.data.patients))
    } catch (error) {
        // TODO: proper error handling
        console.log('Saga Error')
        yield put (actions.loginFail(response.data))
    }
}

export function* patientInfoPending(action){
    try {
        console.log ('Saga response');
        // let payload = {
        //     patientOHIP: action.OHIP,
        //     jwtToken: localStorage.getItem('jwtToken');
        // }
        //let response = yield axios.post("http://127.0.0.1:5000/signin", localStorage.getItem('jwtToken'));
        let response = {
            'name': 'John Doe', 'DOB': 'Dec-31-1998', 'OHIP': '545234', 
            'vaccines': [
                {
                    'dateAdmin': 'July-10-2020', 'brandName': 'SHINGRIX', 'bacteria': ['Varicella', 'Herpes Zoster'],
                    'lot': 'eeh21nwef23', 'expiryDate': '12/2030', 'administeredUnder': 'Dr. Doe', 'location': '123 Zoo'
                },
                {
                    'dateAdmin': 'Jan-10-2020', 'brandName': 'PEDIACEL', 'bacteria': ['Corona', 'AIDS'],
                    'lot': 'wi6634uh', 'expiryDate': '5/2025', 'administeredUnder': 'Dr. Dane', 'location': '200 Boo'
                }
            ]
        }
        response.OHIP = action.patientOHIP;
        yield put (actions.patientInfoSuccess(response))
    } catch (error) {
        // TODO: proper error handling
        console.log('Saga Error')
        yield put (actions.loginFail(response.data))
    }
}

export function* patientUpdateInfoPending(action){
    try {
        console.log ('Saga response');
        console.log(action);
        //let response = yield axios.post("http://127.0.0.1:5000/signin", localStorage.getItem('jwtToken'), action);
        
    } catch (error) {
        // TODO: proper error handling
        console.log('Saga Error')
        yield put (actions.loginFail(response.data))
    }
}

export function* patientAddEntryPending(action){
    try {
        console.log ('Saga response');
        console.log(action);
        //let response = yield axios.post("http://127.0.0.1:5000/signin", localStorage.getItem('jwtToken'), action);
        let response = {
            data: action.payload
        }

        // TODO: remove, temporary fix. Need the functionality to properly manage bacteria
        action.payload.bacteria = [action.payload.bacteria];
        yield put (actions.patientAddEntrySuccess(response.data))
    }
    catch (error) {
        console.log(error);
    }
}

export function* patientAddPending(action){
    try {
        console.log ('Saga add response');
        console.log(action);
        let response = yield axios.post("http://127.0.0.1:5000/addPatient", {ohip: action.ohip});
        // TODO: fix inconsistency on backend
        response.data.OHIP = response.data.ohip;
        yield put (actions.patientAddSuccess(response.data));
        
    } catch (error) {
        // TODO: proper error handling
        console.log('Saga Error')
        console.log(error)
        //yield put (actions.loginFail(response.data))
    }
}
