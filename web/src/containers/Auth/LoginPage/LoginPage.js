import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import './LoginPage.css';

class LoginPage extends Component {

    state = {
        username: '',
        password: '',
        profession: ''
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
        return(
            //style={{width: '50vw', margin: 'auto'}}
            <div style={{width: '47vw', margin: 'auto'}}>
                <Grid container spacing={2} style={{'text-align': 'center'}}>
                    <Grid item xs={12}>
                        <Typography variant="h1">Member Login</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField style={{width: "70%"}} required type="text" label="username" onChange={(event) => this.setValue(event, 'username')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField style={{width: "70%"}} required type="password" label="password" onChange={(event) => this.setValue(event, 'password')}/>
                    </Grid>
                    <Grid item xs = {6}>
                        <Button variant="outlined" onClick={() => this.setState({profession: 'provider'})}> Provider </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" onClick={() => this.setState({profession: 'patient'})}> Patient </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="paragraph">Remember Me</Typography>
                        <input type="checkbox" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="paragraph">Forgot Password?</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Button variant="outlined" onClick={(e) => this.onSubmit(e)}>Login</Button> 
                    </Grid>
                    <Grid item xs={12}>
                        <Button>
                        <Link to="/signup">Create an Account</Link>
                        </Button>
                    </Grid>
                
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
        loginPending: (username, password, profession) => dispatch(actions.loginPending(username, password, profession))
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(null,mapDispathToProps)(LoginPage)