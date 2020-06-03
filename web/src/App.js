import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SignupPage}/>
        <Redirect to='/login'/>
      </Switch>
    </div>
  );
}

export default App;
