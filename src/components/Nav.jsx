import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <>
      <a href="/"><h1 id='hy'>SHOP.CO</h1></a>
      <div className='navbar1'>
        <Link to='/Shop'>Shop</Link>
        <Link to='/OnSale'>OnSale</Link>
        <Link to='/NewArrival'>NewArrival</Link>
        <Link to='/Brands'>Brands</Link>
        <input className="gm" type="text" placeholder="Search for products" />
     
        {token?(
          <>
             <Link to="/Cart">
          <img id='cart' src="/Images/shopping-cart (1).png" alt="cart" /></Link>
         
                     <span
                     id="user"
                       onClick={() => {
                         localStorage.removeItem("token");
                         navigate("/");
                       }}
                     >LogOut</span>
                      
                   </>
                 ) : (
                    <Link  to="/Log">
                      <p id='sss'>Login</p>
                      
                      </Link>
              
                 )}
       </div>
   
    </>
  );
}

export default Nav;






