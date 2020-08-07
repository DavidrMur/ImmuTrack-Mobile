import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import PatientVaccines from '../PatientVaccines';
import { PatientRecordVaccineTitles } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';
import { Button, Grid, TextField, Typography } from '@material-ui/core'

class PatientImmunization extends Component {

    
    componentDidMount = () => {
        this.props.patientInfoPending(this.props.userInfo.OHIP);
    }
    
    render(){
        let patientVaccines;
        if (this.props.currentPatient && this.props.currentPatient.vaccines) {
            patientVaccines = (this.props.currentPatient.vaccines.map((vaccine) => {
                return <div>
                    <PatientVaccines
                    dateAdmin={vaccine.dateAdmin}
                    brandName={vaccine.brandName}
                    bacteria={vaccine.bacteria}
                    lot={vaccine.lot}
                    expiryDate={vaccine.expiryDate}
                    administeredUnder={vaccine.administeredUnder}
                    location={vaccine.location}
                    editPermission={false}
                    />
            </div>
            }))
        }
        return(
            <div>
                <PatientRecordVaccineTitles />
                {patientVaccines}
                <Button variant={'outlined'}>Download PDF</Button>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        userInfo: state.auth.userInfo,
        currentPatient: state.immunization.patient
    };
};

const mapDispathToProps = dispatch => {
    return {
        patientInfoPending: (patientOHIP) => dispatch(actions.patientInfoPending(patientOHIP))
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(mapStateToProps,mapDispathToProps)(PatientImmunization)