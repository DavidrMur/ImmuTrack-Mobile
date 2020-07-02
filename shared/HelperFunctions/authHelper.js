export const formatStateToPayload = (state) => {
    
    let payload;

    if (state.type === 'patient') {
        debugger;
        payload = {
            scn: state.patientInfo.signupSCN,
            ohip: state.patientInfo.signupOHIP,
            owner: state.patientInfo.signupOwner,
            dob: state.patientInfo.signupDOB,
            sex: state.patientInfo.signupGender,
            postalCode: state.patientInfo.signupPostal,
            educationLevel: 'highschool',
            race: 'caucasian',
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
    payload.username = state.generalInfo.signupUsername;
    payload.password = state.generalInfo.signupPassword;

    return payload;
}