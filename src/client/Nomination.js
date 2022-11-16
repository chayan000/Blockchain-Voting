import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function Nomination(props) {
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [partyname, setpartyname] = useState();
  const [flag, setflag] = useState(0);
  useEffect(() => {
    hasstarted();
  }, [])
  async function submit(e) {
    try {
      e.preventDefault();
      await window.contract2.methods.add_candidate(props.aadhar, name, partyname, age).send({ from: props.account });
    }
    catch {
      alert("Transaction failed");
    }
  }
  async function hasstarted() {
    let x = await window.contract2.methods.has_started().call();
    if (x === "0") {
      setflag(0) //not started
    }
    if (x === "1") {
      setflag(1)  //started
    }
  }
    return (
      <div >
        <div className="body">
          {flag ? <h1 style={{color: "RED"}}>Voting is On. Nominations are not accepted...</h1> :
            <div className="busket2">
              <div className="side">
                <div className="new">
                  <h2 style={{ color: "Red" }}>Submit Nomination</h2>
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
                <div className="v1"></div>
                <div className="new">
                  <h3 style={{ color: "Red" }}>***Nominations can be submitted before vote starts</h3>
                  <p>Your submitted details will be verified by the Admin before Voting Starts</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }

  export default Nomination;