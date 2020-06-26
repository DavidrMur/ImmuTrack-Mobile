import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupPagePatient from '../../components/SignupPage/SignupPagePatient';
import SignupPageHealthcare from '../../components/SignupPage/SignupPageHealthcare';
import * as actions from 'redux-saga-store/actions/index';

class SignupPage extends Component {

    state = {
        type: 'none'
    }

    patientSignupFunctions = {
        signupSetName: {
            signupSetFirstName: this.props.signupSetFirstName,
            signupSetLastName: this.props.signupSetLastName
        },

        signupSetCredentials: {
            signupSetUsername: this.props.signupSetUsername,
            signupSetPassword: this.props.signupSetPassword,
            signupSetEmail: this.props.signupSetEmail,
        },

        signupSetOHIP: this.props.signupSetOHIP,
        signupSetSCN: this.props.signupSetSCN,
        signupSetOwner: this.props.signupSetOwner,
        signupSetDOB: this.props.signupSetDOB,
        signupSetGender: this.props.signupSetGender,
    }
    
    healthcareSignupFunctions = {

        signupSetName: {
            signupSetFirstName: this.props.signupSetFirstName,
            signupSetLastName: this.props.signupSetLastName
        },

        signupSetCredentials: {
            signupSetUsername: this.props.signupSetUsername,
            signupSetPassword: this.props.signupSetPassword,
            signupSetEmail: this.props.signupSetEmail,
        },

        signupSetProfession: this.props.signupSetProfession,
        signupSetLicense: this.props.signupSetLicense,

        signupSetWork: {
            signupSetWorkName: this.props.signupSetWorkName,
            signupSetWorkAddress: this.props.signupSetWorkAddress,
            signupSetWorkCity: this.props.signupSetWorkCity,
            signupSetWorkPostal: this.props.signupSetWorkPostal,
            signupSetWorkPhoneNumber: this.props.signupSetWorkPhoneNumber,
        }
    }


    render(){
        let signupView;
        if (this.state.type === 'patient') signupView = (<SignupPagePatient patientSignupFunctions={this.patientSignupFunctions}/>);
        else if (this.state.type === 'healthcare') signupView = (<SignupPageHealthcare healthcareSignupFunctions={this.healthcareSignupFunctions} />);
        else signupView = (<></>);
        return (
            <div>
                {/* TODO: Make sure the fields do not mix if someone wants to switch to a different signup flow */}
                <button onClick={() => this.setState({type: 'patient'})}>Signup for Patient</button>
                <button onClick={() => this.setState({type: 'healthcare'})}>Signup for Healthcare Provider</button>
                <button onClick={() => this.healthcareSignupFunctions.signupSetProfession()}>Click me sir </button>
                <button onClick = {this.props.signupPending}>Sign Up</button>
                {signupView}
            </div>
            )
    }
}

const mapDispathToProps = dispatch => {
    return {

        signupPending: () => dispatch(actions.signupPending()),

        // General functions
        signupSetFirstName: (payload) => dispatch(actions.signupSetFirstName(payload)),
        signupSetLastName: (payload) => dispatch(actions.signupSetLastName(payload)),
        signupSetUsername: (payload) => dispatch(actions.signupSetUsername(payload)),
        signupSetPassword: (payload) => dispatch(actions.signupSetPassword(payload)),
        signupSetEmail: (payload) => dispatch(actions.signupSetEmail(payload)),

        // Patient functions
        signupSetOHIP: (payload) => dispatch(actions.signupSetOHIP(payload)),
        signupSetSCN: (payload) => dispatch(actions.signupSetSCN(payload)),
        signupSetOwner: (payload) => dispatch(actions.signupSetOwner(payload)),
        signupSetDOB: (payload) => dispatch(actions.signupSetDOB(payload)),
        signupSetGender: (payload) => dispatch(actions.signupSetGender(payload)),
        signupSetOHIP: (payload) => dispatch(actions.signupSetOHIP(payload)),

        // Healthcare functions
        signupSetProfession: (payload) => dispatch(actions.signupSetProfession(payload)),
        signupSetLicense: (payload) => dispatch(actions.signupSetLicense(payload)),
        signupSetWorkName: (payload) => dispatch(actions.signupSetWorkName(payload)),
        signupSetWorkAddress: (payload) => dispatch(actions.signupSetWorkAddress(payload)),
        signupSetWorkCity: (payload) => dispatch(actions.signupSetWorkCity(payload)),
        signupSetWorkPostal: (payload) => dispatch(actions.signupSetWorkPostal(payload)),
        signupSetWorkPhoneNumber: (payload) => dispatch(actions.signupSetWorkPhoneNumber(payload)),

    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(null,mapDispathToProps)(SignupPage)