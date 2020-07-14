import { takeEvery, fork, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { loginPending, signupPending, verifyPasswordPending } from './auth';
import { patientsPending, patientInfoPending, patientUpdateInfoPending } from './immunization';

function* watchAuth(){
    yield takeEvery(actionTypes.LOGIN_PENDING, loginPending);
    yield takeEvery(actionTypes.SIGNUP_PENDING, signupPending);
    yield takeEvery(actionTypes.VERIFY_PASSWORD_PENDING, verifyPasswordPending);
}

function* watchImmunization() {
    yield takeEvery(actionTypes.IMMU_PATIENTS_PENDING, patientsPending);
    yield takeEvery(actionTypes.IMMU_PATIENT_INFO_PENDING, patientInfoPending);
    yield takeEvery(actionTypes.IMMU_PATIENT_UPDATE_INFO_PENDING, patientUpdateInfoPending);
}

export default function* rootSaga() {
    yield all ([
        watchAuth(),
        watchImmunization()
    ]);
};