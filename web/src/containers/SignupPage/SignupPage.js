import React, { Component } from 'react';
import SignupPagePatient from '../../components/SignupPage/SignupPagePatient';
import SignupPageHealthcare from '../../components/SignupPage/SignupPageHealthcare';

class SignupPage extends Component {

    state = {
        type: 'none'
    }


    render(){
        let signupView;
        if (this.state.type === 'patient') signupView = (<SignupPagePatient />);
        else if (this.state.type === 'healthcare') signupView = (<SignupPageHealthcare />);
        else signupView = (<></>);
        return (
            <div>
                {/* TODO: Make sure the fields do not mix if someone wants to switch to a different signup flow */}
                <button onClick={() => this.setState({type: 'patient'})}>Signup for Patient</button>
                <button onClick={() => this.setState({type: 'healthcare'})}>Signup for Healthcare Provider</button>
                {signupView}
            </div>
            )
    }
}


//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default SignupPage