import React, { Component } from 'react';
import {  SignupName, SignupLicense, SignupProfession, SignupPrimaryWork, SignupOtherWork, SignupCredentials } from './SignupPageComponents';

class SignupPageHealthcare extends Component {

    render() {
        return (
            <div>
               <SignupProfession fieldFunction = {this.props.healthcareSignupFunctions.signupSetProfession} />
               <SignupLicense fieldFunction = {this.props.healthcareSignupFunctions.signupSetLicense}/>
               <SignupName fieldFunction = {this.props.healthcareSignupFunctions.signupSetName}/>
               <SignupPrimaryWork fieldFunction = {this.props.healthcareSignupFunctions.signupSetPrimaryWork}/>
               <SignupOtherWork fieldFunction = {this.props.healthcareSignupFunctions.signupSetOtherWork}/>
               <SignupCredentials fieldFunction = {this.props.healthcareSignupFunctions.signupSetCredentials}/>
            </div>
        )
    }

}

export default SignupPageHealthcare