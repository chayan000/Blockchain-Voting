import React from 'react';
import Navadmin from './Navadmin';
import Header from './Header';

function admin(props){
    return(
        <div >
          <Header aadhar={props.eid}/>  
          <div className="body">
            <Navadmin/>
          </div>
        </div>
    );
}

export default admin