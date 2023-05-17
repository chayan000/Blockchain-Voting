import React from 'react';
import Navadmin from './Navadmin';
import Header from './Header';
import Verifynomination from './Verifynomination';
import Adminhome from './Adminhome';
import Result from './Result';
import { useState } from 'react';

function Admin(props){
  const [component,setcomponent]=useState();
  async function change(x){
      setcomponent(x);
  }  
    return(
        <div >
          <Header voterid={props.eid}/>  
          <div className="body">
                <Navadmin function={change}/>
                {component==="verifynomination"?<Verifynomination voterid={props.eid} account={props.account}/>:component==="result"?<Result voterid={props.eid} account={props.account}/>:<Adminhome voterid={props.eid} account={props.account}/>}
            </div>
        </div>
    );
}

export default Admin