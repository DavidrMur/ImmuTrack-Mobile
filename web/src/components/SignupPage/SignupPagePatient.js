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
                signupView = <SignupOHIP fieldFunction={this.props.patientSignupFunctions.signupSetOHIP}/>
                break;
            case 2:
                signupView = <SignupSCN fieldFunction={this.props.patientSignupFunctions.signupSetSCN}/>  
                break;
            case 3:
                signupView = <SignupOwner fieldFunction={this.props.patientSignupFunctions.signupSetOwner}/>  
                break; 
            case 4:
                signupView = <SignupName nestedFieldFunction={this.props.patientSignupFunctions.signupSetName}/>
                break;
            case 5:
                signupView = <SignupDOB fieldFunction={this.props.patientSignupFunctions.signupSetDOB}/>  
                break;
            case 6:
                signupView = <SignupGender fieldFunction={this.props.patientSignupFunctions.signupSetGender}/>  
                break; 
            case 7:
                signupView = <SignupReview />  
                break;    
            case 8:
                signupView = <div><SignupCredentials nestedFieldFunction={this.props.patientSignupFunctions.signupSetCredentials} /><SignupGeneral /></div>
                break;       
            default:
                break;
        }

        return (
            <div>
                {signupView}
                {/* TODO: Make into a component (do we really need to?)*/}
                <button style={{margin: "10px"}} onClick={() => this.setState({pageCount: this.state.pageCount - 1})} disabled ={this.state.pageCount === 1} >Back</button>
                <button onClick={() => this.setState({pageCount: this.state.pageCount + 1})} hidden= {this.state.pageCount === this.state.maxPageCount}>Next</button> 
                <button onClick={() => this.setState({pageCount: this.state.pageCount + 1})} hidden= {!(this.state.pageCount === this.state.maxPageCount)}>Signup</button> 
            </div>
        )
    }

}

export default SignupPagePatient