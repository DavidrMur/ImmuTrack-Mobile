import React from 'react';
import { Link } from 'react-router-dom';
import { TextField,} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { vaccineGroups } from 'helper-functions/constantGroups';
import './HealthcarePageComponents.css';

export const PatientRecordTile = (props) => {
    return (
        <div>
            <div>{props.firstName}</div>
            <div>{props.lastName}</div>
            <div>{props.DOB}</div>
            <div>{props.OHIP}</div>
            <div onClick={() => props.redirectQuery(props.OHIP)}>
            <Link to='/view-patient'>View Record</Link>
            </div>
        </div>
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

export const PatientRecordVaccines = (props) => {
    return (
        <div>
            <ul className="flex-container longhand">
                <li className="flex-item">{props.dateAdmin}</li>
                <li className="flex-item">{props.brandName}</li>
                {props.bacteria && props.bacteria.map((bacteria) => {
                    return <li className="flex-item">{bacteria}</li>
                })}
                <li className="flex-item">{props.lot}</li>
                <li className="flex-item">{props.expiryDate}</li>
                <li className="flex-item">{props.administeredUnder}</li>
                <li className="flex-item">{props.location}</li>
            </ul>
        </div>
    )
}

export const PatientRecordVaccinesEdit = (props) => {
    
    let maxDate = new Date().toISOString().slice(0, 10)
    
    return (
        <div>
            <ul className="flex-container longhand">
                <TextField
                    type="date"
                    placeholder={props.dateAdmin}
                    InputProps={{
                        inputProps: {
                            max: maxDate
                        }
                    }} 
                    className="flex-item" 
                    onChange={(event) => props.onChangeEvent(event.target.value, 'dateAdmin')} 
                    />

                <Autocomplete 
                    options={vaccineGroups}
                    getOptionLabel={(option) => option.vaccineBrand}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    //placeholder={props.brandName} 
                    className="flex-item" 
                    onChange={(event, newValue) => props.onChangeEvent(newValue.title, 'brandName')}
                    />

                {/* TODO: make onchange event functional for bactera, currently will overwrite all*/}
                {props.bacteria && props.bacteria.map((bacteria) => {
                    return <input type="text" placeholder={bacteria} className="flex-item" onChange={(event) => props.onChangeEvent(event.target.value, 'bacteria')}/>
                })}
                <input type="text" placeholder={props.lot} className="flex-item"/>
                <input type="text" placeholder={props.expiryDate} className="flex-item" onChange={(event) => props.onChangeEvent(event.target.value,'expiryDate')}/>
                <input type="text" placeholder={props.administeredUnder} className="flex-item" onChange={(event) => props.onChangeEvent(event.target.value, 'administeredUnder')}/>
                <input type="text" placeholder={props.location} className="flex-item" onChange={(event) => props.onChangeEvent(event.target.value,'location')}/>
            </ul>
        </div>
    )
}

