import React from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Card from './Card'
import styles from '../styles/Arrival.module.css'
function Arrival() {
    <h1 id={styles.narri}>NewArrivals</h1>
    const navigate = useNavigate();
function handleClick(productId) {
  console.log("data")
  navigate(`/Productdetails/${productId}`);
}
const[dis,setDis]=useState("")
useEffect(() => {
    console.log("data is coming");
    fetch("http://localhost:4000/products/getproduct?tag=newArrivals")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setDis(data.products);
      });
  }, []);
    
  return (
    <>
    <Nav></Nav>
    <h1 id={styles.narri}>NewArrivals</h1>
    <div id={styles.narr}>
        {dis &&
          dis.map((product) => (
            <Card
              key={product._id}
              handleClick={handleClick}
              product={product}
            />
          ))}
      </div>

    </>
  )
}

export default Arrival