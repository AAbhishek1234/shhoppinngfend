// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./cart.css";
// import { Link } from "react-router-dom";
// import OrderSuccess from "../components/OrderSuccess.jsx";
// import { useFetch } from "../hooks/useFetch.js";
// import { deleteData, postData, putData } from "../services/utils/apiCall.js";
// import Footer from "../components/Footer.jsx";

// function Cart() {
//   const [cartItems, setCartItems] = useState();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       navigate("/");
//     }
//   });

//   const { data, error } = useFetch(`/cart/addtocart`);

//   useEffect(() => {
//     setCartItems(data);
//   }, [data]);

//   console.log(cartItems);

//   const discountRate = 0.2;
//   const deliveryFee = 15;
  

//   const [showOrder, setShowOrder] = useState(false);

  
//     const handleset = () => {
//       postData("/Order/create",{
//         items:cartItems,
//         subtotal:calculateSubtotal(),
//         discount:calculateDiscount(),
//         deliveryFee,
        
//         total:calculateTotal(),
  
//       });}
//   const handleIncrement = async (id) => {
//     const result = await putData("/cart/addtocart", {
//       productId: id,
//     });
//     setCartItems(
//       cartItems.map((item) =>
//         item.product_id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };
//   function myFunction() {
//          window.alert("Not provided code ");
//     }

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

//   const handleRemove = (id) => {
//     deleteData("/cart/addtocart?productId=" + id);
//     setCartItems(cartItems.filter((item) => item.product_id !== id));
//   };

//   const calculateSubtotal = () => {
//     return cartItems
//       .reduce(
//         (acc, item) => acc + parseFloat(item.price) * parseFloat(item.quantity),
//         0
//       )
//       .toFixed(2);
//   };

//   const calculateDiscount = () => {
//     return (calculateSubtotal() * discountRate).toFixed(2);
//   };

//   const calculateTotal = () => {
//     return (
//       parseFloat(calculateSubtotal()) -
//       parseFloat(calculateDiscount()) +
//       parseFloat(deliveryFee)
//     ).toFixed(2);
//   };

//   return (
//     <>
//       {console.log(cartItems)}

//       {showOrder ? (
//         <OrderSuccess/>
//       ) : (
//         cartItems && (
//           <>
//             <div className="shopping-cart">
//               <div className="cart-items">
//                 <h2>Your Cart</h2>
//                 {cartItems.map((item) => (
//                   <div key={`${item.product_id}-${item.color}-${item.size}`} className="cart-item">
//                    <Link to={`/Productdetails/${item.product_id}`}>
//     <img
//       src={`data:${item.image.fileType};base64,${item.image.fileContent}`}
//       alt={item.name}
//       className="item-image"
//     />
//   </Link>
//                     <div className="item-details">
//                       <h4 id="tit">{item.title}</h4>

//                       <p id="size">Size: {item.size}</p>
//                       <p id="color">Color: {item.color}</p>
//                       <h3>
//                         <p>{item.price}</p>
//                       </h3>
//                     </div>
//                     <div className="item-controls">
//                       <button onClick={() => handleDecrement(item.product_id)}>
//                         -
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => handleIncrement(item.product_id)}>
//                         +
//                       </button>
//                     </div>
//                     <button
//                       onClick={() => handleRemove(item.product_id)}
//                       className="remove-item"
//                     >
                    
//                       <img id="deletei"src="\Images\delete.png"/>
//                     </button>
//                   </div>
//                 ))}
//               </div>

//               <div className="order-summary">
//                 <h3>Order Summary</h3>
//                 <p>
//           Subtotal: <span>{calculateSubtotal()}</span>
//                 </p>
//                 <p id="discount">
//                   Discount (-{discountRate * 100}%):{" "}
//                   <span>-{calculateDiscount()}</span>
//                 </p>
//                 <p>
//                   Delivery Fee: <span>{deliveryFee}</span>
//                 </p>
//                 <p>
//                   Total: <span id="total">{calculateTotal()}</span>
//                 </p>

//                 <input
//                   type="text"
//                   placeholder="Add promo code"
//                   className="promo-code-input"
//                 />
//                 <button className="apply-promo-button" onClick={myFunction}>Apply</button>
//                 <button
//                   className="checkout-button"
//                   onClick={() => {
//                     setShowOrder(true);
//                     handleset()
//                   }}
//                 >
//                   Go to Checkout
//                 </button>
//               </div>
//             </div>
//             <Footer></Footer>
//           </>
//         )
//       )}
//     </>
//   );
// }

// export default Cart;








// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./cart.css";
// import OrderSuccess from "../components/OrderSuccess.jsx";
// import { useFetch } from "../hooks/useFetch.js";
// import { deleteData, postData, putData } from "../services/utils/apiCall.js";
// import Footer from "../components/Footer.jsx";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       navigate("/");
//     }
//   });

//   const { data, error } = useFetch(`/cart/addtocart`);

//   useEffect(() => {
//     setCartItems(data);
//   }, [data]);

//   console.log(cartItems);

//   const discountRate = 0.2;
//   const deliveryFee = 15;

//   const [showOrder, setShowOrder] = useState(false);

//   const handleset = () => {
//     postData("/Order/create", {
//       items: cartItems,
//       subtotal: calculateSubtotal(),
//       discount: calculateDiscount(),
//       deliveryFee,
//       total: calculateTotal(),
//     });
//   };

//   const handleIncrement = async (id) => {
//     const result = await putData("/cart/addtocart", {
//       productId: id,
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

//   const handleRemove = (id) => {
//     deleteData("/cart/addtocart?productId=" + id);
//     setCartItems(cartItems.filter((item) => item.product_id !== id));
//   };

//   const calculateSubtotal = () => {
//     return cartItems
//       .reduce(
//         (acc, item) => acc + parseFloat(item.price) * parseFloat(item.quantity),
//         0
//       )
//       .toFixed(2);
//   };

//   const calculateDiscount = () => {
//     return (calculateSubtotal() * discountRate).toFixed(2);
//   };

//   const calculateTotal = () => {
//     return (
//       parseFloat(calculateSubtotal()) -
//       parseFloat(calculateDiscount()) +
//       parseFloat(deliveryFee)
//     ).toFixed(2);
//   };

//   return (
//     <>
//       {console.log(cartItems)}

//       {showOrder ? (
//         <OrderSuccess />
//       ) : cartItems && cartItems.length > 0 ? (
//         <>
//           <div className="shopping-cart">
//             <div className="cart-items">
//               <h2>Your Cart</h2>
//               {cartItems.map((item) => (
//                 <div key={`${item.product_id}-${item.color}-${item.size}`} className="cart-item">
//                   <Link to={`/Productdetails/${item.product_id}`}>
//                     <img
//                       src={`data:${item.image.fileType};base64,${item.image.fileContent}`}
//                       alt={item.name}
//                       className="item-image"
//                     />
//                   </Link>
//                   <div className="item-details">
//                     <h4 id="tit">{item.title}</h4>
//                     <p id="size">Size: {item.size}</p>
//                     <p id="color">Color: {item.color}</p>
//                     <h3>
//                       <p>{item.price}</p>
//                     </h3>
//                   </div>
//                   <div className="item-controls">
//                     <button onClick={() => handleDecrement(item.product_id)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => handleIncrement(item.product_id)}>+</button>
//                   </div>
//                   <button
//                     onClick={() => handleRemove(item.product_id)}
//                     className="remove-item"
//                   >
//                     <img id="deletei" src="\Images\delete.png" alt="delete" />
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <div className="order-summary">
//               <h3>Order Summary</h3>
//               <p>
//                 Subtotal: <span>{calculateSubtotal()}</span>
//               </p>
//               <p id="discount">
//                 Discount (-{discountRate * 100}%): <span>-{calculateDiscount()}</span>
//               </p>
//               <p>
//                 Delivery Fee: <span>{deliveryFee}</span>
//               </p>
//               <p>
//                 Total: <span id="total">{calculateTotal()}</span>
//               </p>

//               <input
//                 type="text"
//                 placeholder="Add promo code"
//                 className="promo-code-input"
//               />
//               <button className="apply-promo-button">Apply</button>
//               <button
//                 className="checkout-button"
//                 onClick={() => {
//                   setShowOrder(true);
//                   handleset();
//                 }}
//               >
//                 Go to Checkout
//               </button>
//             </div>
//           </div>
//           <Footer />
//         </>
//       ) : (
//         <div className="empty-cart">
//           <center><h2>Your cart is empty</h2></center>
//           <img  id="cempty"src="/Images/cart is empty.jpeg"/>
//           <center>
//           <h3>
//           Go for  <Link to="/"><b>Shopping </b></Link> to add items to your cart.
//           </h3></center>
//         </div>
//       )}
//     </>
//   );
// }

// export default Cart;









///3333/////3333///////////3333///



import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./cart.css";
import OrderSuccess from "../components/OrderSuccess.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { deleteData, postData, putData } from "../services/utils/apiCall.js";
import Footer from "../components/Footer.jsx";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const { data } = useFetch(`/cart/addtocart`);

  useEffect(() => {
    setCartItems(data || []);
  }, [data]);

  const discountRate = 0.2;
  const deliveryFee = 15;

  const handleset = async () => {
    try {
      await postData("/order/create", {
        items: cartItems,
        subtotal: calculateSubtotal(),
        discount: calculateDiscount(),
        deliveryFee,
        total: calculateTotal(),
      });

      // Send a request to clear the cart on the backend

      setShowOrder(true);
      setCartItems([]);  
    } catch (error) {
      console.error("Error placing order or clearing cart:", error);
    }
  };

  const handleIncrement = async (id) => {
    const result = await putData("/cart/addtocart", { productId: id });
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

  return (
    <>
      {showOrder ? (
        <OrderSuccess />
      ) : cartItems.length > 0 ? (
        <>
          <div className="shopping-cart">
            <div className="cart-items">
              <h2>Your Cart</h2>
              {cartItems.map((item) => (
                <div
                  key={`${item.product_id}-${item.color}-${item.size}`}
                  className="cart-item"
                >
                  <Link to={`/Productdetails/${item.product_id}`}>
                    <img
                      src={`data:${item.image.fileType};base64,${item.image.fileContent}`}
                      alt={item.name}
                      className="item-image"
                    />
                  </Link>
                  <div className="item-details">
                    <h4 id="tit">{item.title}</h4>
                    <p id="size">Size: {item.size}</p>
                    <p id="color">Color: {item.color}</p>
                    <h3>
                      <p>{item.price}</p>
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
                    <img id="deletei" src="\Images\delete.png" alt="delete" />
                  </button>
                </div>
              ))}
            </div>

            <div className="order-summary">
              <h3>Order Summary</h3>
              <p>
                Subtotal: <span>{calculateSubtotal()}</span>
              </p>
              <p id="discount">
                Discount (-{discountRate * 100}%):{" "}
                <span>-{calculateDiscount()}</span>
              </p>
              <p>
                Delivery Fee: <span>{deliveryFee}</span>
              </p>
              <p>
                Total: <span id="total">{calculateTotal()}</span>
              </p>

              <input
                type="text"
                placeholder="Add promo code"
                className="promo-code-input"
              />
              <button className="apply-promo-button">Apply</button>
              <button
                className="checkout-button"
                onClick={handleset} 
              >
                Go to Checkout
              </button>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div className="empty-cart">
         <center><h2>Your cart is empty</h2></center> 
         <center> <h3>
            Browse our <Link to="/">Shoping</Link> to add items to your cart.
          </h3></center>
        </div>
      )}
    </>
  );
}

export default Cart;
