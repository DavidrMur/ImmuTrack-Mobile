import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import {
    PatientDisplayTile,
    PatientRecordTile,
    PatientRecordVaccines,
    PatientRecordVaccinesEdit,
    PatientRecordVaccineTitles
} from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';
import { Button, Typography } from '@material-ui/core'
import PatientVaccines from '../PatientVaccines';

// TODO: refactor this page, the vaccines table should be a separate entity

class HealthcareRecordPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            patientVaccines: this.props.currentPatient.vaccines,
            editing: false,
            add: false,
            newEntry: {}
        }
    }

    patientRecords = (<Typography variant={'paragraph'}>loading</Typography>);
    
    render(){
        return(
            <div>
                <Button variant={'default'}>
                    <Link to="/main">Back</Link>
                </Button>
                <PatientDisplayTile
                    key={this.props.currentPatient.id}
                    id={this.props.currentPatient.id}
                    firstName={'John'}
                    lastName={'Doe'}
                    DOB={this.props.currentPatient.DOB}
                    OHIP={this.props.currentPatient.OHIP}
                />
                <PatientVaccines />
                <Button variant={'outlined'}>Download PDF</Button>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        currentPatient: state.immunization.patient
    };
};

const mapDispathToProps = dispatch => {
    return {
        patientAddEntryPending: (payload) => dispatch(actions.patientAddEntryPending(payload))
    };
};

export default connect(mapStateToProps,mapDispathToProps)(HealthcareRecordPage)