import React, { useState, useEffect } from 'react';
import Candidates from './Candidates';
function Vote(props) {
  const [data, setdata] = useState([]);
  const [topic, settopic] = useState();
  const [flag, setflag] = useState(0);
  useEffect(() => {
    async function getnominees() {
      let array = []
      const nominationcount = await window.contract2.methods.nominationcount().call();
      for (var i = 0; i < nominationcount; i++) {
        let x = await window.contract2.methods.candidates(i).call();
        const obj = {
          "nominationid": x.nominationid,
          "voterid": x.voterid,
          "name": x.name,
          "age": x.age,
          "partyname": x.partyname,
          "hasnominated": x.hasnominated,
          "hasverified": x.hasverified,
        }
        array.push(obj)
      }
      setdata(array)
    }
    hasstarted();
    getnominees();
    gettopic();
  }, [])
  async function gettopic() {
    const _topic = await window.contract2.methods.topic().call();
    settopic(_topic)
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
    <div className='voterbody'>
      <div className='body2'>
        {flag ? (data.map((element) => { return (element.hasverified === true ? <Candidates id={element.nominationid} caadhar={element.voterid} uaadhar={props.voterid} name={element.name} age={element.age} partyname={element.partyname} topic={topic} account={props.account} /> : null); }
        )): <h1 style={{ color: "RED" }}>Voting not Active. Please visit later...</h1>}
      </div>
    </div>
  );
}
export default Vote;