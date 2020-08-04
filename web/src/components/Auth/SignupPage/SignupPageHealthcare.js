import React, { Component } from 'react';
import {  SignupName, SignupLicense, SignupProfession, SignupPrimaryWork, SignupOtherWork, SignupCredentials } from './SignupPageComponents';
import { Grid, Button } from '@material-ui/core'

class SignupPageHealthcare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workLocationCount: 1
        }
    }

    render() {
        return (
            <Grid container spacing={4} style={{'text-align': 'center', 'width': '80vw', 'margin': 'auto'}}>
                <Grid item xs={6} >
                    <SignupProfession fieldFunction = {this.props.healthcareSignupFunctions.signupSetProfession} />
                </Grid>
                <Grid item xs={6} >
                    <SignupLicense fieldFunction = {this.props.healthcareSignupFunctions.signupSetLicense}/>
                </Grid>
                <Grid item xs={6}>
                    <SignupName nestedFieldFunction = {this.props.healthcareSignupFunctions.signupSetName} />
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <SignupPrimaryWork nestedFieldFunction = {this.props.healthcareSignupFunctions.signupSetWork} index={0}/>
                </Grid> 
                {<>{Array(this.state.workLocationCount).fill(1).map((i)=>(
                    <Grid item xs={6}>
                        <SignupOtherWork nestedFieldFunction = {this.props.healthcareSignupFunctions.signupSetWork} index={1}/>
                    </Grid>))}
                </>}
                {/* <Grid item xs={6}>
                    <SignupOtherWork nestedFieldFunction = {this.props.healthcareSignupFunctions.signupSetWork}/>
                </Grid> */}
                <Grid item xs={6}>
                    <SignupCredentials nestedFieldFunction = {this.props.healthcareSignupFunctions.signupSetCredentials}/>
                </Grid>
               <Button onClick={this.props.signup}>Signup</Button> 
            </Grid>
        )
    }

}

export default SignupPageHealthcare