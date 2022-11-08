import React, { useState, useEffect } from 'react';
import Candidates from './Candidates';

function Vote(props) {
    let list = [];
    let array=[];   
    test();
    
    async function test() {
        let arr1 = ['aadhar', 'name', 'age', 'partyname', 'hasverified']
        const nominationcount = await window.contract2.methods.nominationcount().call();
        for (var i = 0; i < nominationcount; i++) {
            const x = await window.contract2.methods.getcandidate(i).call();
            list[i] = Object.values(x);
            const obj = {};
            arr1.forEach((element, index) => {
                obj[element] = list[i][index];
            });
            array.push(obj);
        }
    } 
    const [person,setperson]=useState(array);
   
    function ccard(val){
        return(
            <Candidates name={val.name} age={val.age} partyname={val.partyname} />
        );
    }

    return (
        <div className='voterbody'>
            <div className='body2'>
                {
                  person.map(ccard)
                }
               
            </div>
        </div>
    );
}


export default Vote;