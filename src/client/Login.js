import React from 'react';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import Voterhome from './Voterhome';

function Login(props) {
    const [inputaadhar,setinputaadhar]=useState();
    const [password,setpassword]=useState();
    const [aadhar,setaadhar]=useState();
    
     async function login(e){
        try{
            e.preventDefault();
            await window.contract.methods.login(inputaadhar,password).send({from :props.account});
            Getnumber();
           }
           catch{
             alert("Transaction failed");
           }
     }
     async function Getnumber(){
        try{
            const aadhar=await window.contract.methods.getloginnumber().call();
            if(aadhar===0){
                alert("incorrect username or password");
            }
            setaadhar(aadhar);
        }
        catch{
            alert("Transaction Failed");
        }
    }
    return (
        <>
        {aadhar>0?<Voterhome aadhar={aadhar} account={props.account}/>:
        <div className="busket">
            <h2>Login</h2>
                <label>
                    <input onChange={(e)=>setinputaadhar(e.target.value)} placeholder="Voter No" value={inputaadhar} type="number" id="inputaadhar" />
                </label>
                <br />
                <label>
                <input onChange={(e)=>setpassword(e.target.value)} placeholder="Password" value={password} type="password" id="password" />
                </label>
                <br />
                <button className='button1' onClick={login} >Log in</button>
                <Link to="/voter">
                    <button className='button1'>Cancel</button>
                </Link>
            
        </div>
}
        </>
    );
}

export default Login;