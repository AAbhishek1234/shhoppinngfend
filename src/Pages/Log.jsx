import React from 'react'
import './Log.css';
import { Link } from "react-router-dom";
// import Card from '../components/Card';
// import Nav from '../components/Nav';

function Log() {
  return (
    <>
    {/* <Nav></Nav> */}
    <h1 id='hh'>SHOP.CO</h1>
   <img id='log'src='/Images/bert-b-rhNff6hB41s-unsplash 1.png'/>
   <button id='button1' type='button'>Login</button>
    <button id='button2' type='button'>Sign Up</button>
    <h3 id='sign'>Sign In Page</h3>
    <button id='button3' type='button'>Continue With Google</button>
    <img id='googleicon'src='/Images/googleicon.png'/>
    <div className='hr'>
      <hr class="new7"></hr>
      <p id='or'>OR</p>
      </div>
      <div className='hr'>
      <hr className="new8"></hr>
      </div>
      <p id='username'>User name or email address</p>
      <input id='userinput1' type='email'/>
      <p id='username1'>Password</p>
      <input id='userinput2' type='password'/>
      <button id='button4' type='button'>Sign in</button>
      <p id='account'> Don't have an account?</p>
      <Link> <p id='sin'>Sign up</p></Link>
    
    {/* <Card></Card> */}
    </>
  )
}

export default Log