import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import './LoginPage.css';

class LoginPage extends Component {

    state = {
        username: '',
        password: '',
    }
    
    setValue = (e, key) => {
        e.preventDefault();
        this.setState({[key]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.loginPending(this.state.username, this.state.password);
    }

    render(){
        return(
            <div>
                <form className='container' onSubmit={(e) => this.onSubmit(e)}>
                    <h1>Member Login</h1>
                    <input type="text" placeholder="username" className='container--field' onChange={(event) => this.setValue(event, 'username')}/>
                    <input type="password" placeholder="password" className='container--field' onChange={(event) => this.setValue(event, 'password')}/>
                    <input type="submit" value="Login" className='container--button' onClick={(e) => this.onSubmit(e)}/>
                </form>
                <label>Remember Me</label>
                <input type="checkbox" />
                <p className="container--option">Forgot Password?</p>
                <p>Not a member?</p>
                <Link className='container--option' to="/signup">Create an Account</Link>
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
        loginPending: (username, password) => dispatch(actions.loginPending(username, password)) 
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(null,mapDispathToProps)(LoginPage)