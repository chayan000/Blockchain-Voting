import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    const [account,setaccount]=useState()
  useEffect(()=>{
    loadAccounts();
  },[])

  async function loadAccounts(){
    if (typeof window.ethereum !== 'undefined') {
      const { ethereum } = window;
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setaccount(accounts[0]);
    } 
    else {
      alert('Please install MetaMask');
    }
  }
    return (
        <div>
            <div className="nav">
                <div className="navelements" >
                    <ul>
                        <li className="nav-item">
                            <Link className="nav-link" to="/adminlogin/admin">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/adminlogin/admin/Verify">Verify Nominations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/adminlogin/admin/phase">Poll Phase</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/adminlogin/admin/publish">Publish Result</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar