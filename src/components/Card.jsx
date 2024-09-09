import { useNavigate } from "react-router-dom";
import "./Ncard.css";
import {useStore} from "../services/lib/zustand"
const Card = ({ product }) => {
  const navigate = useNavigate();
const {setProductId} = useStore()
  const handleClick = () => {
    setProductId(product._id)
    //console.log(product._id)
    navigate('/Cart');
  };
  return (
    <div className="t-shirt" onClick={handleClick}>
      <img
        src={`data:${product.image.fileType};base64,${product.image.fileContent}`}
        alt="T-shirt with Tape Details"
      />
      <p className="p8">{product.title}</p>
      <p id="ratii">{product.rating}</p>
      <p id="product">{product.price}</p>
    </div>
    
  );
};

export default Card;
