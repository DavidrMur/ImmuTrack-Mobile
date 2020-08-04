import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    
    render() {
        return (
            <div>
                <h1 style={{margin: "10px"}}>ImmuTrack</h1>
                {this.props.token ? 
                <>
                <Link to='/'>Main</Link>
                <Link to='/signout'>Sign Out</Link>
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