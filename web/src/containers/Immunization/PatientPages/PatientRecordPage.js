import React, { Component } from 'react';
import { connect } from 'react-redux';
import _  from 'lodash';
import * as actions from 'redux-saga-store/actions/index';
import PatientVaccines from '../PatientVaccines';
import { PatientDisplayTile } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';
import { Button } from '@material-ui/core'

class PatientRecordPage extends Component {

    
    componentDidMount = () => {
        this.props.patientInfoPending(this.props.userInfo.OHIP);
        this.props.retrieveVaccinesPending();
    }
    
    render(){
        return(
            <div className={'background'}>
                <PatientDisplayTile
                    key={this.props.currentPatient.id}
                    id={this.props.currentPatient.id}
                    firstName={this.props.currentPatient.firstName}
                    lastName={this.props.currentPatient.lastName}
                    DOB={this.props.currentPatient.DOB}
                    OHIP={this.props.currentPatient.OHIP}
                />
                {_.isEmpty(this.props.vaccines) ? null : <PatientVaccines displayOnly />}
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        userInfo: state.auth.userInfo,
        currentPatient: state.immunization.patient,
        vaccines: state.immunization.vaccines
    };
};

const mapDispathToProps = dispatch => {
    return {
        patientInfoPending: (patientOHIP) => dispatch(actions.patientInfoPending(patientOHIP)),
        retrieveVaccinesPending: () => dispatch(actions.retrieveVaccinesPending())
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(mapStateToProps,mapDispathToProps)(PatientRecordPage)