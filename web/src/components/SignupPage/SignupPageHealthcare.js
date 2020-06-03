import React, { Component } from 'react';
import {  SignupName, SignupLicense, SignupProfession, SignupPrimaryWork, SignupOtherWork, SignupCredentials } from './SignupPageComponents';

class SignupPageHealthcare extends Component {

    render() {

        return (
            <div>
               <SignupProfession />
               <SignupLicense />
               <SignupName />
               <SignupPrimaryWork />
               <SignupOtherWork />
               <SignupCredentials />
            </div>
        )
    }

}

export default SignupPageHealthcare