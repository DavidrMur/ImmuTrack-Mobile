import React, { Component } from 'react';
import { TextField, Accordion, AccordionSummary, AccordionDetails, Checkbox, Typography, Select, MenuItem, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Autocomplete } from '@material-ui/lab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { vaccineGroups } from 'helper-functions/constantGroups';
import BacteriaList from './HealthcarePages/BacteriaList';


class PatientRecordVaccines extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            maxDate: new Date().toISOString().slice(0, 10),
            disableAdministered: false,
            error: false,
            added: false,
            addOtherVaccine: false
        }
    }

    updatedVaccine = {
        dateAdmin: this.props.dateAdmin,
        brandName: this.props.brandName,
        bacteria: this.props.bacteria || [],
        lot: this.props.lot,
        expiryDate: this.props.expiryDate,
        administeredUnder: this.props.administeredUnder,
        location: this.props.location,
        entryId: this.props.entryId,
        otherVaccine: false

    };

    onChangeEvent = (value, type) => {
        let temp = {...this.updatedVaccine}

        //temp[type] = value;

        switch (type) {
            case 'dateAdmin':
                if (value === this.state.maxDate) {
                    temp['administeredUnder'] = `Dr. ${this.props.userInfo.lastName}`;
                    temp['dateAdmin'] = value;
                    this.setState({disableAdministered: true})
                } else {
                    this.setState({disableAdministered: false})
                    temp['dateAdmin'] = value;
                }
                break;
            case 'brandName':
                if (value === 'Other') {
                    this.setState({addOtherVaccine: true});
                    temp['bacteria'] = [];  
                    temp['otherVaccine'] = true;
                } else {
                    this.setState({addOtherVaccine: false});
                    temp['brandName'] = value || undefined;
                }
                break;
            case 'otherBrandName':
                temp['brandName'] = value;
                break;
            case 'bacteria':
                temp['bacteria'].push(value);
                break;
            default: 
                temp[type] = value;   
                break;
        }

        this.updatedVaccine = temp;
        console.log(this.updatedVaccine);
    }

    onSubmitEvent = () => {
        if (!this.validatePayload()) {
            this.setState({editing: false});
            this.setState({added: true});
            this.props.onSubmitEvent(this.updatedVaccine);
        }
    }

    validatePayload = () => {

        let errorCheck = false;

        if (this.updatedVaccine['dateAdmin'] === undefined || this.updatedVaccine['brandName'] === undefined ||
            this.updatedVaccine['lot'] === undefined || this.updatedVaccine['expiryDate'] === undefined ||
            this.updatedVaccine['administeredUnder'] === undefined || this.updatedVaccine['location'] === undefined) {
                errorCheck = true;
            }

        this.setState({error: errorCheck})

        return errorCheck;
    }

    render() {

        let patientRecordDisplay = (
            <div>
                <Button variant={'contained'} onClick={() => this.setState({editing: true})} >Edit</Button>
                <TableContainer style={{margin:'5px', width:'98%', justifyContent:'center'}} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date of Admin</TableCell>
                                <TableCell align="right">Vaccine Brand</TableCell>
                                <TableCell align="right">Lot#</TableCell>
                                <TableCell align="right">Expiry</TableCell>
                                <TableCell align="right">Administered by</TableCell>
                                <TableCell align="right">Location</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow>
                                    <TableCell align="left">{this.updatedVaccine.dateAdmin}</TableCell>
                                    <TableCell align="right">{this.updatedVaccine.brandName}</TableCell>
                                    <TableCell align="right">{this.updatedVaccine.lot}</TableCell>
                                    <TableCell align="right">{this.updatedVaccine.expiryDate}</TableCell>
                                    <TableCell align="right">{this.updatedVaccine.administeredUnder}</TableCell>
                                    <TableCell align="right">{this.updatedVaccine.location}</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <BacteriaList vaccine={this.updatedVaccine.brandName} bacteria={this.props.bacteria} vaccineGroups={this.props.vaccines} />
            </div>

        );

        let patientRecordEdit = (
            <div>
                <Typography hidden={!this.state.error}>Please ensure you have filled all of the information</Typography>
                <Button variant={'outlined'} onClick={() => this.onSubmitEvent()}>Submit</Button>
                <ul className="flex-container longhand">
                    <TextField
                        type="date"
                        placeholder={this.updatedVaccine.dateAdmin}
                        InputProps={{
                            inputProps: {
                                max: this.state.maxDate
                            }
                        }} 
                        defaultValue={this.updatedVaccine.dateAdmin }
                        className="flex-item"
                        onChange={(event) => this.onChangeEvent(event.target.value, 'dateAdmin')} 
                        />

                    <Autocomplete 
                        options={this.props.vaccines}
                        getOptionLabel={(option) => option.vaccine || (this.props.vaccines.find(vaccine => vaccine.vaccine === option)).vaccine}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} defaultValue={this.props.brandName} variant="outlined" />}
                        getOptionSelected={(option, value) => option.vaccine === value}
                        defaultValue={this.props.brandName}
                        className="flex-item" 
                        onChange={(event, newValue) => this.onChangeEvent(newValue && newValue.vaccine, 'brandName')}
                        />
                        {/* TODO: styling, should be above or under not side by side */}
                        {this.state.addOtherVaccine ? <TextField onChange={(event) => this.onChangeEvent(event.target.value,'otherBrandName')} helperText={'Enter the vaccine vaccine brand'} /> : null}
                    <BacteriaList vaccine={this.updatedVaccine.brandName} bacteria={this.updatedVaccine.bacteria} otherVaccine={this.state.addOtherVaccine} onAddBacteria={(this.onChangeEvent)} vaccineGroups={this.props.vaccines} />
                    <TextField type={'text'} label={'Lot#'} defaultValue={this.updatedVaccine.lot} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value,'lot')}/>
                    <TextField type="date" defaultValue={this.updatedVaccine.expiryDate} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value,'expiryDate')}/>
                    <TextField type="text" disabled={this.state.disableAdministered} value={this.updatedVaccine.administeredUnder} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value, 'administeredUnder')}/>
                    <Autocomplete 
                        options={this.props.userInfo.workLocations}
                        getOptionLabel={(option) => `${option.workName}, ${option.workAddress}` }
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} defaultValue={this.props.location} variant="outlined" />}
                        //defaultValue={this.props.location }
                        onChange={(event, newValue) => this.onChangeEvent(newValue && `${newValue.workName}, ${newValue.workAddress}`, 'location')}
                        />
                </ul>
        </div>
        )

        return (
            <div>
                {this.state.added ? null : this.props.adding || this.state.editing ? 
                    patientRecordEdit
                :
                    patientRecordDisplay
                }
            </div>
        )
    }
}

export default PatientRecordVaccines