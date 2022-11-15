import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import Candidates from './Candidates';
function Vote(props) {
  const [data, setdata] = useState([]);
  const[topic,settopic]=useState();
  useEffect(() => {
    async function getnominees() {
      let array = []
      const nominationcount = await window.contract2.methods.nominationcount().call();
      for (var i = 0; i < nominationcount; i++) {
        let x = await window.contract2.methods.candidates(i).call();
        const obj = {
          "nominationid": x.nominationid,
          "aadhar": x.aadhar,
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
    getnominees();
    gettopic();
  }, [])
  async function gettopic(){
    const _topic = await window.contract2.methods.topic().call();
    settopic(_topic)
  }
  return (
    <div className='voterbody'>
            <div className='body2'>
            {data.map((element) => { return (element.hasverified===true?<Candidates id={element.nominationid} caadhar={element.aadhar} uaadhar={props.aadhar} name={element.name} age={element.age} partyname={element.partyname} topic={topic} account={props.account} />:null); }
          )}
            </div>
        </div>
  );
}
export default Vote;