import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";
//import { Link } from 'react-router-dom';
import Nav from "./Nav";
//import Card from './Card';
function NewArrivals() {
    const navigate = useNavigate();
   function handleClick() {
      navigate("/Brands");
    }
  const [arrivals, setArrivals] = useState([]);
  useEffect(() => {
    console.log("arrivals is coming");
    fetch("http://localhost:4000/api/products/fetch")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArrivals(data);
      });
  }, []);
  return (
    <>
      {/* <Nav></Nav> */}
      <h1 id="newarrivals">NEW ARRIVALS</h1>
      {console.log(arrivals)}
      <div id="divv">
        {arrivals && arrivals.map((arrival, index) => (
            <>
              <div className="t-shirt">
                <img src={`data:${arrival.image.fileType};base64,${arrival.image.fileContent}`} />
                <p className="p8">{arrival.title}</p>
                <img id="starimg3" src="/Images/star1.png" />
                <div className="paisa">{arrival.price}</div>
                {/* {arrival.description} */}
              </div>
            </>
          ))}
      </div>

      <center>
        <button id="b2" type="button" onClick={handleClick}>
          View All
        </button>
      </center>
    </>
  );
}

export default NewArrivals;
