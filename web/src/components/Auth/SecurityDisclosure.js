import React, { Component } from 'react';
import { Grid, Button, Typography } from '@material-ui/core'

class SecurityDisclosure extends Component {
    
    render() {
        return (
            <Grid container spacing={12} style={{'text-align': 'left', 'margin': 'auto', 'width': '80vw'}}>
                <Grid item xs={8} >
                    <Typography variant="h2">Acceptable Use Policy</Typography>
                    <Typography variant="h4">CONSENT TO DISCLOSE YOUR PERSONAL HEALTH INFORMATION</Typography>
                    <Typography variant="body1">By submitting your information through this website, you are consenting to the disclosure of personal health information
                        to ImmuTrack. Immutrack will use the information for providing to public health programs and for statistical purpose. Immutrack may disclose the
                        information to health care providers for the purpose of providing care to you or your dependent, and otherwise as required or permitted by law.
                    </Typography>
                    <Typography variant="h4">ACCESS AND USE</Typography>
                    <Typography variant="body1">You may access and use this website solely for the purpose of submitting and/or retrieving your own immunization records,
                        or for submitting and retrieving immunization records of a depedent. You warrant that the information or material that you submit to and/or retrieve
                        from the website through your access to, or use of, the website does not infringe the right of any person or identity. 
                    </Typography>
                    <Typography variant="h4">SECURITY</Typography>
                    <Typography variant="body1">You are respoonsible for the security of the device, browser, and network that you are using to access this website. You 
                        will use reasonable care to safeguard your Ontario Immunization username and password to access the website. You will not reveal your Ontario
                        Immunization username or password to anyone.
                        <br />
                        By selecting the "I Accept" button you are acknowledging that you have read, understood and will comply with the information presented above in the
                        Terms of Use.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => this.props.onSubmit()}>I Accept</Button>
                    <Button>I Do Not Accept</Button>
                </Grid>
                
            </Grid>
        )
    }

}

export default SecurityDisclosure