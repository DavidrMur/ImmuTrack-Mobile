import React from 'react';
import Routes from './containers/Routes'
import { Button, Grid, TextField, Typography } from '@material-ui/core'

function App() {

  return (
    <div className="App">
      <Typography variant='h2' style={{margin: "10px"}}>ImmuTrack</Typography>
      <Routes />
    </div>
  );
}

export default App;
