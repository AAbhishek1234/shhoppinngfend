import React from 'react'
import './card.css';
import { useState,useEffect } from 'react';
function Card() {

    const [products,setProducts]=useState([]);
  
    useEffect(() => {
      console.log("This is useEffect 1");
      fetch('http://localhost:4000/product/products') // api for the get request
      .then(response => response.json())
      .then((data) => 
        { 
          console.log(data.products)
          setProducts(data.products)
        });
    }, [])
  return (
    <>
     {
    products && products.map(( product,index)=>
    (

<div className='t-shirt10' > 
    <img src={`${product.url}`}/>
    <p className='p80'>{product.title}</p>
    <img className='starimg20' src='/Images/star2.png'/>
    <div className='paisa10'>
      {product.prize}<br/>
      {product.discount}<br/>
      {product.offer}
      {product.button}
    </div>
    </div>
  )
    )}
    
    
    
    </>
  )
}

export default Card