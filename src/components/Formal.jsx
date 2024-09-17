import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Nav from './Nav';
import styles from "../styles/Formal.module.css"
function Formal() {
    const navigate = useNavigate();
    function handleClick(productId) {
      console.log("data")
      navigate(`/Productdetails/${productId}`);

    }
    const[formal,setFormal]=useState("")
    useEffect(() => {
        fetch("http://localhost:4000/products/getproduct?tag=formal")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.products);
            setFormal(data.products);
          });
      }, []);
  return (
    <>
   <Nav></Nav>
   <h1 id={styles.formal}>Formal</h1>
      <div id={styles.divformal}>
        {formal &&
          formal.map((product, index) => {
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

export default Formal