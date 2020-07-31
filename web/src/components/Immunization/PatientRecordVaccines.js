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
        console.log(value);
        let temp = {...this.updatedVaccine}
        temp[type] = type === 'bacteria' ? [value] : value;
        this.updatedVaccine = temp;
        console.log(this.updatedVaccine);
    }

    onSubmitEvent = () => {
        this.setState({editing: false});
        this.props.onSubmitEvent(this.updatedVaccine);
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
                <BacteriaList />
            </div>
        );

        let patientRecordEdit = (
            <div>
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
                    <BacteriaList vaccine={this.updatedVaccine.brandName} />
                    <input type="text" defaultValue={this.updatedVaccine.lot} className="flex-item"/>
                    <input type="text" defaultValue={this.updatedVaccine.expiryDate} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value,'expiryDate')}/>
                    <input type="text" defaultValue={this.updatedVaccine.administeredUnder} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value, 'administeredUnder')}/>
                    <input type="text" defaultValue={this.updatedVaccine.location} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value,'location')}/>
                </ul>
        </div>
        )

        return (
            <div>
                {this.props.adding || this.state.editing ? 
                    patientRecordEdit
                :
                    patientRecordDisplay
                }
            </div>
        )
    }
}

export default PatientRecordVaccines