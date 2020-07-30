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