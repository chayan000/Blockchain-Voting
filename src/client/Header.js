import React from 'react';

function Navbar(props) {
    return (
        <div>
            <div className="head">
                <div className="navbar-start">
                <img src="/images/image-removebg-preview.png" alt="Logo" height={80} width={150} />
                    
                </div>
                <br />
                <br />
                <br />
                <div className="headerend">
                    <img src="/images/usericon.png" height={60} width={90} alt="user" />
                    <h4 className='end'>{props.voterid}</h4>
                </div>
            </div>
        </div>
    );
}
export default Navbar