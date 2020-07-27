import React, { Component } from 'react';
import { Grid, Button, Typography } from '@material-ui/core'

class SecurityDisclosure extends Component {

    onClick = () => {
        window.location.reload(false)
        localStorage.setItem('acceptDisclosure', true)
    }
    
    render() {
        return (
            <Grid container spacing={8} style={{'text-align': 'left', 'margin': 'auto', 'width': '80vw'}}>
                <Grid item xs={12} >
                    <Typography variant="h2">Acceptable Use Policy</Typography>
                    <Typography variant="paragraph">oewifjoweijfowiejfqofijwe</Typography>
                    <Typography variant="h4">CONSENT TO DISCLOSE YOUR PERSONAL HEALTH INFORMATION</Typography>
                    <Typography variant="paragraph">oewifjoweijfowiejfqofijwe</Typography>
                    <Typography variant="h4">ACCESS AND USE</Typography>
                    <Typography variant="paragraph">oewifjoweijfowiejfqofijwe</Typography>
                    <Typography variant="h4">SECURITY</Typography>
                    <Typography variant="paragraph">oewifjoweijfowiejfqofijwe</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => this.onClick()}>I Accept</Button>
                    <Button>I Do Not Accept</Button>
                </Grid>
                
            </Grid>
        )
    }

}

export default SecurityDisclosure