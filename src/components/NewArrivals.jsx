import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/NewArrivals.module.css'
import Card from "./Card";

function NewArrivals() {
  const navigate = useNavigate();

  function handleClick(productId) {
    navigate(`/Productdetails/${productId}`);
  }

  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products/getproduct?tag=newArrivals")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setArrivals(data.products);
      });
  }, []);

  return (
    <>
      <h1 id={styles.newarrivals}>NEW ARRIVALS</h1>
      <div id={styles.divv}>
        {arrivals &&
          arrivals.map((product) => (
            <Card
              key={product._id}
              handleClick={handleClick}
              product={product}
            />
          ))}
      </div>
    </>
  );
}

export default NewArrivals;
