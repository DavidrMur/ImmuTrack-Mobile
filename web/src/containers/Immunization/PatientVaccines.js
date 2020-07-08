import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PatientRecordVaccinesEdit, PatientRecordVaccines} from '../../components/Immunization/HealthcarePages/HealthcarePageComponents'

class PatientVaccines extends Component {

    state = {
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

    onChangeEvent = (value, type) => {
        let temp = {...this.state.vaccine}
        temp[type] = value;
        this.setState({vaccine: temp})
    }

    render(){
        return (
            <div>
                <button onClick={() => this.setState({edit: true})}>Edit</button>
                {this.state.edit ? 
                <PatientRecordVaccinesEdit
                dateAdmin={this.state.vaccine.dateAdmin}
                brandName={this.state.vaccine.brandName}
                bacteria={this.state.vaccine.bacteria}
                lot={this.state.vaccine.lot}
                expiryDate={this.state.vaccine.expiryDate}
                administeredUnder={this.state.vaccine.administeredUnder}
                location={this.state.vaccine.location}
                onChangeEvent={this.onChangeEvent}
                />
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


//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default PatientVaccines