import { takeEvery, fork, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { loginPending, signupPending, verifyPasswordPending, changePasswordPending } from './auth';
import { patientsPending, patientInfoPending, patientUpdateInfoPending, patientAddPending, patientAddEntryPending, patientRemoveEntryPending, retrieveVaccinesPending } from './immunization';

function* watchAuth(){
    yield takeEvery(actionTypes.LOGIN_PENDING, loginPending);
    yield takeEvery(actionTypes.SIGNUP_PENDING, signupPending);
    yield takeEvery(actionTypes.VERIFY_PASSWORD_PENDING, verifyPasswordPending);
    yield takeEvery(actionTypes.CHANGE_PASSWORD_PENDING, changePasswordPending);
}

function* watchImmunization() {
    yield takeEvery(actionTypes.IMMU_PATIENTS_PENDING, patientsPending);
    yield takeEvery(actionTypes.IMMU_PATIENT_INFO_PENDING, patientInfoPending);
    yield takeEvery(actionTypes.IMMU_PATIENT_UPDATE_INFO_PENDING, patientUpdateInfoPending);
    yield takeEvery(actionTypes.IMMU_PATIENT_ADD_ENTRY_PENDING, patientAddEntryPending);
    yield takeEvery(actionTypes.IMMU_PATIENT_REMOVE_ENTRY_PENDING, patientRemoveEntryPending);
    yield takeEvery(actionTypes.IMMU_PATIENT_ADD_PENDING, patientAddPending);
    yield takeEvery(actionTypes.IMMU_RETRIEVE_VACCINES_PENDING, retrieveVaccinesPending);
}

export default function* rootSaga() {
    yield all ([
        watchAuth(),
        watchImmunization()
    ]);
};