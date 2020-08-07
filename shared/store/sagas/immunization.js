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
        //     jwtToken: localStorage.getItem('jwtToken')
        // }
      
        // let body = {ohip: action.patientOHIP }
        // let response = yield axios.post("http://127.0.0.1:5000/retrievePatientRecord",body);
        let response = {
            'name': 'John Doe', 'DOB': 'Dec-31-1998', 'OHIP': '545234', 
            'vaccines': [
                {
                    'dateAdmin': 'July-10-2020', 'brandName': 'Shingrix', 'bacteria': ['Varicella', 'Herpes Zoster'],
                    'lot': 'eeh21nwef23', 'expiryDate': '12/2030', 'administeredUnder': 'Dr. Doe', 'location': '123 Zoo',
                    'editable': true
                },
                {
                    'dateAdmin': 'Jan-10-2020', 'brandName': 'Pediacel', 'bacteria': ['Corona', 'AIDS'],
                    'lot': 'wi6634uh', 'expiryDate': '5/2025', 'administeredUnder': 'Dr. Dane', 'location': '200 Boo',
                    'editable': false
                }
            ]
        }
        // response.data.OHIP = action.patientOHIP;
        // response.data.name = response.data.firstName + response.data.lastName;
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
        let temp = {vaccine: 'Buttery Bongs', bacteria: ['ur mum', 'get rekt']};
        if (action.payload.otherVaccine) yield axios.post("http://127.0.0.1:5000/addVaccine", );
        let response = yield axios.post("http://127.0.0.1:5000/editPatientRecord", action.payload);
        // gonna call the api again for updated page?
        //yield put (actions.patientAddEntrySuccess(action.payload))
        
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
        let payload = {...action.payload, ohip: action.ohip}
        payload.location = "Best Org Place, 26 Haddon";
        let response = yield axios.post("http://127.0.0.1:5000/addPatientRecord", payload);

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

export function* retrieveVaccinesPending(action){
    try {
        debugger;
        console.log('saga response');
        let response = yield axios.post("http://127.0.0.1:5000/retrieveVaccines");
        yield put(actions.retrieveVaccinesSuccess(response.data.vaccines));

    } catch (error) {

    }
}