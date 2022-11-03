import React from 'react';
import { Link } from 'react-router-dom';
function login() {
    return (
        <div className="busket">
            <h2>Admin Login</h2>
                <label>
                    Admin Id:
                    <input type="text" name="adminid"/>
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password"/>
                </label>
                <br />
                <Link to="/adminlogin/admin">
                    <button className='button1'>Login</button>
                </Link>
                <Link to="/">
                    <button className='button1'>Cancel</button>
                </Link>
            
        </div>
    );
}

export default login;