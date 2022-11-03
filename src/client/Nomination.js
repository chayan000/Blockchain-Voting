import React from 'react';
import { useState } from 'react';
function Nomination(props) {
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [partyname, setpartyname] = useState();
  async function submit(e) {
    try{
      e.preventDefault();
      await window.contract2.methods.add_candidate(props.aadhar,name,partyname,age).send({from :props.account});
     }
     catch{
       alert("Transaction failed");
     }
  }
  return (
    <div >
      <div className="body">
        <div className="busket2">
          <h2>Submit Nomination</h2>
            <p>Aadhar No: {props.aadhar}</p>
          <label>
            <input onChange={(e) => setname(e.target.value)} placeholder="Name" value={name} type="text" id="name" />
          </label>
          <br />
          <label>
            <input onChange={(e) => setage(e.target.value)} placeholder="Age" value={age} type="number" id="age" />
          </label>
          <br />
          <label>
            <input onChange={(e) => setpartyname(e.target.value)} placeholder="Party Name" value={partyname} type="text" id="partyname" />
          </label>
          <br />
          <button className='button1' onClick={submit} >Submit</button>
        </div>

      </div>
    </div>
  );
}

export default Nomination;