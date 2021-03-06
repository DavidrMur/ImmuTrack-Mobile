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
    signupSetTitle,
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
    patientRemoveEntryPending,
    patientRemoveEntrySuccess,
    patientAddPending,
    patientAddSuccess,
    retrieveVaccinesPending,
    retrieveVaccinesSuccess
} from './immunization';