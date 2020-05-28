import React, { Component } from 'react';
import {View, Text, Button , TextInput } from 'react-native'
import { CheckBox } from 'react-native-elements';

class LoginPage extends Component {

    render(){
        return(
            <View>
                <Text>Member Login</Text>
                <TextInput placeholder="Email" />
                <TextInput secureTextEntry={true} placeholder="Password"/>
                <Button title="Login"/>
                <CheckBox title="Remember Me" checked/>
                <Text className="container--option">Forgot Password?</Text>
                <Text>Not a member?</Text>
                <Button title="Create account" />
            </View>

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