import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { PatientRecordTile, PatientRecordVaccines, PatientRecordVaccineTitles } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';

class HealthcareRecordPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectionCount: 10
        }
    }

    componentDidMount = () => {
        this.props.patientInfoPending();
    }

    patientRecords = (<div>loading</div>);
    
    
    render(){
        let patientVaccines;
        if (this.props.currentPatient.vaccines) {
            patientVaccines = (this.props.currentPatient.vaccines.map((vaccine) => {
                return <PatientRecordVaccines
                    //key={patient.id}
                    dateAdmin={vaccine.dateAdmin}
                    brandName={vaccine.brandName}
                    bacteria={vaccine.bacteria}
                    lot={vaccine.lot}
                    expiryDate={vaccine.expiryDate}
                    administeredUnder={vaccine.administeredUnder}
                    location={vaccine.location}
                    //function to make API request to view more information on patient
                    //redirectQuery={this.props.getInfo(patient.id)}
            />
            }))
        }

        return(
            <div>
               <PatientRecordTile
                    key={this.props.currentPatient.id}
                    id={this.props.currentPatient.id}
                    name={this.props.currentPatient.name}
                    DOB={this.props.currentPatient.DOB}
                    OHIP={this.props.currentPatient.OHIP}
                    //function to make API request to view more information on patient
                    //redirectQuery={this.props.getInfo(patient.id)}
                />
                
                <PatientRecordVaccineTitles />
                {patientVaccines}
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        currentPatient: state.immunization.healthcare.currentPatient
    };
};

const mapDispathToProps = dispatch => {
    return {
        patientInfoPending: () => dispatch(actions.patientInfoPending()) 
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(mapStateToProps,mapDispathToProps)(HealthcareRecordPage)