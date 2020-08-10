import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Autocomplete } from '@material-ui/lab';
import { vaccineGroups } from 'helper-functions/constantGroups';
import { TextField, Accordion, AccordionSummary, AccordionDetails, Checkbox, Typography, Button} from '@material-ui/core';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBCardHeader } from "mdbreact";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './HealthcarePageComponents.css';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

export const PatientRecordTile = (props) => {
    return (
        <MDBContainer>
            <MDBCard border='default' className="card-body" style={{ width: "15rem", marginTop: "1rem" }}>
                <MDBCardTitle>{props.lastName}</MDBCardTitle>
                <MDBCardText>
                    <Typography variant='h5'>{props.firstName}</Typography>
                    <Typography variant={'paragraph'}>{props.DOB}</Typography>
                    <div variant={'paragraph'}>{props.OHIP}</div>
                    <div onClick={() => props.redirectQuery(props.OHIP)}>
                        <Button variant={'outlined'}>
                        <Link to='/view-patient'>View Record</Link>
                        </Button>
                    </div>
                </MDBCardText>
            </MDBCard>
        </MDBContainer>

    )
};

export const PatientDisplayTile = (props) => {
    return (
        <div align={'center'}>
        <MDBContainer>
            <MDBCard border='default' className="card-body" style={{ width: "15rem", marginTop: "1rem" }}>
                <MDBCardTitle>{props.lastName}</MDBCardTitle>
                <MDBCardText>
                    <Typography variant='paragraph'>{props.firstName}</Typography>
                    <Typography variant={'paragraph'}>{props.DOB}</Typography>
                    <div variant={'paragraph'}>{props.OHIP}</div>
                </MDBCardText>
            </MDBCard>
        </MDBContainer>
        </div>
    )
};

export const PatientRecordVaccineTitles = (props) => {
    return (
        <div></div>
    )
}