import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Avatar from 'react-avatar';

function Candidates(props) {
    const[state,setstate]=useState("Not Accepted");
    useEffect(()=>{
        getstate();
    })
    async function getstate(){
        let x=await window.contract2.methods.has_verified(props.id).call();
        if(x===true){
            setstate("Accepted");
        }
    }
    async function accept(){
        await window.contract2.methods.acceptcandidate(props.id).send({from :props.account});
        getstate();
    }
    async function reject(){
        await window.contract2.methods.rejectcandidate(props.id,props.aadhar).send({from :props.account});
    }
    return (
        <div className="busket4">
                
                <table>
                    <tr>
                        <th>Aadhar No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Photo</th>
                        <th>Partyname</th>
                        <th>Status</th>
                        <th>Accept</th>
                        <th>Reject</th>
                    </tr>
                    <tr>
                        <td>{props.aadhar}</td>
                        <td>{props.name}</td>
                        <td>{props.age}</td>
                        <td>{<Avatar facebookId="100008343750912" />}</td>
                        <td>{props.partyname}</td>
                        <td>{state}</td>
                        <td><button className='button1' onClick={accept}>Accept</button></td>
                        <td><button className='button1' onClick={reject}>Reject</button></td>
                    </tr>
                </table>
            
        </div>

    );
}

export default Candidates;