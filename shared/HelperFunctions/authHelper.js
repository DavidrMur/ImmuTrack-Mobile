
export const formatStateToLoginPayload = (state) => {
    let payload = {
        profession: state.profession,
        login: state.username,
        password: state.password
    };

    return payload;

}

export const formatStateToSignupPayload = (state) => {
    
    let payload;

    if (state.type === 'patient') {
        payload = {
            profession: 'patient',
            scn: state.patientInfo.signupSCN,
            ohip: state.patientInfo.signupOHIP,
            owner: state.patientInfo.signupOwner,
            dob: state.patientInfo.signupDOB,
            sex: state.patientInfo.signupGender,
            //TODO: should be postalCode, backend blocking
            postal_code: state.patientInfo.signupPostal,
            educationLevel: state.patientInfo.signupEduLevel,
            race: state.patientInfo.signupRace
        }
    } else if (state.type === 'healthcare') {

        payload = {
            profession: state.healthcareInfo.signupProfession,
            license: state.healthcareInfo.signupLicense,
            firstName: state.generalInfo.signupFirstName,
            lastName: state.generalInfo.signupLastName,
            email: state.generalInfo.signupEmail,
            username: state.generalInfo.signupUsername,
            password: state.generalInfo.signupPassword
        }
    }

    payload.firstName = state.generalInfo.signupFirstName;
    payload.lastName = state.generalInfo.signupLastName;
    payload.email = state.generalInfo.signupEmail;
    payload.login = state.generalInfo.signupUsername;
    payload.password = state.generalInfo.signupPassword;

    return payload;
}