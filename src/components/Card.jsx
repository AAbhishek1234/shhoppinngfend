import { useNavigate } from "react-router-dom";
import styles from '../styles/card.module.css'
const Card = ({ product,handleClick }) => {
  const navigate = useNavigate();
  const click = () => {
    handleClick(product._id)
  };
  return (
    <div className={styles.tshirt} onClick={click}>
      <img
        src={`data:${product.image.fileType};base64,${product.image.fileContent}`}
        alt="T-shirt with Tape Details"
      />
      <p id={styles.p8}>{product.title}</p>
      <p id={styles.ratii}>{product.rating}</p>
      <p id={styles.product}>{product.price}</p>
    </div>
    
  );
};

export default Card;
