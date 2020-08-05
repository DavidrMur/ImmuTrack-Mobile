import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignupPagePatient from '../../../components/Auth/SignupPage/SignupPagePatient';
import SignupPageHealthcare from '../../../components/Auth/SignupPage/SignupPageHealthcare';
import * as actions from 'redux-saga-store/actions';
import { Button, Grid, TextField, Typography } from '@material-ui/core'

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
        signupSetRace: this.props.signupSetRace,
        signupSetEduLevel: this.props.signupSetEduLevel,
        signupSetPostal: this.props.signupSetPostal,
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

    setSignupType = (type) => {
        this.setState({type: type});
        this.props.signupSetType(type);
    }


    render(){
        let signupView;
        if (this.state.type === 'patient') signupView = (<SignupPagePatient patientSignupFunctions={this.patientSignupFunctions} signup={this.props.signupPending} signupInfo={this.props.signupInfo}/>);
        else if (this.state.type === 'healthcare') signupView = (<SignupPageHealthcare healthcareSignupFunctions={this.healthcareSignupFunctions} signup={this.props.signupPending} />);
        else signupView = <Typography>Please choose a signup option that is appropriate</Typography>;
        return (
            <div style={{width: '47vw', margin: 'auto', justifyContent: 'center'}}>
                <Button variant='outlined' className='container--field' onClick={() => this.setSignupType('patient')}>Signup for Patient</Button>
                &nbsp;
                <Button variant='outlined' className='container--field' onClick={() => this.setSignupType('healthcare')}>Signup for Healthcare Provider</Button>
                <Link className='container--option' to="/login">Already have an account?</Link>
                {signupView}
            </div>
            )
    }
}

const mapDispathToProps = dispatch => {
    return {

        signupPending: () => dispatch(actions.signupPending()),

        // General functions
        signupSetType: (payload) => dispatch(actions.signupSetType(payload)),
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
        signupSetRace: (payload) => dispatch(actions.signupSetRace(payload)),
        signupSetEduLevel: (payload) => dispatch(actions.signupSetEduLevel(payload)),
        signupSetPostal: (payload) => dispatch(actions.signupSetPostal(payload)),

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