import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import Candidates from './Candidates';
function Vote() {

  let people = [];
  let data=[]
  async function handlePersonCount() {
    const personCount = await window.contract2.methods.nominationcount().call();
    console.log(personCount);
    return (personCount);
  }

  async function handlePeople(qty) {
    let arr1 = ['aadhar', 'name', 'age', 'partyname', 'hasverified']
    for (let i = 0; i < qty; i++) {
      const person = await window.contract2.methods.getcandidate(i).call();
      people = Object.values(person);
      const obj = {};
      arr1.forEach((element, index) => {
        obj[element] = people[index];
      }); 
      data.push(obj)
      console.log(typeof(data))
      
    }
  }

  async function handler() {
    await handlePeople(await handlePersonCount());
  }
  
  handler(); 
  const [person,setperson]=useState(data);
  
  return (
    <div className='voterbody'>
            <div className='body2'>
                {
                    person.map(pobj=>(
                       <Candidates name={pobj.name} age={pobj.age} partyname={pobj.partyname} aadhar={pobj.aadhar}/> 
                    ))
                }
            </div>
        </div>
  );
}
export default Vote;