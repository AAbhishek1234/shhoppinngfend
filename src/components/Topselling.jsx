import React, { useState,useEffect } from 'react'
import './Shop.css';
function Topselling() {
  const[topsell,setTopsell]=useState([])
  useEffect(() => {
    console.log("Topselling is coming");
    fetch("http://localhost:4000/create/fetchall")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTopsell(data);
      });
  }, []);
  return (
    <>
    <h1 id='newarrivals'>TOP SELLING</h1>
       <div id='divv'>
       {
       topsell && topsell.map((topsell,index)=>(
    <div className='t-shirt'>
             <img src={`data:${topsell.image.fileType};base64,${topsell.image.fileContent}`} />
             <p className='p8'>{topsell.title}</p>
             <img id='starimg2' src='/Images/star2.png' />
             <div className='paisa'>
               {topsell.price}
             </div>
           </div>
           
         )
  )  }
  </div>
    </>
  
  )
}
export default Topselling
