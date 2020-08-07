import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Grid, TextField, Typography, AppBar, Toolbar, IconButton } from '@material-ui/core'
import './Header.css'

class Header extends React.Component {
    
    render() {
        return (
            <div>
                <AppBar position={'static'}>
                    <Toolbar>
                        <Typography variant={'h3'} style={{margin: "10px"}}>ImmuTrack</Typography>
                        {this.props.loggedIn ?
                            <>
                                <Button variant={'default'}>
                                    <Link to='/'>Main</Link>
                                </Button>
                                <Button variant={'default'} onClick={() => this.props.onSignout()}>Sign Out</Button>
                            </>
                            :
                            <>
                                <Link to='/login'>
                                    <Button variant={'default'}>
                                        <Typography variant={'paragraph'}>Login</Typography>
                                    </Button>
                                </Link>
                                <Link to='/signup'>
                                    <Button variant={'default'}>
                                        <Typography variant={'paragraph'}>Signup</Typography>
                                    </Button>
                                </Link>
                            </>
                        }
                    </Toolbar>
                </AppBar>
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