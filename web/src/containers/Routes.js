import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LoginPage from './Auth/LoginPage/LoginPage';
import SignupPage from './Auth/SignupPage/SignupPage';
import ForgotPage from './Auth/ForgotPage/ForgotPage';
import SignoutPage from './Auth/SignoutPage/SignoutPage';
import PatientImmunization from './Immunization/PatientPages/PatientRecordPage';
import HealthcareHomePage from './Immunization/HealthcarePages/HealthcareHomePage';
import HealthcareRecordPage from './Immunization/HealthcarePages/HealthcareRecordPage';
import SecurityDisclosure from '../components/Auth/SecurityDisclosure';


class Routes extends Component {

    // TODO
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loggedIn: ( (localStorage.getItem('jwtToken') !== undefined && localStorage.getItem('jwtToken') !== null) && this.props.userInfo.profession !== "" && localStorage.getItem('loggedIn') === true),
    //         acceptDisclosure: ((localStorage.getItem('acceptDisclosure')) && (localStorage.getItem('acceptDisclosure')) !== undefined),
    //     }
    // }

    render() {

        let routes;
        let loggedIn = (localStorage.getItem('jwtToken') !== undefined 
            && localStorage.getItem('jwtToken') !== null) 
            && this.props.userInfo.profession !== "" &&
            localStorage.getItem('loggedIn') === true

        let acceptDisclosure = ((localStorage.getItem('acceptDisclosure')) && (localStorage.getItem('acceptDisclosure')) !== undefined);
    
        let newVisitRoutes = (
        <Switch>
            { acceptDisclosure ? (<>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignupPage}/>
            <Route path='/forgot' component={ForgotPage} />
            <Route path='/signout' component={SignoutPage} />
            {/* <Route path='/main' component={HealthcareHomePage} /> */}
            </>) : <SecurityDisclosure />
            }
            <Redirect to='/login'/>
        </Switch>
        );
    
        let existingHealthcareRoutes = (
        <Switch>
            <Route path='/main' component={HealthcareHomePage} />
            <Route path='/view-patient' component={HealthcareRecordPage} />
            <Route path='/signout' component={SignoutPage} />
            <Redirect to='/main'/>
        </Switch>
        )

        let existingPatientRoutes = (
            <Switch>
                <Route path='/view' component={PatientImmunization} />
                <Route path='/signout' component={SignoutPage} />
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