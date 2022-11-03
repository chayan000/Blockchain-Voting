import React from 'react';

function result(props){
    return(
        <div >
          <div className="body">
            <p>result</p>
            <p>user{props.aadhar}</p>
          </div>
        </div>
    );
}

export default result;