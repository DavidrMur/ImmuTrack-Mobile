import { takeEvery, fork, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { loginPending, signupPending } from './auth';
import { patientsPending, patientInfoPending } from './immunization';

function* watchAuth(){
    yield takeEvery(actionTypes.LOGIN_PENDING, loginPending);
    yield takeEvery(actionTypes.SIGNUP_PENDING, signupPending);
}

function* watchImmunization() {
    yield takeEvery(actionTypes.IMMU_PATIENTS_PENDING, patientsPending);
    yield takeEvery(actionTypes.IMMU_PATIENT_INFO_PENDING, patientInfoPending);
}

export default function* rootSaga() {
    yield all ([
        watchAuth(),
        watchImmunization()
    ]);
};