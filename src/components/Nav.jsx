// import React from 'react';
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import "./Nav.css";

// function Nav() {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();
//   return (
//     <>
//       <a href="/"><h1 id='hy'>SHOP.CO</h1></a>
//       <div className='navbar1'>
//         <Link to='/Shop'>Shop</Link>
//         <Link to='/OnSale'>OnSale</Link>
//         <Link to='/NewArrival'>NewArrival</Link>
//         <Link to='/Brands'>Brands</Link>
//         <input className="gm" type="text" placeholder="Search for products" />
     
//         {token?(
//           <>
//              <Link to="/Cart">
//           <img id='cart' src="/Images/shopping-cart (1).png" alt="cart" /></Link>
         
//                      <span
//                      id="user"
//                        onClick={() => {
//                          localStorage.removeItem("token");
//                          navigate("/");
//                        }}
//                      >LogOut</span>
                      
//                    </>
//                  ) : (
//                     <Link  to="/Log">
//                       <p id='sss'>Login</p>
                      
//                       </Link>
              
//                  )}
//        </div>
   
//     </>
//   );
// }

// export default Nav;






// import React, { useEffect } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import "./Nav.css";

// function Nav() {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   useEffect(() => {
   
//     if (token) {
//       const currentPath = window.location.pathname;
//       if (currentPath === "/Log" || currentPath === "/SignUp") {
//         navigate("/"); 
//       }
//     }
//   }, [token, navigate]);

//   return (
//     <>
//       <a href="/"><h1 id='hy'>SHOP.CO</h1></a>
//       <div className='navbar1'>
//         <Link to='/Shop'>Shop</Link>
//         <Link to='/OnSale'>OnSale</Link>
//         <Link to='/NewArrival'>NewArrival</Link>
//         <Link to='/Brands'>Brands</Link>
//         <input className="gm" type="text" placeholder="Search for products" />

//         {token ? (
//           <>
//             <Link to="/Cart">
//               <img id='cart' src="/Images/shopping-cart (1).png" alt="cart" />
//             </Link>
//             <span
//               id="user"
//               onClick={() => {
//                 localStorage.removeItem("token");
//                 navigate("/");
//               }}
//             >LogOut</span>
//           </>
//         ) : (
//           <Link to="/Log">
//             <p id='sss'>Login</p>
//           </Link>
//         )}
//       </div>
//     </>
//   );
// }

// export default Nav;




/////----3----//
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (token) {
      const currentPath = window.location.pathname;
      if (currentPath === "/Log" || currentPath === "/SignUp") {
        navigate("/"); 
      }
    }
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    setDropdownOpen(false);  // Close dropdown after logout
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <a href="/"><h1 id='hy'>SHOP.CO</h1></a>
      <div className='navbar1'>
        <Link to='/Shop'>Shop</Link>
        <Link to='/OnSale'>OnSale</Link>
        <Link to='/NewArrival'>NewArrival</Link>
        <Link to='/Brands'>Brands</Link>
        <input className="gm" type="text" placeholder="Search for products" />

        {token ? (
          <>
            <Link to="/Cart">
              <img id='cart' src="/Images/shopping-cart (1).png" alt="cart" />
            </Link>
            
            {/* Dropdown for Order/Account and LogOut */}
            <div className="dropdown">
              <span id="user" onClick={toggleDropdown}>
                LogOut
              </span>
              
              {/* Show dropdown when clicked */}
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/Order">Order</Link>
                  <Link to="/Account">Account</Link>
                  <span onClick={handleLogout}>LogOut</span>
                </div>
              )}
            </div>
          </>
        ) : (
          <Link to="/Log">
            <p id='sss'>Login</p>
          </Link>
        )}
      </div>
    </>
  );
}

export default Nav;
