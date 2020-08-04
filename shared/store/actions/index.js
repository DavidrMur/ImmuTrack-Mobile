export {
    loginPending,
    loginSuccess,
    loginFail,
    signupPending,
    signupSuccess,
    signupFail,
    verifyPasswordPending,
    changePasswordPending,

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
    signupSetWorkEMR,
    signupUnsetWorkLocation
} from './auth';

export {
    // TODO: rename patientListPending
    patientsPending,
    patientsSuccess,
    patientInfoPending,
    patientInfoSuccess,
    patientUpdateInfoPending,
    patientAddEntryPending,
    patientAddEntrySuccess,
    patientAddPending,
    patientAddSuccess
} from './immunization';