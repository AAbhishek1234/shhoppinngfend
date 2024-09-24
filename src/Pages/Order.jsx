// import { useFetch } from "../hooks/useFetch";
// import styles from '../styles/Order.module.css'

// const Order = () => {
//   const { data, error } = useFetch("/order/fetch");

//   if (error) {
//     return <div>Error fetching orders: {error.message}</div>;
//   }

//   // Show loading while fetching data
//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   // Handle the case where data is empty
//   if (data.length === 0) {
//     return <div>No orders found.</div>;
//   }

//   console.log("hjgfdhjgfds", data);

//   return (
//     <div id="order-success">
//       <h1 className="order-title">My Order</h1>
//       {data && (
//         <ul className="order-list">
//           {data.map((result) =>
//             result.map((orderDetails) => (
//               <li key={orderDetails._id} className="order-item">
//                 <h2 className="order-id">Order ID: {orderDetails._id}</h2>
                
//                 <p className="order-subtotal">
//                   Subtotal:{orderDetails.subtotal}
//                 </p>
//                 <p className="order-discount">
//                   Discount Amount:{orderDetails.discount}
//                 </p>
//                 <p className="order-fee">
//                   Delivery Fee:{orderDetails.deliveryFee}
//                 </p>
//                 <p className="order-total">Total:{orderDetails.productDetails.total}</p>

//                 <ul className="item-list">
//                   <li key={orderDetails.productDetails._id} className="item">
//                     <p className="item-title">
//                       Product Name: {orderDetails.productDetails.title}
//                     </p>
//                     <p className="item-discount">
//                       Discount:{orderDetails.productDetails.discount}
//                     </p>
//                     <p className="item-color">
//                       Color:{orderDetails.productDetails.color}
//                     </p>
//                     <p className="item-size">
//                       Size: {orderDetails.productDetails.size}
//                     </p>
//                     <p className="item-quantity">
//                       Quantity: {orderDetails.productDetails.quantity}
//                     </p>
//                     <p className="item-price">
//                       Price:{orderDetails.productDetails.price}
//                     </p>

//                     <img
//                       src={`data:${orderDetails.productDetails.image.fileType};base64,${orderDetails.productDetails.image.fileContent}`} // Correct access to imageUrl
//                       alt={orderDetails.productDetails.title}
//                       className="item-image"
//                       style={{ width: "100px", height: "100px" }}
//                     />
//                   </li>
//                 </ul>
//               </li>
//             ))
//           )}
//         </ul>
//       )}
   
//     </div>
//   );
// };

// export default Order;

import { useFetch } from "../hooks/useFetch";
import styles from '../styles/Order.module.css'
import { Link } from "react-router-dom";

const Order = () => {
  const { data, error } = useFetch("/order/fetch");

  if (error) {
    return <div>Error fetching orders: {error.message}</div>;
  }

  // Show loading while fetching data
  if (!data) {
    return <div>Loading...</div>;
  }

  // Handle the case where data is empty
  if (data.length === 0) {
    return <div>No orders found.</div>;
  }

  console.log("Order data:", data);

  return (
    <div id="order-success">
      < a href="/"><h1 className="order-title" style={{color:"black",textDecoration:"none"}}>My Order</h1></a>
      {data && (
        
        <ul className="order-list">
          {data.map((orderItems, index) => (
            <li key={index} className="order-item">
              {orderItems.map((orderDetails) => (
                <div key={orderDetails._id}>
                  <h2 className="order-id">Order ID: {orderDetails._id}</h2>
                  <ul className="item-list">
                    <li key={orderDetails.productDetails._id} className="item">
                      <p className="item-title">
                        Product Name: {orderDetails.productDetails.title}
                      </p>
                      <p className="item-color">
                        Color: {orderDetails.color}
                      </p>
                      <p className="item-size">
                        Size: {orderDetails.size}
                      </p>
                      <p className="item-quantity">
                        Quantity: {orderDetails.quantity}
                      </p>
                      
<p>Rating:{orderDetails.productDetails.rating}</p>
                      <p className="item-price">
                        Price:{orderDetails.productDetails.price}
                      </p>
                      <Link to={`/Productdetails/${orderDetails._id}`}>
                      <img
                        src={`data:${orderDetails.productDetails.image.fileType};base64,${orderDetails.productDetails.image.fileContent}`}
                        alt={orderDetails.productDetails.title}
                        className="item-image"
                        style={{ width: "150px", height: "150px" ,marginLeft:"20rem",marginTop:"-12rem",position:"absolute"}}
                      />
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </li>
          ))}
        </ul>
        
      )}
      
    </div>
  
  );
};

export default Order;
