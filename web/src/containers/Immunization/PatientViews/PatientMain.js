import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PatientImmunization extends Component {

    render(){
        return(
            <div>
                <p>Welcome Person</p>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        
    };
};

const mapDispathToProps = dispatch => {
    return {
    };
};

//export default connect(mapStateToProps,mapDispathToProps)(SummonerProfile);
export default PatientImmunization