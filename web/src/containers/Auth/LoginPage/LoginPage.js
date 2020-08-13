import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import SecurityDisclosure from '../../../components/Auth/SecurityDisclosure';
import './LoginPage.css';

class LoginPage extends Component {

    state = {
        username: '',
        password: '',
        profession: undefined,
        acceptDisclosure: false
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

    onSecurityAccept = () => {
        this.setState({acceptDisclosure: true})
    }

    render(){
        return(
            <div style={{width: '47vw', margin: 'auto', position: 'relative', top:'30px' }}>
                    { !this.state.acceptDisclosure ? <SecurityDisclosure onSubmit={this.onSecurityAccept} /> :
                    !this.state.profession ? (
                        <Grid container spacing={2} style={{'text-align': 'center'}}>
                            <Grid item xs={12}>
                                <Typography variant="h2">Member Login</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="paragraph">Please select the login type which applies to you</Typography>
                            </Grid>
                            <Grid item xs = {6}>
                                <Button variant="outlined" onClick={() => this.setState({profession: 'provider'})}> Provider </Button>
                            </Grid>
                            <Grid item xs={6}>
                            <Button variant="outlined" onClick={() => this.setState({profession: 'patient'})}> Patient </Button>
                            </Grid>
                        </Grid>
                    ) : (
                    <Grid container spacing={2} style={{'text-align': 'center'}}>
                    <Grid item xs={12}>
                        <Typography variant="h2">Login</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField style={{width: "70%"}} required type="text" label="username" onChange={(event) => this.setValue(event, 'username')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField style={{width: "70%"}} required type="password" label="password" onChange={(event) => this.setValue(event, 'password')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="paragraph">Remember Me</Typography>
                        <input type="checkbox" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="paragraph">Forgot Password?</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Button variant="contained" onClick={(e) => this.onSubmit(e)}>Login</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button>
                        <Link to="/signup">Create an Account</Link>
                        </Button>
                        <Button onClick={() => this.setState({profession: undefined})}>Back</Button>
                    </Grid>
                
                </Grid>)}
            </div>

        );
    }
}

const mapDispathToProps = dispatch => {
    return {
        loginPending: (username, password, profession) => dispatch(actions.loginPending(username, password, profession))
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(null,mapDispathToProps)(LoginPage)