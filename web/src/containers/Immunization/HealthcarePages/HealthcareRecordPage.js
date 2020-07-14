import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { PatientRecordTile, PatientRecordVaccines, PatientRecordVaccinesEdit, PatientRecordVaccineTitles } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';
import PatientVaccines from '../PatientVaccines';

class HealthcareRecordPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            patientVaccines: this.props.currentPatient.vaccines,
            editing: false
        }
    }

    patientRecords = (<div>loading</div>);
    editing = false

    test = () => {
        let newVaccines = {
            'dateAdmin': 'f', 'brandName': 'g', 'bacteria': ['e', 'g'],
            'lot': 'f', 'expiryDate': 'e', 'administeredUnder': 'b', 'location': '1'
        };

        let newArr = [newVaccines];
        newArr = newArr.concat(this.state.patientVaccines);
        this.setState({patientVaccines: newArr});
        this.editing = true;
        console.log(this.state);
    }
    
    render(){
        let patientVaccines;
        if (this.state.patientVaccines) {
            this.editing = false;
            patientVaccines = null;
            patientVaccines = (this.state.patientVaccines.map((vaccine) => {
                return <div>
                    <PatientVaccines
                    dateAdmin={vaccine.dateAdmin}
                    brandName={vaccine.brandName}
                    bacteria={vaccine.bacteria}
                    lot={vaccine.lot}
                    expiryDate={vaccine.expiryDate}
                    administeredUnder={vaccine.administeredUnder}
                    location={vaccine.location}
                    editPermission={true}
                    />
            </div>
            }))
        } else {
            patientVaccines = (<Redirect to='/main' />);
        }

        return(
            <div>
                <Link to="/main">Back</Link>
                <PatientRecordTile
                    key={this.props.currentPatient.id}
                    id={this.props.currentPatient.id}
                    name={this.props.currentPatient.name}
                    DOB={this.props.currentPatient.DOB}
                    OHIP={this.props.currentPatient.OHIP}
                    //function to make API request to view more information on patient
                    //redirectQuery={this.props.getInfo(patient.id)}
                />
                <button onClick={() => this.test()} >Add Entry</button>
                <PatientRecordVaccineTitles />
                {!this.editing ? patientVaccines : null}
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
        
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(mapStateToProps,mapDispathToProps)(HealthcareRecordPage)