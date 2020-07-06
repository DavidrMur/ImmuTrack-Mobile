import * as actionTypes from './actionTypes';

// Asynchronous actions

export const loginPending = (username, password, profession) => {
    return {
        type: actionTypes.LOGIN_PENDING,
        username,
        password,
        profession
    };
};

export const loginSuccess = (payload) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload
    };
};

export const loginFail = (payload) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        payload
    };
};

export const signupPending = (payload) => {
    return {
        type: actionTypes.SIGNUP_PENDING,
        payload
    };
};

export const signupSuccess = (payload) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        payload
    };
};

export const signupFail = (payload) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        payload
    };
};


// Synchronous actions

export const signupSetType = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_TYPE,
        payload
    };
};

export const signupSetFirstName = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_FIRST_NAME,
        payload
    };
};

export const signupSetLastName = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_LAST_NAME,
        payload
    };
};

export const signupSetUsername = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_USERNAME,
        payload
    };
};

export const signupSetPassword = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_PASSWORD,
        payload
    };
};

export const signupSetEmail = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_EMAIL,
        payload
    };
};

export const signupSetOHIP = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_OHIP,
        payload
    };
};

export const signupSetSCN = (payload) => {
    console.log('scn action');
    return {
        type: actionTypes.SIGNUP_SET_SCN,
        payload
    };
};

export const signupSetOwner = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_OWNER,
        payload
    };
};

export const signupSetDOB = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_DOB,
        payload
    };
};

export const signupSetGender = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_GENDER,
        payload
    };
};

export const signupSetPostal = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_POSTAL,
        payload
    };
};

export const signupSetReview = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_REVIEW,
        payload
    };
};

export const signupSetGeneral = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_GENERAL,
        payload
    };
};


export const signupSetProfession = (payload) => {
    console.log('signupprof');
    return {
        type: actionTypes.SIGNUP_SET_PROFESSION,
        payload
    };
};

export const signupSetLicense = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_LICENSE,
        payload
    };
};

export const signupSetWorkName = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_WORK_NAME,
        payload
    };
};

export const signupSetWorkAddress = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_WORK_ADDRESS,
        payload
    };
};

export const signupSetWorkCity = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_WORK_CITY,
        payload
    };
};

export const signupSetWorkPostal = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_WORK_POSTAL,
        payload
    };
};

export const signupSetWorkPhoneNumber = (payload) => {
    return {
        type: actionTypes.SIGNUP_SET_WORK_PHONE_NUMBER,
        payload
    };
};
