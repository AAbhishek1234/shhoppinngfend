import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import data from '../components/TemplateData.json'; // Assuming this includes the data array you shared
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();

  const goToLogin = () => {
    if (!localStorage.getItem("token")) navigate("/Log");
    else navigate("/");
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <a href="/"><h1 id='hy'>SHOP.CO</h1></a>
      <div className='navbar1'>
        <Link to='/Shop'>Shop</Link>
        <Link to='/OnSale'>OnSale</Link>
        <Link to='/NewArrivals'>NewArrivals</Link>
        <Link to='/Brands'>Brands</Link>
        <input
          className="gm"
          type="text"
          placeholder="Search for products"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Link to="/Cart">
          <img id='cart' src="/Images/shopping-cart (1).png" alt="cart" />
        </Link>
        <Link to="/Log">
          <img id='user' src="/Images/user.png" alt="user" />
        </Link>
      </div>

      {/* Display filtered products */}
      <div className="products">
        {
          data.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (val.title && val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
            return null;
          }).map((val) => (
            <div className='template' key={val._id}>
              <img src={val.image} alt={val.title} />
              <h3>{val.title}</h3>
              
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Nav;
