import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect} from 'react';
import Admin from './Admin.js';
function Login(props) {
    const [inputeid,setinputeid]=useState();
    const [password,setpassword]=useState();
    const [eid,seteid]=useState();
    const str="0";
    
    async function login(e){
        try{
            e.preventDefault();
            await window.contract.methods.employeelogin(inputeid,password).send({from :props.account});
            getemployeeloginnumber();
           }
           catch{
             alert("Transaction failed");
           }
     }
     async function getemployeeloginnumber(){
        try{
            let eid=await window.contract.methods.getemployeeloginnumber().call();
            if(eid.localeCompare(str)===0){
                alert("incorrect username or password");
            }
            else{
                seteid(eid);
            }
        }
        catch{
            alert("Transaction Failed");
        }
    }
    return (
        <>
        {eid?<Admin eid={eid} account={props.account}/>:
        <div className="busket">
            <h2>Admin Login</h2>
            <label>
                    <input onChange={(e)=>setinputeid(e.target.value)} placeholder="Employee Id" value={inputeid} type="text" id="inputeid" />
                </label>
                <br />
                <label>
                <input onChange={(e)=>setpassword(e.target.value)} placeholder="Password" value={password} type="password" id="password" />
                </label>
                <br />
                <button className='button1' onClick={login} >Log in</button>
                <Link to="/">
                    <button className='button1'>Cancel</button>
                </Link>
            
        </div>
}
        </>
    );
}

export default Login;