// import { useState } from "react";
// import React from "react";
// import Nav from "../components/Nav";
// import { useFetch } from "../hooks/useFetch";
// import "./cart.css";
// import Stayuptodate from "../components/Stayuptodate";
// import Footer from "../components/Footer";
// import ActualFooter from "../components/ActualFooter";
// import { deleteData, putData } from "../services/utils/apiCall";
// function Cart() {
//   const [cont, setCont] = useState(1);
//   const [cartItems, setCartItems] = useState();

//   const { data, error } = useFetch("/cart/addtocart");

//   console.log(data);
//   function myFunction() {
//     window.confirm("Your order is confirmed");
//   }
//   const discountRate = 0.2;
//   const deliveryFee = 15;

//   const handleIncrement = async (id) => {
//     const result = await putData("/cart/addtocart", {
//       product_id: id,
//     });
//     setCartItems(
//       cartItems.map((item) =>
//         item.product_id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const handleDecrement = (id) => {
//     putData("/decrease?productId=" + id);
//     setCartItems(
//       cartItems.map((item) =>
//         item.product_id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   return (
//     <>
//       <Nav />
//       <h1 id="yourcart">YOUR CART</h1>
//       <div id="outerdiv">
//         {data &&
//           data.map((product, index) => (
//             <div className="outerdivChild">
//               <img
//                 id="img35"
//                 src={`data:${product.image.fileType};base64,${product.image.fileContent}`}
//               />
//               <div id="line"></div>
//               <div id="line1"></div>
//               <h2 id="chs">{product.title}</h2>
//               <p id="size">Size:Large</p>
//               <p id="color">Color:Red</p>
//               <p id="dollar">{product.price}</p>
//               <img
//                 id="del"
//                 src="./Images/delete.png"
//                 onClick={() => {
//                   deleteData(`/cart/addtocart?productId=${product._id}`);
//                 }}
//               />
//               <div id="calculation2">
//                 <button
//                   id="buttong1"
//                   onClick={() => {
//                     setCont(cont - 1);
//                     putData(`/decrease?productId=${product._id}`);
//                   }}
//                 >
//                   -
//                 </button>
//                 <span id="span1">{cont}</span>
//                 <button
//                   id="buttongg1"
//                   onClick={() => {
//                     setCont(cont + 1);
//                     putData(`/cart/addtocart?productId=${product._id}`);
//                   }}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           ))}
//       </div>
//       <div id="summarydiv">
//         <h2 id="orders">Order Summary</h2>
//         <p id="subtotal">Subtotal:</p>
//         <p id="rupee"></p>
//         <p id="dis">
//           Discount({discountRate * 100}%):{""}
//         </p>
//         <p id="rupee1">$113</p>
//         <p id="dely">Delivery Fees</p>
//         <p id="rupee2">$15</p>
//         <div id="underline"></div>
//         <p id="total">Total</p>
//         <p id="rupee3">$333</p>
//         <input
//           id="memo"
//           type="text"
//           placeholder="                Add promo code"
//         ></input>
//         <button id="app">Apply</button>
//         <button id="go1" onClick={myFunction}>
//           Go to Checkout{" "}
//         </button>
//       </div>
//       <Stayuptodate></Stayuptodate>
//       <ActualFooter></ActualFooter>
//       {/* <Footer></Footer> */}
//     </>
//   );
// }

// export default Cart;

import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import OrderSuccess from "../components/OrderSuccess.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { deleteData, postData, putData } from "../services/utils/apiCall.js";
import Footer from "../components/Footer.jsx";

function Cart() {
  const [cartItems, setCartItems] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  const { data, error } = useFetch(`/cart/addtocart`);

  useEffect(() => {
    setCartItems(data);
  }, [data]);

  console.log(cartItems);

  const discountRate = 0.2;
  const deliveryFee = 15;

  const [showOrder, setShowOrder] = useState(false);

  
    const handleset = () => {
      postData("/Order/create",{
        items:cartItems,
        subtotal:calculateSubtotal(),
        discount:calculateDiscount(),
        deliveryFee,
        total:calculateTotal(),
  
      });}
  const handleIncrement = async (id) => {
    const result = await putData("/cart/addtocart", {
      productId: id,
    });
    setCartItems(
      cartItems.map((item) =>
        item.product_id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    putData("/decrease?productId=" + id);
    setCartItems(
      cartItems.map((item) =>
        item.product_id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    deleteData("/cart/addtocart?productId=" + id);
    setCartItems(cartItems.filter((item) => item.product_id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce(
        (acc, item) => acc + parseFloat(item.price) * parseFloat(item.quantity),
        0
      )
      .toFixed(2);
  };

  const calculateDiscount = () => {
    return (calculateSubtotal() * discountRate).toFixed(2);
  };

  const calculateTotal = () => {
    return (
      parseFloat(calculateSubtotal()) -
      parseFloat(calculateDiscount()) +
      parseFloat(deliveryFee)
    ).toFixed(2);
  };

  // const [size, setSize] = useState("Large");
  // const [color, setColor] = useState("Blue");
  // const [quantity, setQuantity] = useState("1");
  // const navigate = useNavigate();
  // const handleset = async () => {
  //   try {
  //     const result = await postData("/Order/create", {
  //       product_id: productId,

  //       color: color,
  //       size: size,
  //       quantity: quantity,
  //     });

  //     console.log(result);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }

  return (
    <>
      {console.log(cartItems)}

      {showOrder ? (
        <OrderSuccess/>
      ) : (
        cartItems && (
          <>
            <div className="shopping-cart">
              <div className="cart-items">
                <h2>Your Cart</h2>
                {cartItems.map((item) => (
                  <div key={item.product_id} className="cart-item">
                    <img
                      src={`data:${item.image.fileType};base64,${item.image.fileContent}`}
                      alt={item.name}
                      className="item-image"
                    />
                    <div className="item-details">
                      <h4>{item.title}</h4>

                      <p>Size: {item.size}</p>
                      <p>Color: {item.color}</p>
                      <h3>
                        <p>${item.price}</p>
                      </h3>
                    </div>
                    <div className="item-controls">
                      <button onClick={() => handleDecrement(item.product_id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.product_id)}>
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item.product_id)}
                      className="remove-item"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>

              <div className="order-summary">
                <h3>Order Summary</h3>
                <p>
          Subtotal: <span>${calculateSubtotal()}</span>
                </p>
                <p id="discount">
                  Discount (-{discountRate * 100}%):{" "}
                  <span>-${calculateDiscount()}</span>
                </p>
                <p>
                  Delivery Fee: <span>${deliveryFee}</span>
                </p>
                <h4>
                  Total: <span id="total">${calculateTotal()}</span>
                </h4>

                <input
                  type="text"
                  placeholder="Add promo code"
                  className="promo-code-input"
                />
                <button className="apply-promo-button">Apply</button>
                <button
                  className="checkout-button"
                  onClick={() => {
                    setShowOrder(true);
                    handleset()
                  }}
                >
                  Order
                </button>
              </div>
            </div>
            <Footer />
          </>
        )
      )}
    </>
  );
}

export default Cart;
