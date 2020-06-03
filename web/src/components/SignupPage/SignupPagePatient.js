import React, { Component } from 'react';
import { SignupOHIP, SignupSCN, SignupName, SignupOwner, SignupDOB, SignupGender, SignupReview, SignupCredentials, SignupGeneral } from './SignupPageComponents';

class SignupPagePatient extends Component {

    state = {
        pageCount: 1,
        maxPageCount: 8 // TODO: This is general info, maybe a constant?
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
            case 7:
                signupView = <SignupReview />  
                break;    
            case 8:
                signupView = <div><SignupCredentials /><SignupGeneral /></div>
                break;       
            default:
                break;
        }

        return (
            <div>
                {signupView}
                {/* TODO: Make into a component (do we really need to?)*/}
                <button onClick={() => this.setState({pageCount: this.state.pageCount - 1})} disabled ={this.state.pageCount === 1} >Back</button>
                <button onClick={() => this.setState({pageCount: this.state.pageCount + 1})} hidden= {this.state.pageCount === this.state.maxPageCount}>Next</button> 
                <button onClick={() => this.setState({pageCount: this.state.pageCount + 1})} hidden= {!(this.state.pageCount === this.state.maxPageCount)}>Signup</button> 
            </div>
        )
    }

}

export default SignupPagePatient