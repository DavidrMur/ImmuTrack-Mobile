import React from 'react';

const SignupOHIP = (props) => {
    return (
        <input type="text" placeholder="OHIP Number" onChange={(event) => props.fieldFunction(event.target.value)}/>
    )
};

const SignupSCN = (props) => {
    return (
        <input type="text" placeholder="SCN - Back of Healthcard" onChange={(event) => props.fieldFunction(event.target.value)} />
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
            <input type="text" placeholder="date" onChange={(event) => props.fieldFunction(event.target.value)} />
            {/* TODO: change this, depends on the UI module we use */}
        </div>
    )
}

const SignupGender = (props) => {
    return (
        <div>
            {/* TODO: change this, depends on the UI module we use */}
            <input type="text" placeholder="If other, please specify"  onChange={(event) => props.fieldFunction(event.target.value)} />
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
        <input type="text" placeholder="DROPDOWN - profession" onChange={(event) => props.fieldFunction(event.target.value)} />
    )
}

const SignupLicense = (props) => {
    return (
        <input type="text" placeholder="License Number" onChange={(event) => props.fieldFunction(event.target.value)}/>
    )
}

const SignupWorkLocation = (props) => {
    return (
        <div>
            <h1>{`${props.workType} Work Location`}</h1>
            <input type="text" placeholder="Organization Name" onChange={(event) => props.nestedFieldFunction.signupSetWorkName(event.target.value)}/>
            <input type="text" placeholder="Address" onChange={(event) => props.nestedFieldFunction.signupSetWorkAddress(event.target.value)}/>
            <input type="text" placeholder="City" onChange={(event) => props.nestedFieldFunction.signupSetWorkCity(event.target.value)}/>
            <input type="text" placeholder="Postal Code" onChange={(event) => props.nestedFieldFunction.signupSetWorkPostal(event.target.value)} />
            <input type="text" placeholder="Clinic Phone Number" onChange={(event) => props.nestedFieldFunction.signupSetWorkPhoneNumber(event.target.value)}/>
            {/* TODO: need checkboxes - depends on ui */}
            <input type="text" placeholder="EMR Integration - NEEDS something else too?" />
        </div>
    )
}

const SignupPrimaryWork = (props) => {
    return (
        <SignupWorkLocation workType="Primary" nestedFieldFunction={props.nestedFieldFunction}/>
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