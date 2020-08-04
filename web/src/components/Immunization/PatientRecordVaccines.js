import React, { Component } from 'react';
import { TextField, Accordion, AccordionSummary, AccordionDetails, Checkbox, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Autocomplete } from '@material-ui/lab';
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
        }
    }

    updatedVaccine = {
        dateAdmin: this.props.dateAdmin,
        brandName: this.props.brandName,
        bacteria: this.props.bacteria,
        lot: this.props.lot,
        expiryDate: this.props.expiryDate,
        administeredUnder: this.props.administeredUnder,
        location: this.props.location,

    };

    onChangeEvent = (value, type) => {
        let temp = {...this.updatedVaccine}
        temp[type] = value;
        if (type === 'dateAdmin' && value === this.state.maxDate) {
            temp['administeredUnder'] = `Dr. ${this.props.userInfo.lastName}`;
            this.setState({disableAdministered: true})
        } else if (type === 'dateAdmin') this.setState({disableAdministered: false})
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
        debugger;

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
                <button onClick={() => this.setState({editing: true})} >Edit</button>
                <ul className="flex-container longhand">
                    <li className="flex-item">{this.updatedVaccine.dateAdmin}</li>
                    <li className="flex-item">{this.updatedVaccine.brandName}</li>
                    
                    <li className="flex-item">{this.updatedVaccine.lot}</li>
                    <li className="flex-item">{this.updatedVaccine.expiryDate}</li>
                    <li className="flex-item">{this.updatedVaccine.administeredUnder}</li>
                    <li className="flex-item">{this.updatedVaccine.location}</li>
                </ul>
                <BacteriaList vaccine={this.updatedVaccine.brandName} bacteria={this.props.bacteria} />
            </div>
        );

        let patientRecordEdit = (
            <div>
                <Typography hidden={!this.state.error}>Please ensure you have filled all of the information</Typography>
                <button onClick={() => this.onSubmitEvent()}>Submit</button>
                <ul className="flex-container longhand">
                    <TextField
                        type="date"
                        placeholder={this.updatedVaccine.dateAdmin}
                        InputProps={{
                            inputProps: {
                                max: this.state.maxDate
                            }
                        }} 
                        className="flex-item" 
                        onChange={(event) => this.onChangeEvent(event.target.value, 'dateAdmin')} 
                        />

                    <Autocomplete 
                        options={vaccineGroups}
                        getOptionLabel={(option) => option.vaccineBrand || (vaccineGroups.find(vaccine => vaccine.vaccineBrand === option)).vaccineBrand}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} defaultValue={this.props.brandName} variant="outlined" />}
                        getOptionSelected={(option, value) => option.vaccineBrand === value}
                        defaultValue={this.props.brandName}
                        className="flex-item" 
                        onChange={(event, newValue) => this.onChangeEvent(newValue.vaccineBrand, 'brandName')}
                        />

                    {/* TODO: make onchange event functional for bactera, currently will overwrite all*/}
                    {/* {this.updatedVaccine.bacteria && this.updatedVaccine.bacteria.map((bacteria) => {
                        return <input type="text" defaultValue={bacteria} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value, 'bacteria')}/>
                    })} */}
                    <BacteriaList vaccine={this.updatedVaccine.brandName} bacteria={this.props.bacteria} />
                    <input type="text" defaultValue={this.updatedVaccine.lot} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value,'lot')}/>
                    <TextField type="date" defaultValue={this.updatedVaccine.expiryDate} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value,'expiryDate')}/>
                    <TextField type="text" disabled={this.state.disableAdministered} value={this.updatedVaccine.administeredUnder} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value, 'administeredUnder')}/>
                    <TextField type="text" defaultValue={this.updatedVaccine.location} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value,'location')}/>
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