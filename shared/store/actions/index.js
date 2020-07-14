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
    signupSetPostal,
    
    signupSetOHIP,
    signupSetSCN,
    signupSetOwner,
    signupSetDOB,
    signupSetGender,
    signupSetRace,
    signupSetEduLevel,
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
    patientInfoSuccess,
    patientUpdateInfoPending,
    patientAddPending,
} from './immunization';