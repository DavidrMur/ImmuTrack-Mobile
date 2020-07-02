import * as actionTypes from '../actions/actionTypes';

const initialState = {
    healthcare: {
        patients: [],
        currentPatient: {}
    }
}

const patientsSuccess = (state, action) => {
    return {
        ...state,
        healthcare: {
            ...state.healthcare,
            patients: action.payload,
        }
    }
}

const patientInfoSuccess = (state, action) => {
    return {
        ...state,
        healthcare: {
            ...state.healthcare,
            currentPatient: action.payload,
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case actionTypes.IMMU_PATIENTS_SUCCESS:
            console.log('patients case');
            return patientsSuccess(state, action);
        case actionTypes.IMMU_PATIENT_INFO_SUCCESS:
            console.log('patient info case');
            return patientInfoSuccess(state, action);
        default:
            return state;
    }
}

export default reducer