import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./Productdetails.css";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { postData } from "../services/utils/apiCall";

function Productdetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  console.log(productId);
  const[title,setTitle]=useState();
  const [data, setData] = useState();
  const [color, setColor] = useState("");
  const [count, setCount] = useState(1);
  //const[price,setPrice]=useState();
  
  const [size, setSize] = useState("");

  async function handleClick() {
    const token = localStorage.getItem("token")
    if (!token) {

      // If no token, show an alert and navigate to login page
      alert("You are not logged in. Please log in or create an account.");
      navigate("/Log");
      return;
    }



    try {
      const data = await postData("/cart/addtocart", {
        product_id: productId,
         title:title,
        quantity: count,
        color:color,
        size:size,
        //price:price
      
        


      });
      console.log(data);
      navigate("/cart")
    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {
    if (productId) {
      fetch(`http://localhost:4000/product/single?productId=${productId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [productId]);

  return (
    data && (
      <>
        <Nav></Nav>
        <h1 id="heading">Product Details Page</h1>
        <img
        
          id="shirt1121"
          src={`data:${data.image.fileType};base64,${data.image.fileContent}`}
        />
        <h1 id="onelife">{data.title}</h1>
        <p id="productpara">{data.description} </p>
        <p id="prating">{data.rating}</p>
        <div className="productprice ">{data.price}</div>
        <p id="selectcolor">Select Colors</p>
<button
  className={`sandy ${color === "sandy" ? "selected" : ""}`}
  type="button"
  onClick={() => setColor("sandy")}
>
</button>
<button
  className={`green ${color === "green" ? "selected" : ""}`}
  type="button"
  onClick={() => setColor("green")}
>
  
</button>
<button
  className={`blue ${color === "blue" ? "selected" : ""}`}
  type="button"
  onClick={() => setColor("blue")}
>
  
</button>

        <div className="producthr1"></div>
        <p id="choosesize">Choose Size</p>
<button
  className={`small ${size === "Small" ? "selected" : ""}`}
  type="button"
  onClick={() => setSize("Small")}
>
  Small
</button>
<button
  className={`medium ${size === "Medium" ? "selected" : ""}`}
  type="button"
  onClick={() => setSize("Medium")}
>
  Medium
</button>
<button
  className={`large ${size === "Large" ? "selected" : ""}`}
  type="button"
  onClick={() => setSize("Large")}
>
  Large
</button>
<button
  className={`x-large ${size === "X-Large" ? "selected" : ""}`}
  type="button"
  onClick={() => setSize("X-Large")}
>
  X-Large
</button>

        <div className="producthr2"> </div>
        <div id="calculation1">
          <button id="buttong1"    onClick={() => {
      if (count > 1) {
        setCount(count - 1);
      }
    }}>
            -
          </button>
          <span id="span1">{count}</span>
          <button id="buttongg1" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
        <button id="Addc" type="button" onClick={handleClick}>
          Add to Cart
        </button>
        <p id="productdetail">Product Deatils</p>
        <div className="producthr3"></div>
        <p id="sleek">
          Sleek and timeless. Titanium glasses with an innovative bridge. A
          frame to suit every face, Morgan is a classic <br />
          'panto' shape. Named after James Morgan, the engineer who built the
          Regent's Canal, it features custom
          <br /> elements including fluid single piece bridge, adjustable nose
          pads and temple tips based on Constantin
          <br /> Brâncuşi's Bird in Space.
        </p>
        <p id="sleek">
          Sleek and timeless. Titanium glasses with an innovative bridge. A
          frame to suit every face, Morgan is a classic <br />
          'panto' shape. Named after James Morgan, the engineer who built the
          Regent's Canal, it features custom
          <br /> elements including fluid single piece bridge, adjustable nose
          pads and temple tips based on Constantin
          <br /> Brâncuşi's Bird in Space.
        </p>
        <ul>
          <li id="lis">99.7% pure titanium front</li>
          <li id="lis">More than 4hv on the Vickers hardness test.</li>
          <li id="lis">lon plated to over 0.3μ</li>
          <li id="lis">Weighs under 5.0g</li>
          <li id="lis">Adjustable titanium nose pads for a comfortable fit</li>
          <li id="lis">UV protection</li>
        </ul>
        <div className="producthr4"></div>
        <h1>
          {" "}
          <center>YOU MIGHT ALSO LIKE</center>
        </h1>

        <div className="stay">
          <h1 id="stay1">STAY UPTO DATE ABOUT</h1>
          <input
            id="inp"
            type="text"
            placeholder="                   Enter your email address"
          ></input>
          <img id="email" src="/images/email.png" />
          <h1 id="stay2">OUR LATEST OFFERS</h1>
          <input
            id="inp1"
            type="text"
            placeholder="                   Subscribe to newsletter"
          ></input>
        </div>
        <div className="lastdiv">
          <h1 id="shop1">SHOP.CO</h1>
          <p id="lastp">
            we have clothes that suits your style and
            <br />
          </p>
          <p id="lastp1">
            which you're proud to wear.From
            <br />
          </p>
          <p id="lastp2">womer to men</p>

          <img id="ls" src="/images/social logo.png" />

          <h2 id="lh2">Company</h2>
          <p id="llp">About</p>
          <p id="llp1">Features</p>
          <p id="llp2">Works</p>
          <p id="llp3">Career</p>

          <h2 id="lh3">Help</h2>
          <p id="l1">Customer Support</p>
          <p id="l2">Delivery Details</p>
          <p id="l3">Terms & Conditions</p>
          <p id="l4">Privacy Policy</p>

          <h2 id="lh4">F A Q</h2>
          <p id="cs">Account</p>
          <p id="cs1">Manage Deliveries</p>
          <p id="cs2">Orders</p>
          <p id="cs3">Payments</p>

          <h2 id="lh5">Resources</h2>

          <p id="Fb">Free eBooks</p>
          <p id="Fb1">Development Tutorial</p>
          <p id="Fb2">How to-Blog</p>
          <p id="Fb3">Youtube Playlist</p>

          <div className="hr">
            <hr class="new6"></hr>
          </div>
          <p id="Fb4">Shop.co &copy; 2000-2024. All Rights Reserved.</p>
          <img id="ms" src="/images/s12.png" />
        </div>
      </>
    )
  );
}
export default Productdetails;



