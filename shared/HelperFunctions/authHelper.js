export const formatStateToPayload = (state) => {
    
    let payload;

    if (state.type === 'patient') {

        payload = {
            scn: state.healthcareInfo.signupSCN,
            ohip: state.healthcareInfo.signupOHIP,
            owner: state.healthcareInfo.signupOwner,
            dob: state.healthcareInfo.signupDOB,
            sex: state.healthcareInfo.signupGender,
            postalCode: state.healthcareInfo.signupPostal
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