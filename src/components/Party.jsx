import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Card from './Card'
import Nav from './Nav';
import styles from '../styles/Party.module.css'


function Party() {
    const navigate = useNavigate();
function handleClick(productId) {
  console.log("data")
  navigate(`/Productdetails/${productId}`);
}
const[party,setParty]=useState("")
useEffect(() => {
    fetch("http://localhost:4000/products/getproduct?tag=party")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setParty(data.products);
      });
  }, []);
  return (
    <>
    <Nav></Nav>
    <h1 id={styles.party}>Party</h1>
      <div id={styles.divparty}>
        {party &&
          party.map((product, index) => {
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

export default Party