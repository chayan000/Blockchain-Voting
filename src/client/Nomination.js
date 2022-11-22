import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function Nomination(props) {
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [partyname, setpartyname] = useState();
  const [flag, setflag] = useState(0);
  const[flag1,setflag1]=useState(0);
  const[topic,settopic]=useState("");
  useEffect(() => {
    hastopic();
    hasstarted();
  }, [])
  async function submit(e) {
    try {
      e.preventDefault();
      await window.contract2.methods.add_candidate(props.aadhar, name, partyname, age).send({ from: props.account });
      alert("Nomination filed successfully")
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
  async function hastopic() {
    let x = await window.contract2.methods.topic().call();
    if (x === "") {
      setflag1(0) //not started
    }
    else {
      setflag1(1)  //started
      settopic(x);
    }
  }

    return (
      <div >
        <div className="body">
          {flag1?(flag ? <h1 style={{color: "RED"}}>Voting is On. Nominations are not accepted...</h1> :
            <div className="busket2">
              <h2 style={{color:"BLUE"}}>{topic}</h2>
              <div className="side">
                <div className="new">
                  <h2 style={{ color: "Red" }}>Submit Nomination</h2>
                  <p>Voter No: {props.aadhar}</p>
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
                  <h3 >***Nominations can be submitted before vote starts</h3>
                  <p>Your submitted details will be verified by the Admin before Voting Starts</p>
                </div>
              </div>
            </div>
          ):<h1 style={{color: "RED"}}>Nomination Phase is not active...</h1>}
        </div>
      </div>
    );
  }

  export default Nomination;