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

export const patientAddEntryPending = (payload, ohip) => {
    return {
        type: actionTypes.IMMU_PATIENT_ADD_ENTRY_PENDING,
        payload,
        ohip
    }
}

export const patientAddEntrySuccess = (payload) => {
    return {
        type: actionTypes.IMMU_PATIENT_ADD_ENTRY_SUCCESS,
        payload
    }
}

export const patientRemoveEntryPending = (entryId, ohip) => {
    return {
        type: actionTypes.IMMU_PATIENT_REMOVE_ENTRY_PENDING,
        entryId,
        ohip
    }
}

export const patientRemoveEntrySuccess = (payload) => {
    return {
        type: actionTypes.IMMU_PATIENT_REMOVE_ENTRY_SUCCESS,
        payload
    }
}

export const patientAddPending = (OHIP) => {
    return {
        type: actionTypes.IMMU_PATIENT_ADD_PENDING,
        ohip: OHIP // purposefully lower case to there's no issue with the api
    }
}

export const patientAddSuccess = (payload) => {
    return {
        type: actionTypes.IMMU_PATIENT_ADD_SUCCESS,
        payload
    }
}

export const retrieveVaccinesPending = (payload) => {
    return {
        type: actionTypes.IMMU_RETRIEVE_VACCINES_PENDING,
        payload
    }
}

export const retrieveVaccinesSuccess = (payload) => {
    return {
        type: actionTypes.IMMU_RETRIEVE_VACCINES_SUCCESS,
        payload
    }
}
