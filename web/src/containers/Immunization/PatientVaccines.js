import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import _  from 'lodash';
import * as actions from 'redux-saga-store/actions/index';
import { PatientRecordVaccineTitles } from '../../components/Immunization/HealthcarePages/HealthcarePageComponents'
import { Button, CircularProgress } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PatientRecordVaccines from '../../components/Immunization/PatientRecordVaccines';

class PatientVaccines extends Component {

    constructor(props) {
        super(props);

        this.state = {
            adding: false
        };

    }

    componentWillReceiveProps(nextProps) {
        this.setState({vaccine: nextProps.data})
    }

    onNewEntryChangeEvent = (value, type) => {
        console.log(this.state.newEntry);
        let temp = {...this.state.newEntry}
        temp[type] = value;
        this.setState({newEntry: temp})
    }

    onNewEntrySubmitEvent = (payload) => {
        this.props.patientAddEntryPending(payload, this.props.currentPatient.OHIP);
        this.setState({adding:false})
    };

    onCancel = () => {
        this.setState({adding: false});
    }

    render(){

        if (_.isEmpty(this.props.vaccines)) return <Redirect to="/main" />
        if (!this.props.currentPatient || _.isEmpty(this.props.currentPatient)) return (<CircularProgress style={{margin: 'auto', 'margin-top': '50px', display: 'block'}}/>
            )

        return (
            <div>
                <PatientRecordVaccineTitles />
                {this.state.adding ? <PatientRecordVaccines adding vaccines={this.props.vaccines} userInfo={this.props.currentUser} onSubmitEvent={this.onNewEntrySubmitEvent} onCancel={this.onCancel} /> : !this.props.displayOnly ? <Button onClick={() => (this.setState({adding: true}))} >Add Entry</Button> : null}
                {this.props.currentPatient.patientRecords && this.props.currentPatient.patientRecords.map((vaccine) => {
                    return (<PatientRecordVaccines
                        dateAdmin={vaccine.dateAdmin}
                        brandName={vaccine.brandName}
                        bacteria={vaccine.bacteria}
                        lot={vaccine.lot}
                        expiryDate={vaccine.expiryDate}
                        administeredUnder={vaccine.administeredUnder}
                        location={vaccine.location}
                        userInfo={this.props.currentUser}
                        entryId={vaccine.entryId}
                        vaccines={this.props.vaccines}
                        editable={vaccine.editable && vaccine.administeredUnder === `Dr. ${this.props.currentUser.lastName}`}
                        displayOnly={this.props.displayOnly}
                        removeEntry={(entryId) => this.props.patientRemoveEntryPending(entryId, this.props.currentPatient.OHIP)}
                        onSubmitEvent={(payload ) => this.props.patientUpdateInfoPending({...payload, ohip: this.props.currentPatient.OHIP})}
                />)
             })}
                
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentPatient: state.immunization.patient,
        currentUser: state.auth.userInfo,
        vaccines: state.immunization.vaccines
    };
};

const mapDispathToProps = dispatch => {
    return {
        patientAddEntryPending: (payload, ohip) => dispatch(actions.patientAddEntryPending(payload, ohip)),
        patientRemoveEntryPending: (entryId, ohip) => dispatch(actions.patientRemoveEntryPending(entryId, ohip)),
        patientUpdateInfoPending: (payload) => dispatch(actions.patientUpdateInfoPending(payload))
    };
};

export default connect(mapStateToProps,mapDispathToProps)(PatientVaccines)