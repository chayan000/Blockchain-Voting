import React from 'react';
import { useState,useEffect } from 'react';
import Chart from "react-apexcharts";
function Result(props){
  const [data, setdata] = useState([]);
  const[topic,settopic]=useState();
  const[flag,setflag]=useState();
  let votes=[]
  let candidates=[]
  useEffect(() => {
    async function getnominees() {
      let array = []
      const nominationcount = await window.contract2.methods.nominationcount().call();
      for (var i = 0; i < nominationcount; i++) {
        let x = await window.contract2.methods.candidates(i).call();
        const obj = {
          "name": x.name,
          "hasverified": x.hasverified,
          "votes": x.votes,
          "partyname":x.partyname
        }
          array.push(obj)
        
      }
      setdata(array);
    }
    getnominees();
    gettopic();
    isactive();
  }, [])
  data.map((element)=>{
    if(element.hasverified==true){
      votes.push(parseInt(element.votes));
      candidates.push(element.name+"("+element.partyname+")");
    }
  })
  async function gettopic(){
    const _topic = await window.contract2.methods.topic().call();
    settopic(_topic)
  }
  async function isactive(){
    let x = await window.contract2.methods.publishresult().call();
    if (x === false) {
      setflag(0) //can not show result
    }
    if (x === true) {
      setflag(1)  //can show result
    }
  }
    return(
        <div className="body3">
          <h1 className='admintext'>{topic}</h1>
          <div className="voterbody"> 
          
  
         
          {flag?<Chart type="donut" height={750} width={750} series={votes} options={{labels:candidates}}/>:<h1 style={{color:"RED"}}>Not available...</h1>}
          
          
        </div>
        </div>
    );
}

export default Result;