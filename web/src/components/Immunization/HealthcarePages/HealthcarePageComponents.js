import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, TableContainer} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
                    <div variant={'paragraph'}>Age: {props.age}</div>
                    <div variant={'paragraph'}>Postal Code: {props.postalCode}</div>
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
                    <div variant={'paragraph'}>Age: {props.age}</div>
                    <div variant={'paragraph'}>Postal Code: {props.postalCode}</div>
                </MDBCardText>
            </MDBCard>
        </MDBContainer>
        </div>
    )
};

export const PatientRecordVaccineTitles = (props) => {
    return (
        <TableContainer style={{margin:'5px', width:'98%', justifyContent:'center'}} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                        <TableRow>
                            <TableCell>Date of Admin</TableCell>
                            <TableCell align="left">Vaccine Brand</TableCell>
                            <TableCell align="left">Pathogen(s)</TableCell>
                            <TableCell align="left">Lot#</TableCell>
                            <TableCell align="left">Expiry</TableCell>
                            <TableCell align="left">Administered by</TableCell>
                            <TableCell align="left">Location</TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <TableCell align="left"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">
                                {/* <BacteriaList vaccine={this.updatedVaccine.brandName} bacteria={this.props.bacteria} vaccineGroups={this.props.vaccines} /> */}
                            </TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}