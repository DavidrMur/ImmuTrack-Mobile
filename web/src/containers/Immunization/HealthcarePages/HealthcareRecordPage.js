import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux-saga-store/actions/index';
import { PatientDisplayTile } from '../../../components/Immunization/HealthcarePages/HealthcarePageComponents';
import { Button, Typography } from '@material-ui/core'
import PatientVaccines from '../PatientVaccines';
import MaterialTable from 'material-table';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './HealthcareRecordPage.css'

// TODO: refactor this page, the vaccines table should be a separate entity

class HealthcareRecordPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            patientVaccines: this.props.currentPatient.patientRecords,
            editing: false,
            add: false,
            newEntry: {}
        }
    }

    downloadPDF = () => {

        // html2canvas(document.body).then(function(canvas) {
        //     document.body.appendChild(canvas);
        //     debugger;
        //     let imgData = canvas.toDataURL('image/png');

        //     let doc = new jsPDF('p', 'pt', 'a4');

        //     doc.addImage(imgData, 'PNG', 10,10);
        //     doc.save();
        //     window.open(imgData);
        // });
        let noscript = document.getElementsByTagName('noscript');
        document.body.removeChild(noscript[0])

        html2canvas(document.body, ).then(function(canvas) {
            //document.body.appendChild(canvas);

            debugger;
            let imgData = canvas.toDataURL();

            let doc = new jsPDF('p', 'px', 'a4', true);

            const imgProps= doc.getImageProperties(imgData);
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            doc.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');
            doc.save();
        });


        // window.html2canvas = html2canvas;
        // let doc = new jsPDF();
        // // let width = document.body.clientWidth;
        // // document.body.style.width = '1700px';
        // doc.html(document.body, {
        //     scale: 1,
        //     callback: function (doc) {
                
        //       doc.save();
        //       //document.body.style.width = width+'px';
        //     }
        //  });

    }

    patientRecords = (<Typography variant={'paragraph'}>loading</Typography>);
    
    render(){
        return(
            <div className={'background'}>
                <PatientDisplayTile
                    key={this.props.currentPatient.id}
                    id={this.props.currentPatient.id}
                    firstName={this.props.currentPatient.firstName}
                    lastName={this.props.currentPatient.lastName}
                    DOB={this.props.currentPatient.DOB}
                    OHIP={this.props.currentPatient.OHIP}
                />
                <PatientVaccines />
                <Button variant={'outlined'} onClick={() => this.downloadPDF()}>Download PDF</Button>
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

export default connect(mapStateToProps,mapDispathToProps)(HealthcareRecordPage)
