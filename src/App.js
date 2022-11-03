import Loginsignup from './client/Loginsignup';
import Login from './client/Login';
import Signup from './client/Signup';
import Voter from './client/Voter';
import Admin from './client/Admin';
import Verify from './client/Verify';
import Adminlogin from './client/Adminlogin';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {
    const [account,setaccount]=useState();
    useEffect(()=>{
        metamask();
        smartcontract();
        smartcontract2();
     },[]);
     const metamask = async () => {
         if (typeof window.ethereum !== 'undefined') {
           const { ethereum } = window;
           const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
           setaccount(accounts[0]);
         }
         else{
           alert("install metamask first")
         }
     };
 
     async function smartcontract(){
         const ABI = [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_aadhar",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_password",
                        "type": "string"
                    }
                ],
                "name": "login",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_aadhar",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_password1",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_password2",
                        "type": "string"
                    }
                ],
                "name": "signup",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getloginnumber",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getsignupnumber",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
         const Address="0x0E0Ada5a99F24730c0F6Ea6cE3ae2C8C6FDdEa0C" ;
         window.web3=await new Web3(window.ethereum);
         window.contract= await new window.web3.eth.Contract(ABI,Address);
         console.log("connected");
     }

     async function smartcontract2(){
        const ABI =[
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_aadhar",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_partyname",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_age",
                        "type": "uint256"
                    }
                ],
                "name": "add_candidate",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_topic",
                        "type": "string"
                    }
                ],
                "name": "create_poll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "end_poll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "start_poll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_aadhar",
                        "type": "uint256"
                    }
                ],
                "name": "verify_candidate",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_candidateaadhar",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_voteraadhar",
                        "type": "uint256"
                    }
                ],
                "name": "vote",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "candidatecount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "gettopic",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "has_ended",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "has_started",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_aadhar",
                        "type": "uint256"
                    }
                ],
                "name": "has_votted",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
        const Address="0x4e4EE5C7ab9ecec565C83C75Bf36c3C13E01Eda7" ;
        window.web3=await new Web3(window.ethereum);
        window.contract2= await new window.web3.eth.Contract(ABI,Address);
        console.log("connected2");
    }

  return (
    <div className="App">
       
      <div className="container">
          <Routes>
          <Route exact path="/" element={<Loginsignup />} />
            <Route exact path="/voter" element={<Voter />} />
            <Route exact path="/adminlogin/admin" element={<Admin />} />
            <Route exact path="/adminlogin/admin/verify" element={<Verify />} />
            <Route exact path="/voter/login" element={<Login account={account}/>} />
            <Route exact path="/adminlogin" element={<Adminlogin />} />
            <Route exact path="/voter/signup" element={<Signup account={account} />} />
          </Routes>
        
      </div>
      
    </div>
  );
}

export default App;
