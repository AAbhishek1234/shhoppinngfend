import {useFetch} from "../hooks/useFetch"
const Order = () => {
    const {data,error} = useFetch("/order/fetch");

console.log(data);

  return (
    <>
    
    <h1>My Order</h1>

      {data && (
        <ul>
          {data.map((orderDetails) => (
            <li key={orderDetails._id}>
              <h2>Order ID: {orderDetails._id}</h2>
              
              <p>Total: ${orderDetails.total}</p>
              <p>Status: {orderDetails.status}</p>
              <ul>
                {orderDetails.items.map((item) => (
                  <li key={item.productId}>
                    <p>Product Name: {item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                     <p>Price: ${item.price}</p>
                 </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
       )} 

    </>
  )
}

export default Order