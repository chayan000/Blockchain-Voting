import React from 'react'
import { Link } from 'react-router-dom'
function Loginsignup() {
    return (
        <div className="container">
            <div className="leftside">
                <h1 className='name'>E-voting</h1>
                <div className="body">
                <img classname='img1' src="./images/mobile-voting-3390049-2818138.png" alt='.' width={400} />
                <h2>Blockchain Based Trusted and secure Voting system</h2>
                </div>
            </div>
            <div className="rightside">
                <h1>Block Vote</h1>
                <h3>Let your voice be heard</h3>
                <Link to="/voter">
                    <button className='button1'>User</button>
                </Link>
                <Link to="/adminlogin">
                    <button className='button1'>Admin</button>
                </Link>


            </div>
        </div>
    );
}

export default Loginsignup