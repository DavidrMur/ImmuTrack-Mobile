import * as actionTypes from './actionTypes';

export const patientsPending = (payload) => {
    console.log('pending');
    return {
        type: actionTypes.IMMU_PATIENTS_PENDING,
        payload
    };
};

export const patientsSuccess = (payload) => {
    return {
        type: actionTypes.IMMU_PATIENTS_SUCCESS,
        payload
    };
};

export const patientInfoPending = (patientOHIP) => {
    console.log('pending');
    return {
        type: actionTypes.IMMU_PATIENT_INFO_PENDING,
        patientOHIP
    };
};

export const patientInfoSuccess = (payload) => {
    return {
        type: actionTypes.IMMU_PATIENT_INFO_SUCCESS,
        payload
    };
};

export const patientUpdateInfoPending = (payload) => {
    return {
        type: actionTypes.IMMU_PATIENT_UPDATE_INFO_PENDING,
        payload
    }
}

