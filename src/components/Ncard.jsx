import React, { useEffect, useState } from "react";
import "./Ncard.css";
function Ncard() {
  const [aman, setAman] = useState([]);
  useEffect(() => {
    console.log("data is coming");
    fetch("http://localhost:4000/api/products/fetchone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: "66c59fdf9d37ad3b6d6b7243",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("product data--> ", data);
        setAman(data);
      });
  }, []);

  return (
    <>
      <h1 id="ncard">Card</h1>
      {aman &&
        aman.map((aman, index) => (
          <>
            <img id="imgs" src={aman.image} />
            <p id="pop">{aman.title}</p>
            <p id="pgh">{aman.description}</p>
            <p id="rat">{aman.rating}</p>
            <p id="priz">{aman.price}</p>
            {aman.category}
            <br></br>
            {aman.discount}
          </>
        ))}
    </>
  );
}

export default Ncard;
