import React, { Component } from 'react';
import {  SignupName, SignupLicense, SignupProfession, SignupPrimaryWork, SignupOtherWork, SignupCredentials } from './SignupPageComponents';

class SignupPageHealthcare extends Component {

    render() {
        return (
            <div>
               <SignupProfession fieldFunction = {this.props.healthcareSignupFunctions.signupSetProfession} />
               <SignupLicense fieldFunction = {this.props.healthcareSignupFunctions.signupSetLicense}/>
               <SignupName nestedFieldFunction = {this.props.healthcareSignupFunctions.signupSetName} />
               <SignupPrimaryWork nestedFieldFunction = {this.props.healthcareSignupFunctions.signupSetWork}/>
               <SignupCredentials nestedFieldFunction = {this.props.healthcareSignupFunctions.signupSetCredentials}/>
               <button onClick={() => this.setState({pageCount: this.state.pageCount + 1})}>Signup</button> 
            </div>
        )
    }

}

export default SignupPageHealthcare