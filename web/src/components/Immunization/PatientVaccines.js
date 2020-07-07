import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PatientRecordVaccinesEdit, PatientRecordVaccines} from './HealthcarePages/HealthcarePageComponents'

class PatientVaccines extends Component {

    state = {
        edit: false
    };

    render(){
        return (
            <div>
                <button onClick={() => this.setState({edit: true})}>Edit</button>
                {this.state.edit ? 
                <PatientRecordVaccinesEdit
                dateAdmin={this.props.dateAdmin}
                brandName={this.props.brandName}
                bacteria={this.props.bacteria}
                lot={this.props.lot}
                expiryDate={this.props.expiryDate}
                administeredUnder={this.props.administeredUnder}
                location={this.props.location}
                />
                : 
                <PatientRecordVaccines
                //key={patient.id}
                dateAdmin={this.props.dateAdmin}
                brandName={this.props.brandName}
                bacteria={this.props.bacteria}
                lot={this.props.lot}
                expiryDate={this.props.expiryDate}
                administeredUnder={this.props.administeredUnder}
                location={this.props.location}
                //function to make API request to view more information on patient
                //redirectQuery={this.props.getInfo(patient.id)}
        />}
        </div>
        );
    }
}


//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default PatientVaccines