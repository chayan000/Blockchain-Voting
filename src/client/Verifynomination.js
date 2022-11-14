import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Nominees from './Nominees';

function Verifynomination(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function getnominees() {
      let array = []
      const nominationcount = await window.contract2.methods.nominationcount().call();
      for (var i = 0; i < nominationcount; i++) {
        let x = await window.contract2.methods.candidates(i).call();
        const obj = {
          "aadhar": x.aadhar,
          "name": x.name,
          "age": x.age,
          "partyname": x.partyname,
        }
        array.push(obj)
      }
      setdata(array)
    }
    getnominees();
  }, [])
console.log(data)
  return (
    <div >
      <div className="voterbody">
        
        <h1 className='admintext'>Lok sava election 2024   phase 1</h1>
          {data.map((element) => { return (<Nominees aadhar={element.aadhar} name={element.name} age={element.age} partyname={element.partyname} />); }
          )}
       
      </div>
    </div>
  );
}

export default Verifynomination;