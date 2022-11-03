import React from 'react';
import Avatar from 'react-avatar';
import Navadmin from './Navadmin';
import Header from './Header';
import { Link } from 'react-router-dom';
function verify(){
    return(
        <div >
          <Header/>  
          <div className="body">
            <Navadmin/>
            <div className="busket3">
            <div className="candidates">
                <h3>1</h3>
                <h3>Abc Def</h3>
                <Avatar facebookId="100008343750912" />
                <button className='button1'>Details</button>
                <button className='button1'>Accept</button>
                <button className='button1'>Reject</button>
            </div>
            <div className="candidates">
                <h3>2</h3>
                <h3>Pqr Stu</h3>
                <Avatar facebookId="100008343750912" />
                <button className='button1'>Details</button>
                <button className='button1'>Accept</button>
                <button className='button1'>Reject</button>
            </div>
            <div className="candidates">
                <h3>3</h3>
                <h3>Ghi Jkl</h3>
                <Avatar facebookId="100008343750912" />
                <button className='button1'>Details</button>
                <button className='button1'>Accept</button>
                <button className='button1'>Reject</button>
            </div>
            <div className="candidates">
                <h3>4</h3>
                <h3>Mno Pqr</h3>
                <Avatar facebookId="100008343750912" />
                <button className='button1'>Details</button>
                <button className='button1'>Accept</button>
                <button className='button1'>Reject</button>
            </div>
            <div className="candidates">
                <h3>5</h3>
                <h3>Xyz Abc</h3>
                <Avatar facebookId="100008343750912" />
                <button className='button1'>Details</button>
                <button className='button1'>Accept</button>
                <button className='button1'>Reject</button>
            </div>
            </div>
          </div>
        </div>
    );
}

export default verify