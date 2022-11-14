import React, { useState, useEffect } from 'react';

function Adminhome(props) {
    const [_topic, set_topic] = useState();
    const [phase, changephase] = useState();
    const [flag, setflag] = useState("0");
    useEffect(() => {
        checkstate();
      });
    async function submit(_topic) {
        try{
            await window.contract2.methods.create_poll(_topic).send({from :props.account});
        }
        catch{
            alert("an error occured");
        }
    }
    async function checkstate() {
        let x=await window.contract2.methods.has_started().call();
        
        if (x === "0") {
            setflag(0)
            changephase("Not Active")
        }
        if (x === "1") {
            setflag(1)
            changephase("Active")
        }
    }
    
    async function startvoting() {
        try {
            await window.contract2.methods.start_poll().send({from :props.account});
            alert("Voting has started");
            checkstate()
        }
        catch{
            alert("Transaction failed")
        }
    }
    async function endvoting(){
        try{
            await window.contract2.methods.end_poll().send({from :props.account});
            alert("Voting ended successfully");
            checkstate();
        }
        catch{
            alert("Transaction failed")
        }
    }
    async function showresult(){
        alert("result will be shared with the users");
    } 
    return (
        <div >
            <div className="body">
                <div className="busket2">
                    <h1 style={{textAlign: 'center'}}>Admin Controls</h1>
                    <h4>1)Add Topic of the vote</h4>
                    <label>
                        <input onChange={(e) => set_topic(e.target.value)} placeholder="Topic of Poll" value={_topic} type="text" id="_topic" />
                        <button className='button1' onClick={submit} >Submit</button>
                    </label>
                    <div className="line-3"></div>
                    <h4>2)Manage Voting State</h4>
                    <p >Current State:  <span style={{ color: flag==1?"green":"red"}}>{phase}</span></p>
                    <div className="side" >
                        <button className='button4' onClick={startvoting} style={{ backgroundColor: "green"  }}>Start Voting</button>
                        <button className='button4' onClick={endvoting} style={{ backgroundColor: "red"  }} >End Voting</button>
                    </div>
                    <div className="line-3"></div>
                    <h4>3)Publish Result</h4>
                    <button className='button1' onClick={showresult} style={{fontSize:20}} >Publish Result</button>
                    <div className="line-3"></div>
                </div>
            </div>
        </div>
    );
}

export default Adminhome;