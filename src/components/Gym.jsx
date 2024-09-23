import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Card from './Card';
import Nav from './Nav';
import styles from '../styles/Gym.module.css'
function Gym() {
    const navigate = useNavigate();
function handleClick(productId) {
  console.log("data")
  navigate(`/Productdetails/${productId}`);
}
const[gym,setGym]=useState("")
useEffect(() => {
    console.log("data is coming");
    fetch("http://localhost:4000/products/getproduct?tag=gym")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setGym(data.products);
      });
  }, []);
  return (
    <>
  
    <h1 id={styles.gym}>GYM</h1>
      <div id={styles.divgym}>
        {gym &&
          gym.map((product, index) => {
            return (
              <>
                <Card  handleClick={handleClick} product={product} />
              </>
            );
          })}
      </div>
    
    
    </>
  )
}

export default Gym