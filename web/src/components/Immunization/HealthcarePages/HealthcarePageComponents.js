import React from 'react';
import { Link } from 'react-router-dom';
import './HealthcarePageComponents.css';

export const PatientRecordTile = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.DOB}</div>
            <div>{props.OHIP}</div>
            <Link to='/view-patient' onClick={props.redirectQuery}>View Record</Link>
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
    console.log(props);
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