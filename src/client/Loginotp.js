import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import firebase from "./firebase";
import Voterhome from "./Voterhome";
function Loginotp(props) {
    const [otp, setotp] = useState();
    const [flag, setflag] = useState();

    useEffect(() => {
        onSignInSubmit();
    }, [])
    async function configurecaptcha() {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log("captcha resolved")
            },
            defaultCountry: "IN"
        });
    }

    async function onSignInSubmit() {
        configurecaptcha();
        const mobilenumber = await window.contract.methods.getmobilenumber(props.voterid).call();
        console.log(mobilenumber)
        const phoneNumber = "+91" + mobilenumber;
        const appVerifier = window.recaptchaVerifier;
        console.log(phoneNumber)
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                alert("an otp has been send to the registered mobile number")
            }).catch((error) => {
                alert("problem in sending OTP")
            });
    }

    async function verifyotp() {
        const code = otp;
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
            alert("OTP verification successful")
            setflag(1);
        }).catch((error) => {
            alert("OTP  mismatched")
            setflag(0);
        });
    }

    return (
        <>
            {flag > 0 ? <Voterhome voterid={props.voterid} account={props.account} /> :
                <div className="busket" >
                    <div id="sign-in-button"></div>
                    <h2>Verify OTP</h2>
                    <label>
                        <input onChange={(e) => setotp(e.target.value)} placeholder="enter OTP" value={otp} type="text" id="otp" />
                    </label>
                    <br />
                    <label>
                        <button onClick={verifyotp} className='button4'>verify</button>
                        <Link to="/voter">
                            <button className='button4'>Cancel</button>
                        </Link>
                    </label>
                </div>
            }
        </>
    );
}

export default Loginotp;