import React from 'react'
import { Link } from 'react-router-dom'
function loginsignup() {
    return (
        <div className="container">
            <div className="leftside">
                <h1 className='name'>E-voting</h1>
                <img classname='img1' src="./images/mobile-voting-3390049-2818138.png" alt='.' width={400} />
            </div>
            <div className="rightside">
                <h1>Block Vote</h1>
                <p>user login/signup</p>
                <h3>Let your voice be heard</h3>
                <Link to="/voter/login">
                    <button className='button1'>Login</button>
                </Link>
                <Link to="/voter/signup">
                    <button className='button1'>Sign Up</button>
                </Link>
                <Link to="/">
                    <button className='button1'>Back</button>
                </Link>


            </div>
        </div>
    );
}

export default loginsignup