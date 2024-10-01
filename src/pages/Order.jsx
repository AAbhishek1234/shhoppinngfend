import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
//import '../styles/Orders.css';
import Footer from "../components/Footer";

const Orders = () => {
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Check if the token exists
    if (!localStorage.getItem("token")) {
      navigate("/"); // Redirect if no token
    }
  }, [navigate]); // Add navigate to the dependency array

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

  return (
    <div id="order-success">
      <a href="/"><h1 className="order-title" style={{color:"black"}}>My Order</h1></a>

      {data && (
        <ul className="order-list">
          {data.map((result) => (
            result.map((orderDetails) => (
              orderDetails && orderDetails.productDetails && ( // Add null check for orderDetails and productDetails
                <li key={orderDetails.productDetails._id} className="order-item">
                  <h2 className="order-id">Order ID: {orderDetails.productDetails._id}</h2>
                  <p className="user-id">User ID: {orderDetails.userId}</p>
                  <p className="order-subtotal">Subtotal: {orderDetails.subtotal}</p>
                  <p className="order-discount">Discount Amount: {orderDetails.discount}</p>
                  <p className="order-fee">Delivery Fee: {orderDetails.deliveryFee}</p>
                  <p className="order-total">Total: {orderDetails.total}</p>

                  <ul className="item-list">
                    <li key={orderDetails.productDetails._id} className="item">
                      <p className="item-title">Product Name: {orderDetails.productDetails.title}</p>
                      <p className="item-discount">Discount: ${orderDetails.productDetails.discount}</p>
                      <p className="item-color">Color: {orderDetails.productDetails.color} {orderDetails.color}</p>
                      <p className="item-size">Size: {orderDetails.productDetails.size} {orderDetails.size}</p>
                      <p className="item-quantity">Quantity: {orderDetails.quantity}</p>
                      <p className="item-price">Price: {orderDetails.price}</p>

                      <img
                        src={`data:${orderDetails.productDetails.image.fileType};base64,${orderDetails.productDetails.image.fileContent}`}
                        alt={orderDetails.productDetails.title}
                        className="item-image"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </li>
                  </ul>
                </li>
              )
            ))
          ))}
        </ul>
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default Orders;
