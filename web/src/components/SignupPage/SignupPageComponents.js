import React from 'react';

const SignupOHIP = (props) => {
    return (
        <input type="text" placeholder="OHIP Number" />
    )
};

const SignupSCN = (props) => {
    return (
        <input type="text" placeholder="SCN - Back of Healthcard" />
    )
};

const SignupOwner = (props) => {
    return (
        <div>
            <h1>This Health Card belongs to</h1>
            <button>Me</button>
            <button>Dependant</button>
        </div>
    )
}

const SignupName = (props) => {
    return ( 
        <div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
        </div>
    )
}

const SignupDOB = (props) => {
    return (
        <div>
            <input type="text" placeholder="date" />
            {/* TODO: change this, depends on the UI module we use */}
        </div>
    )
}

const SignupGender = (props) => {
    return (
        <div>
            {/* TODO: change this, depends on the UI module we use */}
            <input type="text" placeholder="If other, please specify" />
        </div>
    )
}

const SignupReview = (props) => {
    return (
        <div>
            Review information
        </div>
    )
}

const SignupCredentials = (props) => {
    return (
        <div>
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
        </div>    
    )
}

const SignupGeneral = (props) => {
    return (
        <div>
            <p>General Information</p>
            <input type="text" placeholder="Postal Code" />
            {/* DROPDOWN - Race / Depends on UI*/}
            {/* DROPDOWN - Level of Education / Depends on UI*/}
        </div>
    )
}

const SignupProfession = (props) => {
    return (
        <input type="text" placeholder="DROPDOWN - profession" />
    )
}

const SignupLicense = (props) => {
    return (
        <input type="text" placeholder="License Number" />
    )
}

const SignupWorkLocation = (props) => {
    return (
        <div>
            <h1>{`${props.workType} Work Location`}</h1>
            <input type="text" placeholder="Organization Name" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Postal Code" />
            <input type="text" placeholder="Clinic Phone Number" />
            {/* TODO: need checkboxes - depends on ui */}
            <input type="text" placeholder="EMR Integration - NEEDS something else too?" />
        </div>
    )
}

const SignupPrimaryWork = (props) => {
    return (
        <SignupWorkLocation workType="Primary"/>
    )
}

const SignupOtherWork = (props) => {
    return (
        <SignupWorkLocation workType="(Optional) Other"/>
    )
}

export {
    SignupOHIP,
    SignupSCN,
    SignupOwner,
    SignupName,
    SignupDOB,
    SignupGender,
    SignupReview,
    SignupCredentials,
    SignupGeneral,
    SignupProfession,
    SignupLicense,
    SignupPrimaryWork,
    SignupOtherWork
};