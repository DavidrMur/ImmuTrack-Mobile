import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { PatientRecordTile } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';

class HealthcareHomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectionCount: 2
        }
    }

    componentDidMount = () => {
        //this.setStatethis.props.getPatients();
    }

    patientRecords = (<div>loading</div>);
    
    
    render(){
        let patients = [{'id': '1234', 'name': 'John Doe', 'DOB': 'Dec-31-1998', 'OHIP': '123456'}];
        if (patients) {
            this.patientRecords = (patients.slice(0,this.state.selectionCount)).map((patient) => {
                return <PatientRecordTile
                    key={patient.id}
                    id={patient.id}
                    name={patient.name}
                    DOB={patient.DOB}
                    OHIP={patient.OHIP}
                    //function to make API request to view more information on patient
                    //redirectQuery={this.props.getInfo(patient.id)}
            />
        })}

        return(
            <div>
               {this.patientRecords}
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        //patients: state.immunization.healthcare.patients
    };
};

const mapDispathToProps = dispatch => {
    return {
        //loginPending: (username, password) => dispatch(actions.loginPending(username, password)) 
        //getPatients???
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(mapStateToProps,mapDispathToProps)(HealthcareHomePage)