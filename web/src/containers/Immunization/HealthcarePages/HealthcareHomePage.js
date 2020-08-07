import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { TextField, Button, Grid, Card, CardContent } from '@material-ui/core'
import { PatientRecordTile } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';

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
                        <PatientRecordTile
                    firstName={patient.firstName}
                    lastName={patient.lastName}
                    DOB={patient.DOB}
                    OHIP={patient.ohip}
                    redirectQuery={this.props.patientInfoPending}
                        /> </Grid>)
        })}

        return(
            <div align='center'>
                <Grid container spacing={2}>
                    <Grid item xs={1} >
                    <TextField label="OHIP" onChange={(e) => this.setState({addPatientOHIP: e.target.value})}/>
                    </Grid>
                    <Grid item xs={2} >
                    <Button onClick={() => this.props.patientAddPending(this.state.addPatientOHIP)}>Add Patient</Button>
                    </Grid>
                </Grid>

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