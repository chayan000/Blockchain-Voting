import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import firebase from './firebase';

function Signup(props) {
    const [voterid, setvoterid] = useState();
    const [mobileno, setmobileno] = useState();
    const [mobilenumber,setmobilenumber] = useState();
    const [otp, setotp] = useState();
    const [password1, setpassword1] = useState();
    const [password2, setpassword2] = useState();
    const navigate = useNavigate();

    async function configurecaptcha() {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log("Captcha solved")
            },
            defaultCountry: "IN"
        });
    }

    async function onSignInSubmit() {
        configurecaptcha();
        const phoneNumber = "+91" + mobileno;
        const appVerifier = window.recaptchaVerifier;
        console.log(phoneNumber)
        let phoneno = /^\d{10}$/;
        if (mobileno.match(phoneno)) {
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                alert("an otp has been send to the entered mobile number")
            }).catch((error) => {
                alert("problem in sending OTP")
            });
        }
        else {
            alert("invalid mobile number");
        }
        
    }

    async function verifyotp() {
        const code = otp;
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
            alert("OTP verification successful")
            setmobilenumber(mobileno);
        }).catch((error) => {
            alert("OTP  mismatched")
        });
    }
    async function signup(e) {
        try {
            e.preventDefault();
            await window.contract.methods.signup(voterid,mobilenumber, password1, password2).send({ from: props.account });
            Getnumber();
        }
        catch {
            alert("Transaction failed");
        }
    }

    async function Getnumber() {
        try {
            const voterid = await window.contract.methods.getsignupnumber().call();
            if (voterid > 0) {
                alert("Signup Successful!!! \n go to Login")
                navigate("/voter/login");
            }
            else {
                alert("Invalid credentials");
            }
        }
        catch {
            alert("Transaction Failed")
        }
    }


    return (
        <div className="busket">
            <h2>sign up</h2>
            <div id="sign-in-button"></div>
            <label>
                <input onChange={(e) => setvoterid(e.target.value)} placeholder="Voterid" value={voterid} type="text" id="voterid" />
            </label>
            <br />
            <label >
                <input onChange={(e) => setmobileno(e.target.value)} placeholder="10 digit Mobile No" value={mobileno} type="text" id="mobilenumber" />
            </label>
            <br />
            <label>
                <button onClick={onSignInSubmit} className='button4'>send OTP</button>
            </label>
            <br />
            <label>
                <input onChange={(e) => setotp(e.target.value)} placeholder="enter OTP" value={otp} type="text" id="otp" />
            </label>
            <br />
            <label>
                <button onClick={verifyotp} className='button4'>verify</button>
            </label>
            <br />
            <label>
                <input onChange={(e) => setpassword1(e.target.value)} placeholder="Create Password" value={password1} type="password" id="password1" />
            </label>
            <br />
            <label>
                <input onChange={(e) => setpassword2(e.target.value)} placeholder="Confirm Password" value={password2} type="password" id="password2" />
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