import React from 'react';

const SignupOHIP = (props) => {
    return (<div>
        OHIPOHIPOHIPOHIPOHIPOHIPOHIPOHIPOHIPOHIPOHIPOHIPOHIPOHIP
    </div>)
};

const SignupSCN = (props) => {
    return (<div>
        SCN
    </div>)
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

export {
    SignupOHIP,
    SignupSCN,
    SignupOwner,
    SignupName,
    SignupDOB,
    SignupGender
};