import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

class Header extends React.Component {
    
    render() {
        return (
            <div>
                <Typography variant='h1' align={"center"}>ImmuTrack</Typography>
                {this.props.loggedIn ? 
                <>
                <Link to='/'>Main</Link>
                <Button variant='outlined' onClick={() => this.props.onSignout()}>Sign Out</Button>
                </>
                :
                <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
                </>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.userInfo.token
    };
};

export default connect(mapStateToProps)(Header);