import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {

    state = {
        username: '',
        password: '',
    }
    
    setValue = (e, key) => {
        debugger;
        this.setState({[key]: e.target.value})
    }

    render(){
        return(
            <div>
                <form className='container'>
                    <h1>Member Login</h1>
                    <input type="text" placeholder="username" className='container--field' onChange={(event) => this.setValue(event, 'username')}/>
                    <input type="password" placeholder="password" className='container--field' onChange={(event) => this.setValue(event, 'password')}/>
                    <input type="submit" value="Login" className='container--button'/>
                </form>
                <label>Remember Me</label>
                <input type="checkbox" />
                <p className="container--option">Forgot Password?</p>
                <p>Not a member?</p>
                <button>Create account</button>
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
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default LoginPage