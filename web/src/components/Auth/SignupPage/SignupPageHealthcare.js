import React, { Component } from 'react';
import {  SignupName, SignupLicense, SignupProfession, SignupTitle, SignupPrimaryWork, SignupOtherWork, SignupCredentials } from './SignupPageComponents';
import { Grid, Button } from '@material-ui/core'

class SignupPageHealthcare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workLocationCount: 0
        }
    }

    removeWorkLocation = () => {
        this.props.healthcareSignupFunctions.signupSetWork.signupUnsetWorkLocation(this.state.workLocationCount);
        this.setState({workLocationCount: this.state.workLocationCount - 1})
    }

    render() {
        return (
            <form>
                <Grid container spacing={4} style={{'text-align': 'center', 'width': '80vw', 'margin': 'auto'}}>
                    <Grid item xs={6} >
                        <SignupProfession fieldFunction = {this.props.healthcareSignupFunctions.signupSetProfession} />
                        <SignupTitle fieldFunction = {this.props.healthcareSignupFunctions.signupSetTitle} />
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
                    {<>{Array(this.state.workLocationCount).fill(1).map((input,i)=>(
                        <Grid item xs={6}>
                            <SignupOtherWork nestedFieldFunction = {this.props.healthcareSignupFunctions.signupSetWork} index={i+1}/>
                        </Grid>))}
                    </>}
                    <Grid item xs={6}>
                        <Button onClick={() => this.setState({workLocationCount: this.state.workLocationCount + 1})}>Add Work Location</Button>
                    </Grid>
                    {this.state.workLocationCount >= 1 ? <Grid item xs={6}>
                        <Button onClick={() => this.removeWorkLocation()}>Remove Work Location</Button>
                    </Grid> : null}
                    <Grid item xs={6}>
                        <SignupCredentials nestedFieldFunction = {this.props.healthcareSignupFunctions.signupSetCredentials}/>
                    </Grid>
                   <Button variant={'outlined'} onClick={this.props.signup}>Signup</Button>
                </Grid>
            </form>
        )
    }

}

export default SignupPageHealthcare