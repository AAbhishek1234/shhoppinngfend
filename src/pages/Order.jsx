// import { useFetch } from "../hooks/useFetch";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// //import '../styles/Orders.css';
// import Footer from "../components/Footer";

// const Orders = () => {
//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     // Check if the token exists
//     if (!localStorage.getItem("token")) {
//       navigate("/"); // Redirect if no token
//     }
//   }, [navigate]); // Add navigate to the dependency array

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

//   return (
//     <div id="order-success">
//       <a href="/"><h1 className="order-title" style={{color:"black"}}>My Order</h1></a>

//       {data && (
//         <ul className="order-list">
//           {data.map((result) => (
//             result.map((orderDetails) => (
//               orderDetails && orderDetails.productDetails && ( // Add null check for orderDetails and productDetails
//                 <li key={orderDetails.productDetails._id} className="order-item">
//                   <h2 className="order-id">Order ID: {orderDetails.productDetails._id}</h2>
//                   <p className="user-id">User ID: {orderDetails.userId}</p>
//                   <p className="order-subtotal">Subtotal: {orderDetails.subtotal}</p>
//                   <p className="order-discount">Discount Amount: {orderDetails.discount}</p>
//                   <p className="order-fee">Delivery Fee: {orderDetails.deliveryFee}</p>
//                   <p className="order-total">Total: {orderDetails.total}</p>

//                   <ul className="item-list">
//                     <li key={orderDetails.productDetails._id} className="item">
//                       <p className="item-title">Product Name: {orderDetails.productDetails.title}</p>
//                       <p className="item-discount">Discount: ${orderDetails.productDetails.discount}</p>
//                       <p className="item-color">Color: {orderDetails.productDetails.color} {orderDetails.color}</p>
//                       <p className="item-size">Size: {orderDetails.productDetails.size} {orderDetails.size}</p>
//                       <p className="item-quantity">Quantity: {orderDetails.quantity}</p>
//                       <p className="item-price">Price: {orderDetails.price}</p>

//                       <img
//                         src={`data:${orderDetails.productDetails.image.fileType};base64,${orderDetails.productDetails.image.fileContent}`}
//                         alt={orderDetails.productDetails.title}
//                         className="item-image"
//                         style={{ width: "100px", height: "100px" }}
//                       />
//                     </li>
//                   </ul>
//                 </li>
//               )
//             ))
//           ))}
//         </ul>
//       )}
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default Orders;






import { useFetch } from "../hooks/useFetch";
import Footer from "../components/Footer";

const Orders = () => {
  const { data, error } = useFetch("/Order/fetch");

  if (error) {
    return <div>Error fetching orders: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <div>No orders found.</div>;
  }

  console.log(data);

  return (
    <div id="order-success">
      <h1 className="order-title">My Order</h1>
      {data && (
        <ul className="order-list">
          {data.map((order) => (
            <li key={order._id} className="order-item">
              <h2 className="order-id">Order ID: {order._id}</h2>
              <p className="order-subtotal">Subtotal: {order.subtotal}</p>
              <p className="order-discount">Discount Amount: {order.discount}</p>
              <p className="order-fee">Delivery Fee: {order.deliveryFee}</p>
              <p className="order-total">Total: {order.total}</p>
              <p className="order-total">orderPlaced: {order.placedAt}</p>

              <ul className="item-list">
                {order.items.map((item) => (
                  <li key={item._id} className="item">
                    <p className="item-title">Product Name: {item.productDetails.title}</p>
                    {/* <p className="item-discount">Discount: {item.productDetails.discount}</p> */}
                    <p className="item-color">Color: {item.color}</p>
                    <p className="item-size">Size: {item.size}</p>
                    <p className="item-quantity">Quantity: {item.quantity}</p>
                    <p className="item-price">Price: {item.price}</p>

                    {item.productDetails.image && item.productDetails.image.fileContent ? (
                      <img 
                        src={`data:${item.productDetails.image.fileType};base64,${item.productDetails.image.fileContent}`}
                        alt={item.productDetails.title}
                        className="item-image"
                        style={{ width: "100px", height: "100px" }}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
};

export default Orders;