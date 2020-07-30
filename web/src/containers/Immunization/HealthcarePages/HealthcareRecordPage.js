import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as actions from 'redux-saga-store/actions/index';
import { PatientRecordTile, PatientRecordVaccines, PatientRecordVaccinesEdit, PatientRecordVaccineTitles } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';
import NewPatientVaccines from '../NewPatientVaccines';
import { Button } from '@material-ui/core'
import newPatientVaccines from '../NewPatientVaccines';

// TODO: refactor this page, the vaccines table should be a separate entity

class HealthcareRecordPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            patientVaccines: this.props.currentPatient.vaccines,
            editing: false,
            add: false,
            newEntry: {}
        }
    }

    patientRecords = (<div>loading</div>);
    // editing = false

    // onNewEntryChangeEvent = (value, type) => {
    //     console.log(this.state.newEntry);
    //     let temp = {...this.state.newEntry}
    //     temp[type] = value;
    //     this.setState({newEntry: temp})
    // }

    // onNewEntrySubmitEvent = () => {
    //     this.props.patientAddEntryPending(this.state.newEntry);
    //     this.setState({add:false})
    // };
    
    render(){
        let patientVaccines;
        // if (this.props.currentPatient.vaccines) {
        //     this.editing = false;
        //     patientVaccines = null;
        //     patientVaccines = (this.props.currentPatient.vaccines.map((vaccine) => {
        //         return <div>
        //             <NewPatientVaccines
        //             dateAdmin={vaccine.dateAdmin}
        //             brandName={vaccine.brandName}
        //             bacteria={vaccine.bacteria}
        //             lot={vaccine.lot}
        //             expiryDate={vaccine.expiryDate}
        //             administeredUnder={vaccine.administeredUnder}
        //             location={vaccine.location}
        //             editPermission={vaccine.editable}
        //             />
        //     </div>
        //     }))
        // } else {
        //     patientVaccines = (<Redirect to='/main' />);
        // }


        return(
            <div>
                <Link to="/main">Back</Link>
                <PatientRecordTile
                    key={this.props.currentPatient.id}
                    id={this.props.currentPatient.id}
                    firstName={this.props.currentPatient.firstName}
                    lastName={this.props.currentPatient.lastName}
                    DOB={this.props.currentPatient.DOB}
                    OHIP={this.props.currentPatient.OHIP}
                    //function to make API request to view more information on patient
                    //redirectQuery={this.props.getInfo(patient.id)}
                />
                <NewPatientVaccines />
                {/* <button onClick={() => this.setState({add: true})} >Add Entry</button> */}
                {/* <PatientRecordVaccineTitles /> */}
                {/* {this.state.add ? 
                    <div><PatientRecordVaccinesEdit
                        dateAdmin={'12-12-12'}
                        brandName={'12-12-12'}
                        bacteria={['fewfe']}
                        lot={'12-12'}
                        expiryDate={'12-12'}
                        administeredUnder={'12-12'}
                        location={'12 w'}
                        onChangeEvent={this.onNewEntryChangeEvent} 
                        />
                        <Button onClick={() => this.onNewEntrySubmitEvent()}>Submit</Button>
                        </div>
                    : null}
                {!this.editing ? patientVaccines : null} */}
                {/* <Link to="/main.html" target="_blank" download>Download PDF</Link> */}
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

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default connect(mapStateToProps,mapDispathToProps)(HealthcareRecordPage)