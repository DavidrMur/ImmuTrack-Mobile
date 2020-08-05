import React, { Component } from 'react';
import { Redirect } from 'react-router'

class SignoutPage extends React.Component {

    render () {

        localStorage.removeItem('jwtToken');
        localStorage.removeItem('acceptDisclosure');
        localStorage.removeItem('loggedIn');

        return (
            <div>
            <Redirect to="/" />
            {/* {window.location.reload(false)} */}
            </div>
        )
    }
}

export default SignoutPage;