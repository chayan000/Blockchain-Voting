import React from 'react';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Signup(props){
    
    const [aadhar,setaadhar]=useState();
    const [password1,setpassword1]=useState();
    const [password2,setpassword2]=useState();
    const navigate=useNavigate();
    
    async function signup(e){
        try{
            e.preventDefault();
            await window.contract.methods.signup(aadhar,password1,password2).send({from :props.account});
            Getnumber();
           }
           catch{
             alert("Transaction failed");
           }
    }
    async function Getnumber(){
        try{
            const aadhar=await window.contract.methods.getsignupnumber().call();
            if(aadhar>0){
                alert("Signup Successful!!! \n go to Login")
                navigate("/voter/login");
            }
            else{
            alert("Invalid credentials");
            }
        }
        catch{
            alert("Transaction Failed")
        }
    }

    return(
        <div className="busket">
            <p>sign up</p>
                <label>
                    <input onChange={(e)=>setaadhar(e.target.value)} placeholder="Voter No" value={aadhar} type="number" id="aadhar" />
                </label>
                <br />
                <label>
                    <input onChange={(e)=>setpassword1(e.target.value)} placeholder="Create Password" value={password1} type="password" id="password1" />
                </label>
                <br />
                <label>
                    <input onChange={(e)=>setpassword2(e.target.value)} placeholder="Confirm Password" value={password2} type="password" id="password2" />
                </label>
                <br />
                <button className='button1' onClick={signup} >sign up</button>
                <Link to="/voter">
                    <button className='button1'>Cancel</button>
                </Link>
            
        </div>
    );
}

export default Signup;