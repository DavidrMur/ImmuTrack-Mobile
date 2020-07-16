import * as actionTypes from '../actions/actionTypes';

const initialState = {
    healthcare: {
        patients: [],
    },
    patient: {

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
        patient: action.payload,
    }
}

const patientAddEntrySuccess = (state, action) => {

    let updatedVaccines = state.patient.vaccines;
    updatedVaccines = updatedVaccines.concat([action.payload]);
    
    debugger;
    return {
        ...state,
        patient: {
            ...state.patient,
            vaccines: updatedVaccines

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
        case actionTypes.IMMU_PATIENT_ADD_ENTRY_SUCCESS:
            console.log('patient add entry case');
            return patientAddEntrySuccess(state, action);    
        default:
            return state;
    }
}

export default reducer