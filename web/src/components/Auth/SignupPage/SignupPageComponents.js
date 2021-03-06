import React from 'react';
import { Button, Grid, TextField, Typography, Select, MenuItem } from '@material-ui/core';
import entryValidation from 'helper-functions/entryValidation';
import { ethnicGroups, educationGroups } from 'helper-functions/constantGroups';

const SignupOHIP = (props) => {
    return (
        <div >
        <Typography >Please enter your OHIP Number</Typography>
        <TextField type="text" label="OHIP Number" onChange={(event) => props.fieldFunction(event.target.value)}/>
        </div>
    )
};

class SignupSCN extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }

    onBlurEvent = (e, type) => {
        if (!entryValidation(e,type)) {
            this.setState({error: true})
        }
    }

    onFocusEvent = (type) => {
        this.setState({error: false})
    }
    
    render() {
        return (
            <div>
            <Typography >Please enter your SCN Number (back of your healthcard)</Typography>
            <TextField type="text" label="SCN" required error={this.state.error} helperText={this.state.error ? 'Invalid SCN' : ''} onFocus={() => this.onFocusEvent()} onBlur={(e) => this.onBlurEvent(e,'scn')} onChange={(event) => this.props.fieldFunction(event.target.value)} />
            </div>
        )
}
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
            <TextField type="text" label="First Name" onChange={(event) => props.nestedFieldFunction.signupSetFirstName(event.target.value)} onBlur={() => console.log('name')}/>
            <TextField type="text" label="Last Name" onChange={(event) => props.nestedFieldFunction.signupSetLastName(event.target.value)}/>
        </div>
    )
}

const SignupDOB = (props) => {
    return (
        <div>
            <Typography >Please enter your date of birth</Typography>
            <TextField type="date" onChange={(event) => props.fieldFunction(event.target.value)} />
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
            {/* <TextField type="text" label="If other, please specify"  onChange={(event) => props.fieldFunction(event.target.value)} /> */}
            <Select onChange={(event) => props.fieldFunction(event.target.value)}>
            {(ethnicGroups.map((race) => {
                return <MenuItem value={race}>{race}</MenuItem>
            }))}
            </Select>
        </div>
    )
}

const SignupEduLevel = (props) => {
    return (
        <div>
            <Typography  >Please enter your education level</Typography>
            {/* TODO: change this, depends on the UI module we use */}
            {/* <TextField type="text" label="If other, please specify"  onChange={(event) => props.fieldFunction(event.target.value)} /> */}
            <Select onChange={(event) => props.fieldFunction(event.target.value)}>
            {(educationGroups.map((level) => {
                return <MenuItem value={level}>{level}</MenuItem>
            }))}
            </Select>
        </div>
    )
}

const SignupReview = (props) => {
    return (
        <div>
            <Typography>First Name: {props.signupInfo.generalInfo.signupFirstName}</Typography>
            <Typography>Last Name: {props.signupInfo.generalInfo.signupLastName}</Typography>
            <Typography>OHIP: {props.signupInfo.patientInfo.signupOHIP}</Typography>
            <Typography>SCN: {props.signupInfo.patientInfo.signupSCN}</Typography>
            <Typography>Owner: {props.signupInfo.patientInfo.signupOwner}</Typography>
            <Typography>DOB: {props.signupInfo.patientInfo.signupDOB}</Typography>
            <Typography>Gender: {props.signupInfo.patientInfo.signupGender}</Typography>
            <Typography>Race: {props.signupInfo.patientInfo.signupRace}</Typography>
            <Typography>EduLevel: {props.signupInfo.patientInfo.signupEduLevel}</Typography>
        </div>
    )
}

class SignupCredentials extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: false,
            password: false
        }
    }

    onBlurEvent = (e, type) => {
        if (!entryValidation(e,type)) {
            this.setState({[type]: true})
        }
    }

    onFocusEvent = (type) => {
        this.setState({[type]: false})
    }

    render() {
        return (
            <div >
                <Typography >Please enter your desired credentials</Typography>
                <TextField type="text" label="username" required error={this.state.username} helperText={this.state.username ? 'Invalid Username' : ''} onFocus={() => this.onFocusEvent('username')} onChange={(event) => this.props.nestedFieldFunction.signupSetUsername(event.target.value)} onBlur={(e) => this.onBlurEvent(e,'username')}/>
                <TextField type="password" label="password" required error={this.state.password} helperText={this.state.password ? 'Invalid password' : ''} onFocus={() => this.onFocusEvent('password')} onChange={(event) => this.props.nestedFieldFunction.signupSetPassword(event.target.value)} onBlur={(e) => this.onBlurEvent(e,'password')}/>
                <TextField type="email" label="email" required onChange={(event) => this.props.nestedFieldFunction.signupSetEmail(event.target.value)}/>
            </div>    
        )
    }

}

const SignupGeneral = (props) => {
    return (
        <div style={{margin: '10px'}}>
            <Typography >General Information</Typography>
            <TextField type="text" label="Postal Code" onChange={(event) => props.fieldFunction(event.target.value)}/>
        </div>
    )
}

const SignupProfession = (props) => {
    return (
        <div>
        <Typography variant="paragraph">Please select your profession</Typography>
        {/* <TextField type="text" label="DROPDOWN - profession" onChange={(event) => props.fieldFunction(event.target.value)} /> */}
        <Select onChange={(event) => props.fieldFunction(event.target.value)}>
          <MenuItem value={'Physician'}>Physician</MenuItem>
          <MenuItem value={'Nurse'}>Nurse</MenuItem>
          <MenuItem value={'Nurse Practitioner'}>Nurse Practitioner</MenuItem>
          <MenuItem value={"Physician Assistant"}>Physician's Assistant</MenuItem>
          <MenuItem value={'Pharmacist'}>Pharmacist</MenuItem>
          </Select>
        </div>
  )
}

const SignupTitle = (props) => {
    return (
        <div>
        <Typography variant="paragraph">Please select your title abbreviation</Typography>
        {/* <TextField type="text" label="DROPDOWN - profession" onChange={(event) => props.fieldFunction(event.target.value)} /> */}
        <Select onChange={(event) => props.fieldFunction(event.target.value)}>
          <MenuItem value={'MD'}>MD</MenuItem>
          <MenuItem value={'RN'}>RN</MenuItem>
          <MenuItem value={'RPN'}>RPN</MenuItem>
          <MenuItem value={'Pharm'}>Pharm</MenuItem>
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
            <TextField type="text" label="Organization Name" onChange={(event) => props.nestedFieldFunction.signupSetWorkName(event.target.value, props.index)}/>
            {/* </Grid> */}
            {/* <Grid item xs={3} > */}
            <TextField type="text" label="Address" onChange={(event) => props.nestedFieldFunction.signupSetWorkAddress(event.target.value, props.index)}/>
            {/* </Grid>
            <Grid item xs={3} > */}
            <TextField type="text" label="City" onChange={(event) => props.nestedFieldFunction.signupSetWorkCity(event.target.value, props.index)}/>
            {/* </Grid>
            <Grid item xs={3} > */}
            <TextField type="text" label="Postal Code" onChange={(event) => props.nestedFieldFunction.signupSetWorkPostal(event.target.value, props.index)} />
            {/* </Grid>
            <Grid item xs={3} > */}
            <TextField type="text" label="Clinic Phone Number" onChange={(event) => props.nestedFieldFunction.signupSetWorkPhoneNumber(event.target.value, props.index)}/>
            {/* </Grid> */}
            {/* TODO: need checkboxes - depends on ui */}
            {/* <TextField type="text" label="EMR Integration - NEEDS something else too?" onChange={(event) => props.nestedFieldFunction.signupSetWorkEMR(event.target.value, props.index)}/> */}
            <Select onChange={(event) => props.nestedFieldFunction.signupSetWorkEMR(event.target.value, props.index)}>
                <MenuItem value={'Red'}>Red</MenuItem>
                <MenuItem value={'Blue'}>Blue</MenuItem>
                <MenuItem value={'Green'}>Green</MenuItem>
                <MenuItem value={'Yellow'}>Yellow</MenuItem>
            </Select>
            {/* {props.workType !=="Primary" ? <Button onClick={() => props.nestedFieldFunction.signupUnsetWorkLocation(props.index)}>Remove</Button> : null} */}
            </Grid>
        </div>
    )
}

const SignupPrimaryWork = (props) => {
    return (
        <div>
        
        <SignupWorkLocation workType="Primary" nestedFieldFunction={props.nestedFieldFunction} index={props.index}/>
        </div>
    )
}

const SignupOtherWork = (props) => {
    return (
        <div>
        <SignupWorkLocation workType="(Optional) Other" nestedFieldFunction={props.nestedFieldFunction} index={props.index}/>
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
    SignupTitle,
    SignupLicense,
    SignupPrimaryWork,
    SignupOtherWork
};