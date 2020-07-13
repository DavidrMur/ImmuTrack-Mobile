import React from 'react';
import { Button, Grid, TextField, Typography, Select, MenuItem, InputLabel } from '@material-ui/core'

const SignupOHIP = (props) => {
    return (
        <div >
        <Typography >Please enter your OHIP Number</Typography>
        <TextField type="text" label="OHIP Number" onChange={(event) => props.fieldFunction(event.target.value)}/>
        </div>
    )
};

const SignupSCN = (props) => {
    return (
        <div>
        <Typography >Please enter your SCN Number (back of your healthcard)</Typography>
        <TextField type="text" label="SCN" onChange={(event) => props.fieldFunction(event.target.value)} />
        </div>
    )
};

const SignupOwner = (props) => {
    return (
        <div>
            <Typography >This Health Card belongs to</Typography>
            <Button onClick={() => props.fieldFunction('me')}>Me</Button>
            <Button onClick={() => props.fieldFunction('dependant')}>Dependant</Button>
        </div>
    )
}

const SignupName = (props) => {
    return ( 
        <div >
            <Typography >Please enter your first and last name</Typography>
            <TextField type="text" label="First Name" onChange={(event) => props.nestedFieldFunction.signupSetFirstName(event.target.value)}/>
            <TextField type="text" label="Last Name" onChange={(event) => props.nestedFieldFunction.signupSetLastName(event.target.value)}/>
        </div>
    )
}

const SignupDOB = (props) => {
    return (
        <div>
            <Typography >Please enter your date of birth</Typography>
            <TextField type="text" label="date" onChange={(event) => props.fieldFunction(event.target.value)} />
            {/* TODO: change this, depends on the UI module we use */}
        </div>
    )
}

const SignupGender = (props) => {
    return (
        <div>
            <Typography  >Please enter your gender</Typography>
            {/* TODO: change this, depends on the UI module we use */}
            <TextField type="text" label="If other, please specify"  onChange={(event) => props.fieldFunction(event.target.value)} />
        </div>
    )
}

const SignupRace = (props) => {
    return (
        <div>
            <Typography  >Please enter your Race</Typography>
            {/* TODO: change this, depends on the UI module we use */}
            <TextField type="text" label="If other, please specify"  onChange={(event) => props.fieldFunction(event.target.value)} />
        </div>
    )
}

const SignupEduLevel = (props) => {
    return (
        <div>
            <Typography  >Please enter your education level</Typography>
            {/* TODO: change this, depends on the UI module we use */}
            <TextField type="text" label="If other, please specify"  onChange={(event) => props.fieldFunction(event.target.value)} />
        </div>
    )
}

const SignupReview = (props) => {
    return (
        <div>
            Review information
        </div>
    )
}

const SignupCredentials = (props) => {
    return (
        <div >
            <Typography >Please enter your desired credentials</Typography>
            <TextField type="text" label="username" onChange={(event) => props.nestedFieldFunction.signupSetUsername(event.target.value)}/>
            <TextField type="password" label="password" onChange={(event) => props.nestedFieldFunction.signupSetPassword(event.target.value)}/>
            <TextField type="email" label="email" onChange={(event) => props.nestedFieldFunction.signupSetEmail(event.target.value)}/>
        </div>    
    )
}

const SignupGeneral = (props) => {
    return (
        <div>
            <Typography >General Information</Typography>
            <TextField type="text" label="Postal Code" onChange={(event) => props.fieldFunction(event.target.value)}/>
            {/* DROPDOWN - Race / Depends on UI*/}
            {/* DROPDOWN - Level of Education / Depends on UI*/}
        </div>
    )
}

const SignupProfession = (props) => {
    return (
        <div>
        <Typography variant="paragraph">Please enter your profession</Typography>
        {/* <TextField type="text" label="DROPDOWN - profession" onChange={(event) => props.fieldFunction(event.target.value)} /> */}
        <Select onChange={(event) => props.fieldFunction(event.target.value)}>
          <MenuItem value={'Doctor'}>Doctor</MenuItem>
          <MenuItem value={'Nurse'}>Nurse</MenuItem>
          <MenuItem value={'Overlord'}>Overlord</MenuItem>
          </Select>
        </div>
  )
}

const SignupLicense = (props) => {
    return (
        <div>
            <Grid item xs={4}>
                <Typography variant="paragraph">Please enter your license</Typography>
            </Grid>
            <Grid item xs={4}>
                <TextField type="text" label="License Number" onChange={(event) => props.fieldFunction(event.target.value)}/>
            </Grid>
        </div>
   )
}

const SignupWorkLocation = (props) => {
    return (
        <div>
            <Grid container direction="column">
            {/* <Grid item xs={6} > */}
            <Typography variant="paragraph">{`${props.workType} Work Location`}</Typography>
            {/* </Grid> */}
            {/* <Grid item xs={4} > */}
            <TextField type="text" label="Organization Name" onChange={(event) => props.nestedFieldFunction.signupSetWorkName(event.target.value)}/>
            {/* </Grid> */}
            {/* <Grid item xs={3} > */}
            <TextField type="text" label="Address" onChange={(event) => props.nestedFieldFunction.signupSetWorkAddress(event.target.value)}/>
            {/* </Grid>
            <Grid item xs={3} > */}
            <TextField type="text" label="City" onChange={(event) => props.nestedFieldFunction.signupSetWorkCity(event.target.value)}/>
            {/* </Grid>
            <Grid item xs={3} > */}
            <TextField type="text" label="Postal Code" onChange={(event) => props.nestedFieldFunction.signupSetWorkPostal(event.target.value)} />
            {/* </Grid>
            <Grid item xs={3} > */}
            <TextField type="text" label="Clinic Phone Number" onChange={(event) => props.nestedFieldFunction.signupSetWorkPhoneNumber(event.target.value)}/>
            {/* </Grid> */}
            {/* TODO: need checkboxes - depends on ui */}
            <TextField type="text" label="EMR Integration - NEEDS something else too?" />
            </Grid>
        </div>
    )
}

const SignupPrimaryWork = (props) => {
    return (
        <div>
        
        <SignupWorkLocation workType="Primary" nestedFieldFunction={props.nestedFieldFunction}/>
        </div>
    )
}

const SignupOtherWork = (props) => {
    return (
        <div>
        <SignupWorkLocation workType="(Optional) Other"/>
        </div>
    )
}

export {
    SignupOHIP,
    SignupSCN,
    SignupOwner,
    SignupName,
    SignupDOB,
    SignupGender,
    SignupRace,
    SignupEduLevel,
    SignupReview,
    SignupCredentials,
    SignupGeneral,
    SignupProfession,
    SignupLicense,
    SignupPrimaryWork,
    SignupOtherWork
};