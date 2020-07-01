import React from 'react';
import { Link } from 'react-router-dom'

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