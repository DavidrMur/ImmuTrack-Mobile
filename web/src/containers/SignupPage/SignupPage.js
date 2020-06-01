import React, { Component } from 'react';
import SignupPagePatient from '../../components/SignupPage/SignupPagePatient';

class SignupPage extends Component {

    constructor (props) {
        super(props);
    }


    render(){
        return (
            <div>
                <SignupPagePatient />
            </div>
            )
    }
}


//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default SignupPage