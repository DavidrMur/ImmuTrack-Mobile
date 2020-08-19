import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import LoginPage from './Auth/LoginPage/LoginPage';
import SignupPage from './Auth/SignupPage/SignupPage';
import ForgotPage from './Auth/ForgotPage/ForgotPage';
import PatientRecordPage from './Immunization/PatientPages/PatientRecordPage';
import HealthcareHomePage from './Immunization/HealthcarePages/HealthcareHomePage';
import HealthcareRecordPage from './Immunization/HealthcarePages/HealthcareRecordPage';
import Header from '../components/Shared/Header';


class Routes extends Component {

    // TODO
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loggedIn: ( (localStorage.getItem('jwtToken') !== undefined && localStorage.getItem('jwtToken') !== null) && this.props.userInfo.profession !== "" && localStorage.getItem('loggedIn') === true),
    //         acceptDisclosure: ((localStorage.getItem('acceptDisclosure')) && (localStorage.getItem('acceptDisclosure')) !== undefined),
    //     }
    // }

    onSignout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('acceptDisclosure');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userInfo');

        this.loggedIn  = (localStorage.getItem('jwtToken') !== undefined && localStorage.getItem('jwtToken') !== null); 
        window.location.reload(false);
    }

    checkToken = (date, now) => {
        if (now - date >= 7200000) this.onSignout();
    }

    loggedin;

    render() {

        let routes;
        let object = JSON.parse(localStorage.getItem("jwtToken")), dateString = object && object.timestamp, now = new Date().getTime().toString();
        object && this.checkToken(dateString, now);
        this.loggedIn = (localStorage.getItem('jwtToken') !== undefined && localStorage.getItem('jwtToken') !== null); 
        let userInfoStatus = (this.props.userInfo.firstName !== '');
        
        if (this.loggedIn && !userInfoStatus) {
            this.props.loginSuccess(JSON.parse(localStorage.getItem('userInfo')))
        }

        // let acceptDisclosure = (localStorage.getItem('acceptDisclosure') && localStorage.getItem('acceptDisclosure') === true);
    
        let newVisitRoutes = (
        <Switch>
            {/* <Route path='/' component={LoginPage}/> */}
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignupPage}/>
            <Route path='/forgot' component={ForgotPage} />
            <Redirect to='/login'/>
        </Switch>
        );
    
        let existingHealthcareRoutes = (
        <Switch>
            <Route path='/main' component={HealthcareHomePage} />
            <Route path='/view-patient' component={HealthcareRecordPage} />
            <Redirect to='/main'/>
        </Switch>
        )

        let existingPatientRoutes = (
            <Switch>
                <Route path='/view' component={PatientRecordPage} />

                <Redirect to='/view'/>
            </Switch>
            )
    
        routes = this.loggedIn ? (this.props.userInfo.profession !== 'patient' ? existingHealthcareRoutes : existingPatientRoutes) : newVisitRoutes;
        
    return (
        <div >
            <Header loggedIn={this.loggedIn} onSignout={this.onSignout}/>
            {routes}
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.auth.userInfo
    };
    
};

const mapDispathToProps = dispatch => {
    return {
        loginSuccess: (payload) => dispatch(actions.loginSuccess(payload)),
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(mapStateToProps, mapDispathToProps)(Routes)