import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupPagePatient from '../../components/SignupPage/SignupPagePatient';
import SignupPageHealthcare from '../../components/SignupPage/SignupPageHealthcare';
import { setSignupAttributes } from 'helper-functions/Authentication';
import * as actions from 'redux-saga-store/actions/index';

class SignupPage extends Component {

    state = {
        type: 'none'
    }

    healthcareSignupFunctions = {
        signupSetProfession: this.props.signupSetProfession,
        signupSetLicense: this.props.signupSetLicense,
        signupSetName: this.props.signupSetName,
        signupSetPrimaryWork: this.props.signupSetPrimaryWork,
        signupSetOtherWork: this.props.signupSetOtherWork,
        signupSetCredentials: this.props.signupSetCredentials,
    }


    render(){
        let signupView;
        if (this.state.type === 'patient') signupView = (<SignupPagePatient />);
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

        signupSetProfession: (payload) => dispatch(actions.signupSetProfession(payload)),
        signupSetLicense: (payload) => dispatch(actions.signupSetLicense(payload)),
        signupSetName: () => dispatch(actions.signupSetName()),
        signupSetPrimaryWork: (payload) => dispatch(actions.signupSetPrimaryWork(payload)),
        signupSetOtherWork: () => dispatch(actions.signupSetOtherWork()),
        signupSetCredentials: () => dispatch(actions.signupSetCredentials())
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(null,mapDispathToProps)(SignupPage)