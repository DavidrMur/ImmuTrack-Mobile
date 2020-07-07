import { put, select } from 'redux-saga/effects';
import * as actions from '../actions';

export function* patientsPending(action){
    try {
        console.log ('Saga response');
        //let response = yield axios.post("http://127.0.0.1:5000/signin", localStorage.getItem('jwtToken'));
        let response = [
            {'id': '1248443', 'name': 'Jim Dane', 'DOB': 'Dec-31-1998', 'OHIP': '42342354'},
            {'id': '2834923', 'name': 'Bob Roe', 'DOB': 'Dec-31-1998', 'OHIP': '654323521'},
            {'id': '9357932', 'name': 'Florence Iu', 'DOB': 'Dec-31-1998', 'OHIP': '82374628'},]
        yield put (actions.patientsSuccess(response))
    } catch (error) {
        // TODO: proper error handling
        console.log('Saga Error')
        yield put (actions.loginFail(response.data))
    }
}

export function* patientInfoPending(action){
    try {
        debugger;
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

