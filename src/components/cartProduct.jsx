import { CartContext } from "../CartContext";
import { useContext } from "react";
// importing this to get access to id and price
import { getMerchData } from "../merch";

// passing props here because we need access to id and quantity for those specific items in cart
function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const merchData = getMerchData(id);

  return (
    <>
      <h3>{merchData.name}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * merchData.price).toFixed(2)}</p>
      <button onClick={() => cart.deleteAllOfOneItemFromCart(id)}>
        Remove
      </button>
      <hr></hr>
    </>
  );
}

export default CartProduct;
