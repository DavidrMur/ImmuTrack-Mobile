import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LoginPage from './containers/Auth/LoginPage/LoginPage';
import SignupPage from './containers/Auth/SignupPage/SignupPage';
import PatientImmunization from './containers/Immunization/PatientPages/PatientRecordPage';
import HealthcareHomePage from './containers/Immunization/HealthcarePages/HealthcareHomePage';
import HealthcareRecordPage from './containers/Immunization/HealthcarePages/HealthcareRecordPage';

function App() {

  let routes;
  let loggedIn = (localStorage.getItem('jwtToken') !== undefined);
  
  let newVisitRoutes = (
    <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SignupPage}/>
        {/* TODO: remove below */}
        <Route path='/main' component={HealthcareHomePage} />
        <Route path='/view-patient' component={HealthcareRecordPage} />
        <Redirect to='/login'/>
      </Switch>
  );

  let existingVisitorRoutes = (
    <Switch>
        <Route path='/main' component={HealthcareHomePage} />
        <Route path='/view-patient' component={HealthcareRecordPage} />
        <Redirect to='/main'/>
    </Switch>
  )

  routes = loggedIn ? existingVisitorRoutes : newVisitRoutes;

  return (
    <div className="App">
      <h1 style={{margin: "10px"}}>ImmuTrack</h1>
      {routes}
    </div>
  );
}

export default App;
