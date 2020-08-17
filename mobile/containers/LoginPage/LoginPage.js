import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux-saga-store/actions/index';
import {View, Text, Button , TextInput, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            profession: 'provider',
            acceptDisclosure: false
        }
    }

    setValue = (e, key) => {
        console.log(e.nativeEvent.text);
        e.preventDefault();
        this.setState({[key]: e.nativeEvent.text})
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
            <View style={styles.container}>
                <Text>Member Login</Text>
                <TextInput placeholder="username" onChange={(event) => this.setValue(event, 'username')}/>
                <TextInput secureTextEntry={true} placeholder="Password" onChange={(event) => this.setValue(event, 'password')}/>
                <Button title="Login" onPress={(e) => this.onSubmit(e)}/>
                <CheckBox title="Remember Me" checked/>
                <Text className="container--option">Forgot Password?</Text>
                <Text>Not a member?</Text>
                <Button title="Create account" />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
        fontFamily: "HelveticaNeue-Bold",
        fontSize: 32
    }
  });


  const mapDispathToProps = dispatch => {
    return {
        loginPending: (username, password, profession) => dispatch(actions.loginPending(username, password, profession))
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(null,mapDispathToProps)(LoginPage)