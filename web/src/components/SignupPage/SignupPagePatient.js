import React, { Component } from 'react';
import { SignupOHIP, SignupSCN, SignupName, SignupOwner, SignupDOB, SignupGender } from './SignupPageComponents';

class SignupPagePatient extends Component {

    state = {
        pageCount: 1
    }


    render() {

        let signupView;
        switch (this.state.pageCount) {
            case 1:
                signupView = <SignupOHIP />
                break;
            case 2:
                signupView = <SignupSCN />  
                break;
            case 3:
                signupView = <SignupOwner />  
                break; 
            case 4:
                signupView = <SignupName />
                break;
            case 5:
                signupView = <SignupDOB />  
                break;
            case 6:
                signupView = <SignupGender />  
                break;      
            default:
                break;
        }

        return (
            <div>
                {signupView}
                {/* TODO: Make into a component */}
                <button onClick={() => this.setState({pageCount: this.state.pageCount - 1})}>Back</button>
                <button onClick={() => this.setState({pageCount: this.state.pageCount + 1})}>Front</button> 
            </div>
        )
    }

}

export default SignupPagePatient