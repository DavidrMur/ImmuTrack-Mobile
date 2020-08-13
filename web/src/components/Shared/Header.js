import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Typography, AppBar, Toolbar } from '@material-ui/core'
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
                                <Button>
                                    <Link to='/'>Main</Link>
                                </Button>
                                <Button variant={'default'} onClick={() => this.props.onSignout()}>Sign Out</Button>
                            </>
                            :
                            <>
                            <div style={{width:"100%"}}>
                                <Link to='/login' style={{float: "right", textDecoration:"none"}}>
                                    <Button >
                                        <Typography style={{color:"white"}}>Login</Typography>
                                    </Button>
                                </Link>
                                <Link to='/signup' style={{float: "right", textDecoration:"none"}}>
                                    <Button>
                                        <Typography style={{color:"white"}}>Signup</Typography>
                                    </Button>
                                </Link>
                            </div>
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