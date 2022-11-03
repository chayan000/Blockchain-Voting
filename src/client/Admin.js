import React from 'react';
import Navadmin from './Navadmin';
import Header from './Header';
import { Link } from 'react-router-dom';
function admin(){
    return(
        <div >
          <Header/>  
          <div className="body">
            <Navadmin/>
          </div>
        </div>
    );
}

export default admin