import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { PatientRecordTile, PatientRecordVaccines, PatientRecordVaccinesEdit, PatientRecordVaccineTitles } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';
import { Button } from '@material-ui/core'
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

    patientRecords = (<div>loading</div>);
    
    render(){
        return(
            <div>
                <Link to="/main">Back</Link>
                <PatientRecordTile
                    key={this.props.currentPatient.id}
                    id={this.props.currentPatient.id}
                    firstName={this.props.currentPatient.firstName}
                    lastName={this.props.currentPatient.lastName}
                    DOB={this.props.currentPatient.DOB}
                    OHIP={this.props.currentPatient.OHIP}
                />
                <PatientVaccines />
                <Link to="/main.html" target="_blank" download>Download PDF</Link>
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