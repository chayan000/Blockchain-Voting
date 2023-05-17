import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loginotp from './Loginotp';

function Login(props) {
    const [inputvoterid, setinputvoterid] = useState();
    const [password, setpassword] = useState();
    const [voterid, setvoterid] = useState();
    
    async function login(e) {
        try {
            e.preventDefault();
            await window.contract.methods.login(inputvoterid, password).send({ from: props.account });
            Getnumber();
        }
        catch {
            alert("Transaction failed");
        }
    }
    async function Getnumber() {
        try {
            const voterid = await window.contract.methods.getloginnumber().call();
            if (voterid === 0) {
                alert("incorrect username or password");
            }
            setvoterid(voterid);
        }
        catch {
            alert("Transaction Failed");
        }
    }
    
    
    return (
        <>
            {voterid > 0 ? <Loginotp voterid={voterid} account={props.account} /> :
                <div className="busket">
                    <h2>Login</h2>
                    <label>
                        <input onChange={(e) => setinputvoterid(e.target.value)} placeholder="Voter No" value={inputvoterid} type="number" id="inputvoterid" />
                    </label>
                    <br />
                    <label>
                        <input onChange={(e) => setpassword(e.target.value)} placeholder="Password" value={password} type="password" id="password" />
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