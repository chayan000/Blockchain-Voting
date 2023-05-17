import React from 'react'
import { Link } from 'react-router-dom'
function loginsignup() {
    return (
        <div className="container">
            <div className="leftside">
                <h1 style={{ fontSize: "55pt", color: "blueviolet", marginLeft: "300px", marginBottom: "0px", marginTop: "0px" }} className='name'><img src="./images/image-removebg-preview.png" alt="Logo" width={300} /></h1>
                <div className="body">
                    <img classname='img1' src="./images/mobile-voting-3390049-2818138.png" alt='.' width={400} />
                    <h2 style={{ color: "blue", fontFamily: "serif", fontSize: "30pt" }}>Revolutionizing Democracy: Secure, Transparent, and Decentralized Voting with the Block Vote App</h2>
                </div>
                <p style={{ color: "chocolate", fontSize: "15pt" }}>With its cutting-edge technology, Block Vote aims to empower individuals, strengthen democracy, and create a more inclusive and participatory society. It represents a significant step forward in modernizing the voting system, ensuring fairness, and restoring trust in the democratic process</p>
            </div>
            <div className="rightside">
                <h3 style={{color:"purple"}}>user login/signup</h3>
                <h4>"Secure,Transparent,Your Voice, Amplified!"</h4>
                <Link to="/voter/login">
                    <button className='button1'>Log-in</button>
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