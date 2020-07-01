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

