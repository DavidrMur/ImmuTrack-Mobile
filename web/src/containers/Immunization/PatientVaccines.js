import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import _  from 'lodash';
import * as actions from 'redux-saga-store/actions/index';
import { PatientRecordVaccineTitles } from '../../components/Immunization/HealthcarePages/HealthcarePageComponents'
import { Button } from '@material-ui/core';
import PatientRecordVaccines from '../../components/Immunization/PatientRecordVaccines';

class PatientVaccines extends Component {

    constructor(props) {
        super(props);

        this.state = {
            adding: false
        };

    }

    componentWillReceiveProps(nextProps) {
        debugger;
        this.setState({vaccine: nextProps.data})
    }

    onNewEntryChangeEvent = (value, type) => {
        console.log(this.state.newEntry);
        let temp = {...this.state.newEntry}
        temp[type] = value;
        this.setState({newEntry: temp})
    }

    onNewEntrySubmitEvent = () => {
        this.props.patientAddEntryPending(this.state.newEntry);
        this.setState({add:false})
    };

    render(){

        if (!this.props.currentPatient || _.isEmpty(this.props.currentPatient)) return <Redirect to='/main' />

        return (
            <div>
                <PatientRecordVaccineTitles />
                <Button onClick={() => (this.setState({adding: true}))}>Add Entry</Button>
                {this.state.adding ? <PatientRecordVaccines adding onSubmitEvent={this.onNewEntrySubmitEvent}/> : null}
                {this.props.currentPatient.vaccines && this.props.currentPatient.vaccines.map((vaccine) => {
                    return (<PatientRecordVaccines
                        dateAdmin={vaccine.dateAdmin}
                        brandName={vaccine.brandName}
                        bacteria={vaccine.bacteria}
                        lot={vaccine.lot}
                        expiryDate={vaccine.expiryDate}
                        administeredUnder={vaccine.administeredUnder}
                        location={vaccine.location}
                        userInfo={this.props.currentUser}
                        onSubmitEvent={(payload) => this.props.patientUpdateInfoPending(payload)}
                />)
             })}
                
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentPatient: state.immunization.patient,
        currentUser: state.auth.userInfo
    };
};

const mapDispathToProps = dispatch => {
    return {
        patientAddEntryPending: (payload) => dispatch(actions.patientAddEntryPending(payload)),
        patientUpdateInfoPending: (payload) => dispatch(actions.patientUpdateInfoPending(payload))
    };
};

export default connect(mapStateToProps,mapDispathToProps)(PatientVaccines)