export {
    loginPending,
    loginSuccess,
    loginFail,
    signupPending,
    signupSuccess,
    signupFail,

    signupSetType,
    signupSetFirstName,
    signupSetLastName,
    signupSetUsername,
    signupSetPassword,
    signupSetEmail,
    
    signupSetOHIP,
    signupSetSCN,
    signupSetOwner,
    signupSetDOB,
    signupSetGender,
    signupSetProfession,
    signupSetLicense,
    signupSetWorkName,
    signupSetWorkAddress,
    signupSetWorkCity,
    signupSetWorkPostal,
    signupSetWorkPhoneNumber,
} from './auth';

export {
    // TODO: rename patientListPending
    patientsPending,
    patientsSuccess,
    patientInfoPending,
    patientInfoSuccess
} from './immunization';