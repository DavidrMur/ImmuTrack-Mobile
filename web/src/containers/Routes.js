import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LoginPage from './Auth/LoginPage/LoginPage';
import SignupPage from './Auth/SignupPage/SignupPage';
import PatientImmunization from './Immunization/PatientPages/PatientRecordPage';
import HealthcareHomePage from './Immunization/HealthcarePages/HealthcareHomePage';
import HealthcareRecordPage from './Immunization/HealthcarePages/HealthcareRecordPage';


class Routes extends Component {

    render() {

        let routes;
        debugger;
        let loggedIn = (localStorage.getItem('jwtToken') !== undefined && localStorage.getItem('jwtToken') !== null) && this.props.userInfo.profession !== "";
    
        let newVisitRoutes = (
        <Switch>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignupPage}/>
            {/* TODO: remove below */}
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
                <Route path='/view' component={PatientImmunization} />
                <Redirect to='/view'/>
            </Switch>
            )
    
        routes = loggedIn ? (this.props.userInfo.profession !== 'patient' ? existingHealthcareRoutes : existingPatientRoutes) : newVisitRoutes;
        
    return (
        routes
        )
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.auth.userInfo
    };
    
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(mapStateToProps)(Routes)