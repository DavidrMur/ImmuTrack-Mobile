import React, { Component } from 'react';
import { TextField,} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { vaccineGroups } from 'helper-functions/constantGroups';

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
        this.setState({edit: false});
        this.props.onSubmitEvent(this.updatedVaccine);
    }


    render() {
        

        let patientRecordDisplay = (
            <div>
                <button onClick={() => this.setState({editing: true})} >Edit</button>
                <ul className="flex-container longhand">
                    <li className="flex-item">{this.updatedVaccine.dateAdmin}</li>
                    <li className="flex-item">{this.updatedVaccine.brandName}</li>
                    {this.updatedVaccine.bacteria && this.updatedVaccine.bacteria.map((bacteria) => {
                        return <li className="flex-item">{bacteria}</li>
                    })}
                    <li className="flex-item">{this.updatedVaccine.lot}</li>
                    <li className="flex-item">{this.updatedVaccine.expiryDate}</li>
                    <li className="flex-item">{this.updatedVaccine.administeredUnder}</li>
                    <li className="flex-item">{this.updatedVaccine.location}</li>
                </ul>
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
                        getOptionLabel={(option) => option.vaccineBrand}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                        //placeholder={props.brandName} 
                        className="flex-item" 
                        onChange={(event, newValue) => this.onChangeEvent(newValue.title, 'brandName')}
                        />

                    {/* TODO: make onchange event functional for bactera, currently will overwrite all*/}
                    {this.updatedVaccine.bacteria && this.updatedVaccine.bacteria.map((bacteria) => {
                        return <input type="text" placeholder={bacteria} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value, 'bacteria')}/>
                    })}
                    <input type="text" placeholder={this.updatedVaccine.lot} className="flex-item"/>
                    <input type="text" placeholder={this.updatedVaccine.expiryDate} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value,'expiryDate')}/>
                    <input type="text" placeholder={this.updatedVaccine.administeredUnder} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value, 'administeredUnder')}/>
                    <input type="text" placeholder={this.updatedVaccine.location} className="flex-item" onChange={(event) => this.onChangeEvent(event.target.value,'location')}/>
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