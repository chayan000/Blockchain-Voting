import React from 'react';
import Avatar from 'react-avatar';

function Candidates(props) {
    return (
        <div className="busket4">
            <div className="busket1">
                <p className='admintext'>Lok sava election 2024   phase 1</p>
                <p>Name: {props.name}</p>
                <Avatar facebookId="100008343750912" />
                <p>age: {props.age}</p>
                <p>partyname: {props.partyname}</p>
                <button className='button1'>Vote</button>
            </div>
        </div>

    );
}

export default Candidates;