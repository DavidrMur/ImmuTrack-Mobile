import React, { Component } from 'react';
import {  SignupName, SignupLicense, SignupProfession, SignupPrimaryWork, SignupOtherWork, SignupCredentials } from './SignupPageComponents';

class SignupPageHealthcare extends Component {

    state = {
        pageCount: 1,
        maxPageCount: 8 // This is general info, maybe a constant?
    }


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