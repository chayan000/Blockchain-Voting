import React from 'react';
import Avatar from 'react-avatar';

function Candidates(props) {
    return (
        <div className="busket4">
                
                <table>
                    <tr>
                        <th>Aadhar No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Photo</th>
                        <th>Partyname</th>
                        <th>Accept</th>
                        <th>Reject</th>
                    </tr>
                    <tr>
                        <td>{props.aadhar}</td>
                        <td>{props.name}</td>
                        <td>{props.age}</td>
                        <td>{<Avatar facebookId="100008343750912" />}</td>
                        <td>{props.partyname}</td>
                        <td><button className='button1'>Accept</button></td>
                        <td><button className='button1'>Reject</button></td>
                    </tr>
                </table>
            
        </div>

    );
}

export default Candidates;