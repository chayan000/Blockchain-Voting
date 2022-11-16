import React from 'react';
import Avatar from 'react-avatar';

function Candidates(props) {
    async function vote(){
        await window.contract2.methods.vote(props.id,props.uaadhar).send({from :props.account});
        alert("Successful Voting!!!")
    }
    return (
        <div className="busket4">
            <div className="busket1">
                <h3 className='admintext'>{props.topic}</h3>
                <p>Name: {props.name}</p>
                <Avatar facebookId="100008343750912" />
                <p>age: {props.age}</p>
                <p>partyname: {props.partyname}</p>
                <button className='button1' onClick={vote}>Vote</button>
            </div>
        </div>

    );
}

export default Candidates;