import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Home from './Home.js';
import Result from './Result.js';
import Vote from './Vote.js';
import Nomination from './Nomination.js';
import { useState } from 'react';

function Voterhome(props) {
    const [component,setcomponent]=useState();
    async function change(x){
        setcomponent(x);
    }  
    return (
        <div className="home">
            <Header aadhar={props.aadhar}/>
            <div className="body">
                <Navbar function={change}/>
                
                {component==="nomination"?<Nomination aadhar={props.aadhar} account={props.account}/>:component==="vote"?<Vote aadhar={props.aadhar} account={props.account}/>:component==="result"?<Result aadhar={props.aadhar} account={props.account}/>:<Home/>}
            </div>
           
        </div>

    );
}

export default Voterhome