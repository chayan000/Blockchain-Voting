import React from 'react';
import { useState,useEffect } from 'react';
function Result(props){
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
          "votes": x.votes,
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
    return(
        <div >
          <div className="voterbody">
          <h1 className='admintext'>{topic}</h1>
          {data.map((element) => { return (element.hasverified===true?<h1>name: {element.name} partyname: {element.partyname} votes: {element.votes} </h1>:null); }
          )}
       
          </div>
        </div>
    );
}

export default Result;