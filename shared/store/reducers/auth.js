import * as actionTypes from '../actions/actionTypes';

const initialState = {
    type: null, // healthcare or patient
    generalInfo: {
        signupFirstName: '',
        signupLastName: '',
        signupUsername: '',
        signupPassword: '',
    },
    patientInfo: {
        signupOHIP: '',
        signupSCN: '',
        signupOwner: '',
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

const signupSuccess = (state, action) => {
    return state;
}

const signupFail = (state, action) => {
    return state;
}

const signupSetName = (state, action) => {
    console.log('setting name');
    return state;
}

const signupSetCredentials = (state, action) => {
    console.log('setting credentials');
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

const signupSetPrimaryWork = (state, action) => {
    console.log('setting primary work');
    return state;
}

const signupSetOtherWork = (state, action) => {
    console.log('setting other worm');
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

        // General

        case actionTypes.SIGNUP_SET_NAME:
            console.log('name case');
            return signupSetName(state,action);
        case actionTypes.SIGNUP_SET_CREDENTIALS:
            console.log('credentials case');
            return signupSetCredentials(state,action);      

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
            
        // Healthcare

        case actionTypes.SIGNUP_SET_PROFESSION:
            console.log('profession case');
            return signupSetProfession(state,action); 
        case actionTypes.SIGNUP_SET_LICENSE:
            console.log('license case');
            return signupSetLicense(state,action);  
        case actionTypes.SIGNUP_SET_PRIMARY_WORK:
            console.log('primary work case');
            return signupSetPrimaryWork(state,action);
        case actionTypes.SIGNUP_SET_OTHER_WORK:
            console.log('other work case');
            return signupSetOtherWork(state,action);              
        default:
            return state;        

    }
}

export default reducer;