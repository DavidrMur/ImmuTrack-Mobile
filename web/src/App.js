import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LoginPage from './containers/Auth/LoginPage/LoginPage';
import SignupPage from './containers/Auth/SignupPage/SignupPage';
import PatientImmunization from './containers/Immunization/PatientPages/PatientRecordPage';
import HealthcareHomePage from './containers/Immunization/HealthcarePages/HealthcareHomePage';

function App() {

  let routes;
  let loggedIn = true;
  
  let newVisitRoutes = (
    <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SignupPage}/>
        <Redirect to='/login'/>
      </Switch>
  );

  let existingVisitorRoutes = (
    <Switch>
        <Route path='/main' component={HealthcareHomePage} />
        <Route path='/view-patient' component={PatientImmunization} />
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
