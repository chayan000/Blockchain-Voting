import React from 'react'
import { Link } from 'react-router-dom'
function Navadmin(props) {
  async function home(){
    props.function("home")
  }
  async function verify(){
    props.function("verifynomination")
  }
  async function result(){
    props.function("result")
  }
    return (
        <>
            <div className="nav">
                <div className="navelements" >
                    <ul className='navitems'>
                        <li className="nav-item">
                            <button className='button3' onClick={home}>Home</button>
                        </li>
                        <div className="line-2"></div>
                        <li className="nav-item">
                        <button className='button3' onClick={verify}>Verify Nominations</button>
                        </li>
                        <div className="line-2"></div>
                        <li className="nav-item">
                        <button className='button3' onClick={result}>Result</button>
                        </li>
                        <div className="line-2"></div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Link to="/">
                        <button className='button1'>Log Out</button>
                        </Link>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Navadmin