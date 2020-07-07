import * as actionTypes from '../actions/actionTypes';
import _  from 'lodash';

const initialState = {
    type: null, // healthcare or patient
    generalInfo: {
        signupFirstName: '',
        signupLastName: '',
        signupUsername: '',
        signupPassword: '',
        signupEmail: ''
    },
    patientInfo: {
        signupOHIP: '',
        signupSCN: '',
        signupOwner: '',
        signupDOB: '',
        signupGender: '',
        signupRace: '',
        signupEduLevel: '',
    },
    healthcareInfo: {
        signupProfession: '',
        signupLicense: '',
        signupWorkLocations: [],
    }

}

const loginSuccess = (state, action) => {
    return state;
}

const loginFail = (state, action) => {
    return state;
}

const signupSuccess = (state, action) => {
    return state;
}

const signupFail = (state, action) => {
    return state;
}

const signupSetType = (state, action) => {
    console.log('setting type');
    return {
        ...initialState,
        type: action.payload
    }
}

const signupSetFirstName = (state, action) => {
    console.log('setting first name');
    return {
        ...state,
        generalInfo : {
            ...state.generalInfo,
            signupFirstName: action.payload
        }
    }
}

const signupSetLastName = (state, action) => {
    console.log('setting last name');
    return {
        ...state,
        generalInfo : {
            ...state.generalInfo,
            signupLastName: action.payload
        }
    }
}

const signupSetUsername = (state, action) => {
    console.log('setting Username');
    return {
        ...state,
        generalInfo: {
            ...state.generalInfo,
            signupUsername: action.payload
        }
    }
}

const signupSetPassword = (state, action) => {
    console.log('setting Password');
    return {
        ...state,
        generalInfo: {
            ...state.generalInfo,
            signupPassword: action.payload
        }
    }
}

const signupSetEmail = (state, action) => {
    console.log('setting Email');
    return {
        ...state,
        generalInfo: {
            ...state.generalInfo,
            signupEmail: action.payload
        }
    }
}

const signupSetOHIP = (state, action) => {
    console.log('setting ohip');
    return {
        ...state,
        patientInfo: {
            ...state.patientInfo,
            signupOHIP: action.payload
        }
    }
}

const signupSetSCN = (state, action) => {
    console.log('setting SCN');
    return {
        ...state,
        patientInfo: {
            ...state.patientInfo,
            signupSCN: action.payload
        }
    }
}

const signupSetOwner = (state, action) => {
    console.log('setting Owner');
    return {
        ...state,
        patientInfo: {
            ...state.patientInfo,
            signupOwner: action.payload
        }
    }
}

const signupSetDOB = (state, action) => {
    console.log('setting DOB');
    return {
        ...state,
        patientInfo: {
            ...state.patientInfo,
            signupDOB: action.payload
        }
    }
}

const signupSetGender = (state, action) => {
    console.log('setting Gender');
    return {
        ...state,
        patientInfo: {
            ...state.patientInfo,
            signupGender: action.payload
        }
    }
}

const signupSetRace = (state, action) => {
    console.log('setting Gender');
    return {
        ...state,
        patientInfo: {
            ...state.patientInfo,
            signupRace: action.payload
        }
    }
}

const signupSetEduLevel = (state, action) => {
    console.log('setting Gender');
    return {
        ...state,
        patientInfo: {
            ...state.patientInfo,
            signupEduLevel: action.payload
        }
    }
}

const signupSetPostal = (state, action) => {
    console.log('setting postal');
    return {
        ...state,
        patientInfo: {
            ...state.patientInfo,
            signupPostal: action.payload
        }
    }
}


const signupSetProfession = (state, action) => {
    console.log('setting profession');
    return {
        ...state,
        healthcareInfo: {
            ...state.healthcareInfo,
            signupProfession: action.payload
        }
    }
}

const signupSetLicense = (state, action) => {
    console.log('setting license');
    return {
        ...state,
        healthcareInfo: {
            ...state.healthcareInfo,
            signupLicense: action.payload
        }
    }
}

const signupSetWorkName = (state, action) => {

    // TODO: work locations probably needs to be reworked in the future
    console.log('setting primary work name');
    // TODO: make this work for multiple work places (will probably need each "form" to have an index)
    
    // TODO: this lets me generate a new work place, should pull this out for other work places
    let workLocations = _.cloneDeep(state.healthcareInfo.signupWorkLocations);
    // Need this for every entry in case they don't start with work name
    if (typeof(workLocations[0]) !== 'object') workLocations[0] = {}
    workLocations[0].workName = action.payload;
    workLocations[0].EMRIntegration = 'thing';

    return {
        ...state,
        healthcareInfo: {
            ...state.healthcareInfo,
            signupWorkLocations: workLocations
        }
    }
}

const signupSetWorkAddress = (state, action) => {
    console.log('setting primary work address');
    let workLocations = _.cloneDeep(state.healthcareInfo.signupWorkLocations);
    // Need this for every entry in case they don't start with work name
    if (typeof(workLocations[0]) !== 'object') workLocations[0] = {}
    workLocations[0].workAddress = action.payload;

    return {
        ...state,
        healthcareInfo: {
            ...state.healthcareInfo,
            signupWorkLocations: workLocations
        }
    }
}

const signupSetWorkCity = (state, action) => {
    console.log('setting primary work city');
    let workLocations = _.cloneDeep(state.healthcareInfo.signupWorkLocations);
    // Need this for every entry in case they don't start with work name
    if (typeof(workLocations[0]) !== 'object') workLocations[0] = {}
    workLocations[0].workCity = action.payload;

    return {
        ...state,
        healthcareInfo: {
            ...state.healthcareInfo,
            signupWorkLocations: workLocations
        }
    }
}

const signupSetWorkPostal = (state, action) => {
    console.log('setting primary work postal');
    let workLocations = _.cloneDeep(state.healthcareInfo.signupWorkLocations);
    // Need this for every entry in case they don't start with work name
    if (typeof(workLocations[0]) !== 'object') workLocations[0] = {}
    workLocations[0].workPostal = action.payload;

    return {
        ...state,
        healthcareInfo: {
            ...state.healthcareInfo,
            signupWorkLocations: workLocations
        }
    }
}

const signupSetWorkPhoneNumber = (state, action) => {
    console.log('setting primary work phone number');
    let workLocations = _.cloneDeep(state.healthcareInfo.signupWorkLocations);
    if (typeof(workLocations[0]) !== 'object') workLocations[0] = {}
    workLocations[0].workPhoneNumber = action.payload;

    return {
        ...state,
        healthcareInfo: {
            ...state.healthcareInfo,
            signupWorkLocations: workLocations
        }
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type) {

        // Asychronous
        case actionTypes.LOGIN_SUCCESS:
            console.log("SUCCESS");
            return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL:
            console.log("FAIL");
            return loginFail(state,action);
        case actionTypes.SIGNUP_SUCCESS:
            console.log("SUCCESS");
            return signupSuccess(state, action);
        case actionTypes.SIGNUP_FAIL:
            console.log("FAIL")
            return signupFail(state,action);

        // Synchronous

        // General

        
        case actionTypes.SIGNUP_SET_TYPE:
            console.log('type case');
            return signupSetType(state,action);
        case actionTypes.SIGNUP_SET_FIRST_NAME:
            console.log('name case');
            return signupSetFirstName(state,action);
        case actionTypes.SIGNUP_SET_LAST_NAME:
            console.log('name case');
            return signupSetLastName(state,action);
        case actionTypes.SIGNUP_SET_USERNAME:
            console.log('Username case');
            return signupSetUsername(state,action); 
        case actionTypes.SIGNUP_SET_PASSWORD:
            console.log('Password case');
            return signupSetPassword(state,action); 
        case actionTypes.SIGNUP_SET_EMAIL:
            console.log('Email case');
            return signupSetEmail(state,action);              

        // Patient

        case actionTypes.SIGNUP_SET_OHIP:
            console.log('ohip case');
            return signupSetOHIP(state,action);
        case actionTypes.SIGNUP_SET_SCN:
            console.log('scn case');
            return signupSetSCN(state,action);    
        case actionTypes.SIGNUP_SET_OWNER:
            console.log('Owner case');
            return signupSetOwner(state,action);
        case actionTypes.SIGNUP_SET_DOB:
            console.log('DOB case');
            return signupSetDOB(state,action);
        case actionTypes.SIGNUP_SET_GENDER:
            console.log('Gender case');
            return signupSetGender(state,action); 
        case actionTypes.SIGNUP_SET_RACE:
            console.log('race case');
            return signupSetRace(state,action); 
        case actionTypes.SIGNUP_SET_EDU_LEVEL:
            console.log('edu case');
            return signupSetEduLevel(state,action);         
        case actionTypes.SIGNUP_SET_POSTAL:
            console.log('postal case');
            return signupSetPostal(state,action);    
            
        // Healthcare

        case actionTypes.SIGNUP_SET_PROFESSION:
            console.log('profession case');
            return signupSetProfession(state,action); 
        case actionTypes.SIGNUP_SET_LICENSE:
            console.log('license case');
            return signupSetLicense(state,action);  
        case actionTypes.SIGNUP_SET_WORK_NAME:
            console.log('primary work name case');
            return signupSetWorkName(state,action); 
        case actionTypes.SIGNUP_SET_WORK_ADDRESS:
            console.log('primary work address case');
            return signupSetWorkAddress(state,action);
        case actionTypes.SIGNUP_SET_WORK_CITY:
            console.log('primary work city case');
            return signupSetWorkCity(state,action);  
        case actionTypes.SIGNUP_SET_WORK_POSTAL:
            console.log('primary work postal case');
            return signupSetWorkPostal(state,action);
        case actionTypes.SIGNUP_SET_WORK_PHONE_NUMBER:
            console.log('primary work phone number case');
            return signupSetWorkPhoneNumber(state,action);                             
        default:
            return state;        

    }
}

export default reducer;