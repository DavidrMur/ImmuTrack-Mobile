import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { PatientRecordVaccinesEdit, PatientRecordVaccines} from '../../components/Immunization/HealthcarePages/HealthcarePageComponents'
import { Button } from '@material-ui/core';

class PatientVaccines extends Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            vaccine: {
                dateAdmin: this.props.dateAdmin,
                brandName: this.props.brandName,
                bacteria: this.props.bacteria,
                lot: this.props.lot,
                expiryDate: this.props.expiryDate,
                administeredUnder: this.props.administeredUnder,
                location: this.props.location
            }
        };

    }

    componentWillReceiveProps(nextProps) {
        debugger;
        this.setState({vaccine: nextProps.data})
    }

    onChangeEvent = (value, type) => {
        console.log(value);
        let temp = {...this.state.vaccine}
        temp[type] = type === 'bacteria' ? [value] : value;
        this.setState({vaccine: temp})
    }

    onSubmitEvent = () => {
        this.setState({edit: false});
        this.props.patientUpdateInfoPending(this.state.vaccine);
    }

    render(){
        return (
            <div>
                <button onClick={() => this.setState({edit: true})} hidden={!this.props.editPermission}>Edit</button>
                {this.state.edit ? 
                <div><PatientRecordVaccinesEdit
                dateAdmin={this.state.vaccine.dateAdmin}
                brandName={this.state.vaccine.brandName}
                bacteria={this.state.vaccine.bacteria}
                lot={this.state.vaccine.lot}
                expiryDate={this.state.vaccine.expiryDate}
                administeredUnder={this.state.vaccine.administeredUnder}
                location={this.state.vaccine.location}
                onChangeEvent={this.onChangeEvent}
                />
                <button onClick={() => this.onSubmitEvent()}>Submit</button>
                </div>
                : 
                <PatientRecordVaccines
                //key={patient.id}
                dateAdmin={this.state.vaccine.dateAdmin}
                brandName={this.state.vaccine.brandName}
                bacteria={this.state.vaccine.bacteria}
                lot={this.state.vaccine.lot}
                expiryDate={this.state.vaccine.expiryDate}
                administeredUnder={this.state.vaccine.administeredUnder}
                location={this.state.vaccine.location}
                //function to make API request to view more information on patient
                //redirectQuery={this.props.getInfo(patient.id)}
        />}
        </div>
        );
    }
}

const mapDispathToProps = dispatch => {
    return {
        patientUpdateInfoPending: (payload) => dispatch(actions.patientUpdateInfoPending(payload))
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(null,mapDispathToProps)(PatientVaccines)