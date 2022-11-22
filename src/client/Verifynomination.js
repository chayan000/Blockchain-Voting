import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Nominees from './Nominees';

function Verifynomination(props) {
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
    <div >
      <div className="voterbody">
        
        <h1 className='admintext'>{topic}</h1>
          {data.map((element) => {return (element.hasnominated===true?<Nominees id={element.nominationid} aadhar={element.aadhar} name={element.name} age={element.age} partyname={element.partyname} account={props.account} />:null); }
          )}
       
      </div>
    </div>
  );
}

export default Verifynomination;