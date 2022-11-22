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
                        "internalType": "string",
                        "name": "_eid",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_password",
                        "type": "string"
                    }
                ],
                "name": "addemployee",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_eid",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_password",
                        "type": "string"
                    }
                ],
                "name": "employeelogin",
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
                "name": "getemployeeloginnumber",
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
         const Address="0x6AEc73ef9Bd1808F5428b70AC38c0a034DaCbAAC" ;
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
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "acceptcandidate",
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
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_aadhar",
                        "type": "uint256"
                    }
                ],
                "name": "rejectcandidate",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "reset",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "setpublishresult",
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
                        "name": "id",
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
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "candidates",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "nominationid",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "aadhar",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "partyname",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "age",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "votes",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasverified",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasnominated",
                        "type": "bool"
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
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "has_verified",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
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
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "idaadhar",
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
                "name": "nominationcount",
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
                "name": "publishresult",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "topic",
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
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "votecount",
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
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "voters",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "aadhar",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasvoted",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "hasnominated",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
        const Address="0xfA7b4484Ccb37149B86fE031F318fc95Cbb3A784" ;
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
            <Route exact path="/voter/login" element={<Login account={account}/>} />
            <Route exact path="/adminlogin" element={<Adminlogin account={account} />} />
            <Route exact path="/voter/signup" element={<Signup account={account} />} />
          </Routes>
        
      </div>
      
    </div>
  );
}

export default App;
