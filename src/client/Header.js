import React from 'react';

function Navbar(props) {
    return (
        <div>
            <div className="head">
                <div className="navbar-start">
                    <img src="/images/download.png" height={60} width={90} alt="hu hu" />
                    <h1 className="headername ">Block Vote</h1>
                </div>
                <br />
                <br />
                <br />
                <div className="headerend">
                    <img src="/images/usericon.png" height={60} width={90} alt="hu hu" />
                    <h4 className='end'>{props.aadhar}</h4>
                </div>
            </div>
        </div>
    );
}
export default Navbar