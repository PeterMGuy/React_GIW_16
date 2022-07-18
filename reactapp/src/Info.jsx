// Used for Hard

import React from 'react';


const Info = (props) => {
    return (
        <div className='Info'>
            <p>Name: {props.name}</p>
            <p>Phone Number:{props.phoneNumber} </p>
            <p>Birthdate:{props.birthDate} </p>
        </div>
    );
}

export default Info; 