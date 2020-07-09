import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { PatientRecordTile } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';

class HealthcareRecordPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectionCount: 10
        }
    }

    componentDidMount = () => {
        this.props.patientsPending();
    }

    patientRecordTiles = (<div>loading</div>);
    
    
    render(){
        if (this.props.patients) {
            this.patientRecordTiles = (this.props.patients.slice(0,this.state.selectionCount)).map((patient) => {
                return <PatientRecordTile
                    key={patient.id}
                    id={patient.id}
                    name={patient.name}
                    DOB={patient.DOB}
                    OHIP={patient.OHIP}
                    //function to make API request to view more information on patient
                    redirectQuery={this.props.patientInfoPending}
            />
        })}

        return(
            <div>
               {this.patientRecordTiles}
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        patients: state.immunization.healthcare.patients
    };
};

const mapDispathToProps = dispatch => {
    return {
        patientsPending: () => dispatch(actions.patientsPending()),
        patientInfoPending: (patientOHIP) => dispatch(actions.patientInfoPending(patientOHIP))
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(mapStateToProps,mapDispathToProps)(HealthcareRecordPage)