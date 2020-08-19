import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux-saga-store/actions/index';
import _  from 'lodash';
import { Redirect } from 'react-router-dom';
import { PatientDisplayTile } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';
import { Button, Typography } from '@material-ui/core'
import PatientVaccines from '../PatientVaccines';
import MaterialTable from 'material-table';
import './HealthcareRecordPage.css'

// TODO: refactor this page, the vaccines table should be a separate entity

class HealthcareRecordPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            patientVaccines: this.props.currentPatient.patientRecords,
            editing: false,
            add: false,
            downloading: false,
            newEntry: {}
        }
    }

    patientRecords = (<Typography variant={'paragraph'}>loading</Typography>);
    
    render(){
        //if (_.isEmpty(this.props.vaccines)) return <Redirect to="/main" />
        if (!this.props.currentPatient || _.isEmpty(this.props.currentPatient || !this.props.currentPatient.age)) return (<></>);
        return(
            <div className={'background'}>
                <PatientDisplayTile
                    key={this.props.currentPatient.id}
                    id={this.props.currentPatient.id}
                    firstName={this.props.currentPatient.firstName}
                    lastName={this.props.currentPatient.lastName}
                    DOB={this.props.currentPatient.DOB}
                    OHIP={this.props.currentPatient.OHIP}
                    age={this.props.currentPatient.age && this.props.currentPatient.age.years && this.props.currentPatient.age.months && this.props.currentPatient.age.years > 1 ? `${this.props.currentPatient.age.years} yr` : `${this.props.currentPatient.age.months} mo`}
                    postalCode={this.props.currentPatient.postalCode}
                />
                <PatientVaccines downloading={this.state.downloading} />
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
