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
        signupSetName: this.props.signupSetName,
        signupSetCredentials: this.props.signupSetCredentials,
        signupSetOHIP: this.props.signupSetOHIP,
        signupSetSCN: this.props.signupSetSCN,
        signupSetOwner: this.props.signupSetOwner,
        signupSetDOB: this.props.signupSetDOB,
        signupSetGender: this.props.signupSetGender,
    }
    
    healthcareSignupFunctions = {
        signupSetName: this.props.signupSetName,
        signupSetCredentials: this.props.signupSetCredentials,
        signupSetProfession: this.props.signupSetProfession,
        signupSetLicense: this.props.signupSetLicense,
        signupSetPrimaryWork: this.props.signupSetPrimaryWork,
        signupSetOtherWork: this.props.signupSetOtherWork,
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
        signupSetName: (payload) => dispatch(actions.signupSetName(payload)),
        signupSetCredentials: () => dispatch(actions.signupSetCredentials()),

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
        signupSetPrimaryWork: (payload) => dispatch(actions.signupSetPrimaryWork(payload)),
        signupSetOtherWork: () => dispatch(actions.signupSetOtherWork()),

    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(null,mapDispathToProps)(SignupPage)