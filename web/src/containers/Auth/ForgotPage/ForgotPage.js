import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { Button, Grid, TextField, Typography } from '@material-ui/core'


class ForgotPage extends Component {

    state = {
        profession: '',
        OHIP: '',
        SCN: '',
        license: '',
        firstName: '',
        lastName: ''
    }
    
    setValue = (e, key) => {
        e.preventDefault();
        this.setState({[key]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.loginPending(this.state.username, this.state.password, this.state.profession);
    }

    render(){

        let forgotView;

        if (this.state.profession === 'patient') {
            forgotView = (
                <Grid container spacing={2} style={{'text-align': 'center'}}>
                    <Grid item xs={6}>
                        <TextField style={{width: "70%"}} required type="text" label="OHIP" onChange={(event) => this.setValue(event, 'OHIP')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField style={{width: "70%"}} required type="text" label="SCN" onChange={(event) => this.setValue(event, 'SCN')}/>
                    </Grid>
                    <Grid item xs = {12}>
                        <Button variant="outlined" onClick={() => this.props.verifyPasswordPending(this.state)}>Recover Password</Button>
                    </Grid>
                </Grid>
            )
        } else if (this.state.profession === 'provider') {
            forgotView = (
                <Grid container spacing={2} style={{'text-align': 'center'}}>
                    <Grid item xs={12}>
                        <TextField style={{width: "70%"}} required type="text" label="license" onChange={(event) => this.setValue(event, 'license')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField style={{width: "70%"}} required type="text" label="firstName" onChange={(event) => this.setValue(event, 'firstName')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField style={{width: "70%"}} required type="text" label="lastName" onChange={(event) => this.setValue(event, 'lastName')}/>
                    </Grid>
                    <Grid item xs = {12}>
                        <Button variant="outlined" onClick={() => this.props.verifyPasswordPending(this.state)}>Recover Password</Button>
                    </Grid>
                </Grid>
            )
        }

        return(
            //style={{width: '50vw', margin: 'auto'}}
            <div style={{width: '47vw', margin: 'auto'}}>
                <Grid container spacing={2} style={{'text-align': 'center'}}>
                    <Grid item xs={12}>
                        <Typography variant="h2">Forgot Password</Typography>
                    </Grid>
                    <Grid item xs = {6}>
                        <Button variant="outlined" onClick={() => this.setState({profession: 'provider'})}> Provider </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" onClick={() => this.setState({profession: 'patient'})}> Patient </Button>
                    </Grid>
                    {forgotView}
                </Grid>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        
    };
};

const mapDispathToProps = dispatch => {
    return {
        verifyPasswordPending: (payload) => dispatch(actions.verifyPasswordPending(payload))
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(null,mapDispathToProps)(ForgotPage)