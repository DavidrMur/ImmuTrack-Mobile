import React, { Component } from 'react';
import { Redirect } from 'react-router'

class SignoutPage extends React.Component {

    render () {

        localStorage.removeItem('jwtToken');
        localStorage.removeItem('acceptDisclosure');
        localStorage.removeItem('loggedIn');

        return (
            <Redirect to="/login" />
        )
    }
}

export default SignoutPage;