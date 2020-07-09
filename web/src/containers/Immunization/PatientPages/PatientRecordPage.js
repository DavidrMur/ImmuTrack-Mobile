import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PatientVaccines from '../PatientVaccines';

class PatientImmunization extends Component {

    render(){
        let patientVaccines;
        if (this.props.currentPatient && this.props.currentPatient.vaccines) {
            patientVaccines = (this.props.currentPatient.vaccines.map((vaccine) => {
                return <div>
                    <PatientVaccines
                    dateAdmin={vaccine.dateAdmin}
                    brandName={vaccine.brandName}
                    bacteria={vaccine.bacteria}
                    lot={vaccine.lot}
                    expiryDate={vaccine.expiryDate}
                    administeredUnder={vaccine.administeredUnder}
                    location={vaccine.location}
                    />
            </div>
            }))
        }
        return(
            {patientVaccines}
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
export default connect(mapStateToProps,null)(PatientImmunization)