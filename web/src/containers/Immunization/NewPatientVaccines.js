import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { PatientRecordVaccineTitles } from '../../components/Immunization/HealthcarePages/HealthcarePageComponents'
import { Button } from '@material-ui/core';
import PatientRecordVaccines from '../../components/Immunization/PatientRecordVaccines';

class NewPatientVaccines extends Component {

    constructor(props) {
        super(props);

        this.state = {
            updatedVaccine: {},
        };

    }

    patientRecords = (<div>loading</div>);
    editing = false

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
        return (
            <div>
                <PatientRecordVaccineTitles />
                {this.props.currentPatient.vaccines.map((vaccine) => {
                    return (<PatientRecordVaccines
                        dateAdmin={vaccine.dateAdmin}
                        brandName={vaccine.brandName}
                        bacteria={vaccine.bacteria}
                        lot={vaccine.lot}
                        expiryDate={vaccine.expiryDate}
                        administeredUnder={vaccine.administeredUnder}
                        location={vaccine.location}
                        onSubmitEvent={this.props.patientUpdateInfoPending}
                        //
                />)
             })}
                
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

export default connect(mapStateToProps,mapDispathToProps)(NewPatientVaccines)




{/* <button onClick={() => this.setState({edit: true})} hidden={!this.props.editPermission}>Edit</button>
                {this.state.edit ? 
                <div><PatientRecordVaccinesEdit
                dateAdmin={this.props.vaccine.dateAdmin}
                brandName={this.props.vaccine.brandName}
                bacteria={this.props.vaccine.bacteria}
                lot={this.props.vaccine.lot}
                expiryDate={this.props.vaccine.expiryDate}
                administeredUnder={this.props.vaccine.administeredUnder}
                location={this.props.vaccine.location}
                onChangeEvent={this.onChangeEvent}
                />
                <button onClick={() => this.onSubmitEvent()}>Submit</button>
                </div>
                :  */}