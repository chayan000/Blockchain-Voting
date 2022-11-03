import React from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
  async function home(){
    props.function("home")
  }
  async function vote(){
    props.function("vote")
  }
  async function result(){
    props.function("result")
  }
  async function nomination(){
    props.function("nomination")
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
                        <button className='button3' onClick={vote}>Vote</button>
                        </li>
                        <div className="line-2"></div>
                        <li className="nav-item">
                        <button className='button3' onClick={result}>Result</button>
                        </li>
                        <div className="line-2"></div>
                        <li className="nav-item">
                        <button className='button3' onClick={nomination}>Nomination</button>
                        </li>
                        <div className="line-2"></div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Link to="/voter">
                        <button className='button1'>Log Out</button>
                        </Link>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Navbar