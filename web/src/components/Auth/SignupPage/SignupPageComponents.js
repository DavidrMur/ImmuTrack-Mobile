import React from 'react';

const SignupOHIP = (props) => {
    return (
        <div style={{margin: "10px"}} >
        <p >Please enter your OHIP Number</p>
        <input type="text" placeholder="OHIP Number" onChange={(event) => props.fieldFunction(event.target.value)}/>
        </div>
    )
};

const SignupSCN = (props) => {
    return (
        <div style={{margin: "10px"}}>
        <p >Please enter your SCN Number</p>
        <input type="text" placeholder="SCN - Back of Healthcard" onChange={(event) => props.fieldFunction(event.target.value)} />
        </div>
    )
};

const SignupOwner = (props) => {
    return (
        <div style={{margin: "10px"}}>
            <p >This Health Card belongs to</p>
            <button style={{margin: "10px"}} onClick={() => props.fieldFunction('me')}>Me</button>
            <button onClick={() => props.fieldFunction('dependant')}>Dependant</button>
        </div>
    )
}

const SignupName = (props) => {
    return ( 
        <div style={{margin: "10px"}} >
            <p >Please enter your first and last name</p>
            <input style={{margin: "10px"}} type="text" placeholder="First Name" onChange={(event) => props.nestedFieldFunction.signupSetFirstName(event.target.value)}/>
            <input type="text" placeholder="Last Name" onChange={(event) => props.nestedFieldFunction.signupSetLastName(event.target.value)}/>
        </div>
    )
}

const SignupDOB = (props) => {
    return (
        <div style={{margin: "10px"}}>
            <p >Please enter your date of birth</p>
            <input type="text" placeholder="date" onChange={(event) => props.fieldFunction(event.target.value)} />
            {/* TODO: change this, depends on the UI module we use */}
        </div>
    )
}

const SignupGender = (props) => {
    return (
        <div style={{margin: "10px"}}>
            <p  >Please enter your gender</p>
            {/* TODO: change this, depends on the UI module we use */}
            <input type="text" placeholder="If other, please specify"  onChange={(event) => props.fieldFunction(event.target.value)} />
        </div>
    )
}

const SignupRace = (props) => {
    return (
        <div style={{margin: "10px"}}>
            <p  >Please enter your Race</p>
            {/* TODO: change this, depends on the UI module we use */}
            <input type="text" placeholder="If other, please specify"  onChange={(event) => props.fieldFunction(event.target.value)} />
        </div>
    )
}

const SignupEduLevel = (props) => {
    return (
        <div style={{margin: "10px"}}>
            <p  >Please enter your education level</p>
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
        <div style={{margin: "10px"}} >
            <p >Please enter your desired credentials</p>
            <input style={{margin: "10px"}} type="text" placeholder="username" onChange={(event) => props.nestedFieldFunction.signupSetUsername(event.target.value)}/>
            <input style={{margin: "10px"}} type="password" placeholder="password" onChange={(event) => props.nestedFieldFunction.signupSetPassword(event.target.value)}/>
            <input style={{margin: "10px"}} type="email" placeholder="email" onChange={(event) => props.nestedFieldFunction.signupSetEmail(event.target.value)}/>
        </div>    
    )
}

const SignupGeneral = (props) => {
    return (
        <div style={{margin: "10px"}}>
            <p >General Information</p>
            <input type="text" placeholder="Postal Code" onChange={(event) => props.fieldFunction(event.target.value)}/>
            {/* DROPDOWN - Race / Depends on UI*/}
            {/* DROPDOWN - Level of Education / Depends on UI*/}
        </div>
    )
}

const SignupProfession = (props) => {
    return (
        <div style={{margin: "10px"}}>
        <p>Please enter your profession</p>
        <input type="text" placeholder="DROPDOWN - profession" onChange={(event) => props.fieldFunction(event.target.value)} />
        </div>
  )
}

const SignupLicense = (props) => {
    return (
        <div style={{margin: "10px"}}>
        <p>Please enter your profession</p>
        <input type="text" placeholder="License Number" onChange={(event) => props.fieldFunction(event.target.value)}/>
        </div>
   )
}

const SignupWorkLocation = (props) => {
    return (
        <div style={{margin: "10px", width: "200px"}}>
            <p>{`${props.workType} Work Location`}</p>
            <input style={{margin: "10px"}} type="text" placeholder="Organization Name" onChange={(event) => props.nestedFieldFunction.signupSetWorkName(event.target.value)}/>
            <input style={{margin: "10px"}} type="text" placeholder="Address" onChange={(event) => props.nestedFieldFunction.signupSetWorkAddress(event.target.value)}/>
            <input style={{margin: "10px"}} type="text" placeholder="City" onChange={(event) => props.nestedFieldFunction.signupSetWorkCity(event.target.value)}/>
            <input style={{margin: "10px"}} type="text" placeholder="Postal Code" onChange={(event) => props.nestedFieldFunction.signupSetWorkPostal(event.target.value)} />
            <input style={{margin: "10px"}} type="text" placeholder="Clinic Phone Number" onChange={(event) => props.nestedFieldFunction.signupSetWorkPhoneNumber(event.target.value)}/>
            {/* TODO: need checkboxes - depends on ui */}
            <input style={{margin: "10px"}} type="text" placeholder="EMR Integration - NEEDS something else too?" />
        </div>
    )
}

const SignupPrimaryWork = (props) => {
    return (
        <div style={{margin: "10px"}}>
        
        <SignupWorkLocation workType="Primary" nestedFieldFunction={props.nestedFieldFunction}/>
        </div>
    )
}

const SignupOtherWork = (props) => {
    return (
        <div style={{margin: "10px"}}>
        <p>Please enter your profession</p>
        <SignupWorkLocation workType="(Optional) Other"/>
        </div>
    )
}

export {
    SignupOHIP,
    SignupSCN,
    SignupOwner,
    SignupName,
    SignupDOB,
    SignupGender,
    SignupRace,
    SignupEduLevel,
    SignupReview,
    SignupCredentials,
    SignupGeneral,
    SignupProfession,
    SignupLicense,
    SignupPrimaryWork,
    SignupOtherWork
};