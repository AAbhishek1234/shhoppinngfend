import React, { useState,useEffect } from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import styles from '../styles/casual.module.css';
function Casual() {
    const navigate = useNavigate();
    function handleClick(productId) {
      console.log("data")
      navigate(`/Productdetails/${productId}`);
    }
    const [casual,setCasual]=useState("")
    useEffect(() => {
        fetch("http://localhost:4000/products/getproduct?tag=casual")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.products);
            setCasual(data.products);
          });
      }, []);
  return (
    <>
    <Nav></Nav>
      <h1 id={styles.heading}>Casuals</h1>
      <div id={styles.divcasual}>
        {casual &&
          casual.map((product, index) => {
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

export default Casual