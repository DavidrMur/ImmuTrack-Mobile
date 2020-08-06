import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Autocomplete } from '@material-ui/lab';
import { vaccineGroups } from 'helper-functions/constantGroups';
import { TextField, Accordion, AccordionSummary, AccordionDetails, Checkbox, Typography} from '@material-ui/core';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBCardHeader } from "mdbreact";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './HealthcarePageComponents.css';

export const PatientRecordTile = (props) => {
    return (
        <MDBContainer>
            <MDBCard border='default' className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
                <MDBCardTitle>{props.lastName}</MDBCardTitle>
                <MDBCardText>
                    <Typography variant='h5'>{props.firstName}</Typography>
                    <Typography variant={'paragraph'}>{props.DOB}</Typography>
                    <div variant={'paragraph'}>{props.OHIP}</div>
                    <div onClick={() => props.redirectQuery(props.OHIP)}>
                        <Link to='/view-patient'>View Record</Link>
                    </div>
                </MDBCardText>
            </MDBCard>
        </MDBContainer>
    )
};

export const PatientRecordVaccineTitles = (props) => {
    return (
        <div>
            <ul className="flex-container longhand">
                <li className="flex-item">Date of Admin</li>
                <li className="flex-item">Vaccine Brand</li>
                <li className="flex-item">Bacteria/Virus</li>
                <li className="flex-item">Lot #</li>
                <li className="flex-item">Expiry</li>
                <li className="flex-item">Administered By/Under</li>
                <li className="flex-item">Location</li>
            </ul>
        </div>
    )
}