import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core'

class SecurityDisclosure extends Component {

    render() {
        return (
            <Grid container spacing={4} style={{'text-align': 'center', 'width': '80vw', 'margin': 'auto'}}>
                <Grid item xs={6} >
                    <TextField>wef</TextField>
                    <Button onClick={() => localStorage.setItem('acceptDisclosure', true)}>I Accept</Button>
                    <Button>I Do Not Accept</Button>
                </Grid>
                
            </Grid>
        )
    }

}

export default SecurityDisclosure