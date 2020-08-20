import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux-saga-store/actions/index';
import { TextField, Button, Grid, Typography } from '@material-ui/core'
import { PatientRecordTile } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';
import './HealthcareHomePage.css'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

class HealthcareHomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectionCount: 10,
            addPatientOHIP: ''
        }
    }

    componentDidMount = () => {
        this.props.patientsPending();
        this.props.retrieveVaccinesPending();
    }

    patientRecordTiles = (<div>loading</div>);


    
    
    render(){
        if (this.props.patients) {
            this.patientRecordTiles = (this.props.patients.slice(0,this.state.selectionCount)).map((patient) => {
                return (
                    <Grid item xs={3} >
                        {patient.age ? 
                        <PatientRecordTile
                    firstName={patient.firstName}
                    lastName={patient.lastName}
                    key={patient.ohip}
                    DOB={patient.DOB}
                    OHIP={patient.ohip}
                    age={patient.age.years > 1 ? `${patient.age.years} yr` : `${patient.age.months} mo`}
                    postalCode={patient.postalCode}
                    redirectQuery={this.props.patientInfoPending}
                        /> : null }</Grid>)
        })}

        return(
            <div className={'background'} align='center'>
                {/* <Grid container spacing={2}>
                    <Grid item xs={1} >
                    <TextField label="OHIP" onChange={(e) => this.setState({addPatientOHIP: e.target.value})}/>
                    </Grid>
                    <Grid item xs={2    } >
                    <Button onClick={() => this.props.patientAddPending(this.state.addPatientOHIP)}>Add Patient</Button>
                    </Grid>
                </Grid>*/}
                <Paper component="form" elevation={2}>
                    <InputBase onChange={(e) => this.setState({addPatientOHIP: e.target.value})}
                        placeholder="Enter OHIP"
                    />
                    <IconButton onClick={() => this.props.patientAddPending(this.state.addPatientOHIP)} aria-label="search">
                        <AddIcon />
                        <Typography variant="body1">Add Patient</Typography>
                    </IconButton>
                    <Divider orientation="vertical" />
                </Paper>
                <Grid container spacing={2}>
                {this.patientRecordTiles}
                </Grid>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        patients: state.immunization.healthcare.patients
    };
};

const mapDispathToProps = dispatch => {
    return {
        patientsPending: () => dispatch(actions.patientsPending()),
        patientInfoPending: (patientOHIP) => dispatch(actions.patientInfoPending(patientOHIP)),
        patientAddPending: (patientOHIP) => dispatch(actions.patientAddPending(patientOHIP)),
        retrieveVaccinesPending: () => dispatch(actions.retrieveVaccinesPending())
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(mapStateToProps,mapDispathToProps)(HealthcareHomePage)

