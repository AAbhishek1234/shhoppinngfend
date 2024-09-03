import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Nav.css";
// import Log from '../Pages/Log';
function Nav() {
const navigate =   useNavigate()
const goToLogin =()=>{
 if(!localStorage.getItem("token"))
  navigate("/Log")
else
navigate("/profile")

}
  return (
    <>
    
    <a href=""> <h1 id='hy'> SHOP.CO</h1> </a> 
    <div className='navbar1'>
      <Link to='/Shop'>Shop</Link>
      <Link to='/OnSale'>OnSale</Link>
      <Link to='/NewArrivals'>NewArrivals</Link>
      <Link to='/Brands'>Brands</Link>
       <input className="gm" type="text" placeholder="        Search for products"/>
       <Link to="/Cart">
      <img id='cart' src="/Images/shopping-cart (1).png"/></Link>
       <img id='user' src="/Images/user.png" alt="myn" onClick={goToLogin} />
    </div>
    
    </>
  )
}

export default Nav;