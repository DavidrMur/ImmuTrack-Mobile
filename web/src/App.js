import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <h1 style={{margin: "10px"}}>ImmuTrack</h1>
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SignupPage}/>
        <Redirect to='/login'/>
      </Switch>
    </div>
  );
}

export default App;
