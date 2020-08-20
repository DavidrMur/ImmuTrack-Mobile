import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import _  from 'lodash';
import * as actions from 'redux-saga-store/actions/index';
import { PatientRecordVaccineTitles } from '../../components/Immunization/HealthcarePages/HealthcarePageComponents'
import { Button, CircularProgress, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PatientRecordVaccines from '../../components/Immunization/PatientRecordVaccines';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class PatientVaccines extends Component {

    constructor(props) {
        super(props);

        this.state = {
            adding: false,
            patientRecords: [],
            sortBy: undefined,
            sorting: {
                brandName: true,
                dateAdmin: true
            },
            downloading: false,
        };

    }

    componentWillReceiveProps(nextProps) {
        this.setState({vaccine: nextProps.data})
        this.setState({patientRecords: nextProps.currentPatient.patientRecords})
    }

    onNewEntryChangeEvent = (value, type) => {
        console.log(this.state.newEntry);
        let temp = {...this.state.newEntry}
        temp[type] = value;
        this.setState({newEntry: temp})
    }

    onNewEntrySubmitEvent = (payload) => {
        this.props.patientAddEntryPending(payload, this.props.currentPatient.OHIP);
        this.setState({adding:false})
    };

    onCancel = () => {
        this.setState({adding: false});
    }

    onSortBy = (type) => {

        if (this.state.sortBy === type) {
            let temp = this.state.sorting;
            temp[type] = !temp[type];
            this.setState({sorting: temp});
            return this.setState({patientRecords: this.state.patientRecords.reverse()})
        }
        else {
            this.setState({sortBy: type})
            this.setState({sorting: {brandName: true, dateAdmin: true}});
        }

        switch(type) {
            case 'brandName':
                this.setState({patientRecords: _.orderBy(this.props.currentPatient.patientRecords, ['brandName'], ['asc'])})
                break;
            case 'dateAdmin':
                this.setState({patientRecords: _.orderBy(this.props.currentPatient.patientRecords, ['dateAdmin'], ['asc'])})
                break;
            case 'reset':
                this.setState({patientRecords: this.props.currentPatient.patientRecords})
                break;
            default:
                break;    
        }
    }

    downloadPDF = () => {
        let noscript = document.getElementsByTagName('noscript');
        document.body.removeChild(noscript[0])

        html2canvas(document.body, ).then(function(canvas) {
            let imgData = canvas.toDataURL();

            let doc = new jsPDF('p', 'px', 'a4', true);

            const imgProps= doc.getImageProperties(imgData);
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            doc.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');
            doc.save();
        });

        this.setState({downloading: false});
        document.getElementById('header-right').style.display = "block"
    }

    prepPDF = () => {
        document.getElementById('header-right').style.display = "none"
        this.setState({downloading: true}, this.downloadPDF);
    }


    render(){

        if (_.isEmpty(this.props.vaccines)) return <Redirect to="/main" />
        if (!this.props.currentPatient || _.isEmpty(this.props.currentPatient)) return (<CircularProgress style={{margin: 'auto', 'margin-top': '50px', display: 'block'}}/>
            )

        return (
            <div>
                <div hidden={this.state.downloading} style={{'margin-bottom': '20px'}}>
                    <Typography variant='h5'>Sort by:</Typography>
                    <Button onClick={() => this.onSortBy('brandName')} endIcon={this.state.sorting.brandName ? <ArrowUpwardIcon>Vaccine</ArrowUpwardIcon> : <ArrowDownwardIcon>Vaccine</ArrowDownwardIcon>}>Vaccine</Button>
                    <Button onClick={() => this.onSortBy('dateAdmin')} endIcon={this.state.sorting.dateAdmin ? <ArrowUpwardIcon>Date of Administration</ArrowUpwardIcon> : <ArrowDownwardIcon>Date of Administration</ArrowDownwardIcon>}>Date of Administration</Button>
                    <Button onClick={() => this.onSortBy('reset')}>Reset</Button>
                </div>
                {this.state.adding ? <PatientRecordVaccines adding vaccines={this.props.vaccines} userInfo={this.props.currentUser} onSubmitEvent={this.onNewEntrySubmitEvent} onCancel={this.onCancel} /> : !this.props.displayOnly && !this.state.downloading ? <Button onClick={() => (this.setState({adding: true}))} >Add Entry</Button> : null}
                { !this.state.downloading ? <Button style={{'left': '85%'}}>Sync All</Button> : null }
                {this.state.patientRecords && this.state.patientRecords.map((vaccine, i) => {
                    return (<PatientRecordVaccines
                        dateAdmin={vaccine.dateAdmin}
                        brandName={vaccine.brandName}
                        bacteria={vaccine.bacteria}
                        lot={vaccine.lot}
                        expiryDate={vaccine.expiryDate}
                        administeredUnder={vaccine.administeredUnder}
                        location={vaccine.location}
                        userInfo={this.props.currentUser}
                        entryId={vaccine.entryId}
                        ageAdmin={vaccine.ageAdmin}
                        key={vaccine.entryId}
                        index={i}
                        vaccines={this.props.vaccines}
                        editable={vaccine.editable && vaccine.administeredUnder === `Dr. ${this.props.currentUser.lastName}`}
                        displayOnly={this.props.displayOnly || this.state.downloading}
                        removeEntry={(entryId) => this.props.patientRemoveEntryPending(entryId, this.props.currentPatient.OHIP)}
                        onSubmitEvent={(payload ) => this.props.patientUpdateInfoPending({...payload, ohip: this.props.currentPatient.OHIP})}
                />)
             })}
        {!this.state.downloading ? <Button variant={'outlined'} onClick={() => this.prepPDF()}>Download PDF</Button> : null }
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentPatient: state.immunization.patient,
        currentUser: state.auth.userInfo,
        vaccines: state.immunization.vaccines
    };
};

const mapDispathToProps = dispatch => {
    return {
        patientAddEntryPending: (payload, ohip) => dispatch(actions.patientAddEntryPending(payload, ohip)),
        patientRemoveEntryPending: (entryId, ohip) => dispatch(actions.patientRemoveEntryPending(entryId, ohip)),
        patientUpdateInfoPending: (payload) => dispatch(actions.patientUpdateInfoPending(payload))
    };
};

export default connect(mapStateToProps,mapDispathToProps)(PatientVaccines)