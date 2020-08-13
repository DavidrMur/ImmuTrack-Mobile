import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button} from '@material-ui/core';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import './HealthcarePageComponents.css';

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