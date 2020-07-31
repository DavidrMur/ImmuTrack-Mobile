import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (
        <div>
            <h1 style={{margin: "10px"}}>ImmuTrack</h1>
            <Link to='/signout'>Sign Out</Link>
        </div>
    )
}