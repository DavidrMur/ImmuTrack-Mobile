import * as actionTypes from '../actions/actionTypes';
import { updateObject } from 'helper-functions/utility';
import { signupSuccess, signupFail } from '../actions/auth';

const initialState = {
    type: null, // healthcare or patient
    patientInfo: {
        signupOHIP: '',
        signupSCN: '',
        signupOwner: '',
        signupName: '',
        signupDOB: '',
        signupGender: '',
    },
    healthcareInfo: {
        signupProfession: '',
        signupLicense: ''
    }

}

const loginSuccess = (state, action) => {
    return state;
}

const loginFail = (state, action) => {
    return state;
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


const setSignupProfession = (state, action) => {
    console.log('setting profession');
    return {
        ...state,
        healthcareInfo: {
            ...state.healthcareInfo,
            signupProfession: action.payload
        }
    }
}

const setSignupLicense = (state, action) => {
    console.log('setting license');
    return {
        ...state,
        healthcareInfo: {
            ...state.healthcareInfo,
            signupLicense: action.payload
        }
    }
}

const setSignupName = (state, action) => {
    console.log('setting name');
    return state;
}

const setSignupPrimaryWork = (state, action) => {
    console.log('setting primary work');
    return state;
}

const setSignupOtherWork = (state, action) => {
    console.log('setting other worm');
    return state;
}

const setSignupCredentials = (state, action) => {
    console.log('setting credentials');
    return state;
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
        case actionTypes.SIGNUP_SET_PROFESSION:
            console.log('profession case');
            return setSignupProfession(state,action); 
        case actionTypes.SIGNUP_SET_LICENSE:
            console.log('license case');
            return setSignupLicense(state,action); 
        case actionTypes.SIGNUP_SET_NAME:
            console.log('name case');
            return setSignupName(state,action); 
        case actionTypes.SIGNUP_SET_PRIMARY_WORK:
            console.log('primary work case');
            return setSignupPrimaryWork(state,action);
        case actionTypes.SIGNUP_SET_OTHER_WORK:
            console.log('other work case');
            return setSignupOtherWork(state,action);  
        case actionTypes.SIGNUP_SET_CREDENTIALS:
            console.log('credentials case');
            return setSignupCredentials(state,action);              
        default:
            return state;        

    }
}

export default reducer;