import { Card, Row, Col, Form } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
// props is generic name for all properties being passed as single object to MerchCard component in Store.jsx via the .map method passing "item"
function MerchCard(props) {
  // props.item is item being sold
  //   need to access the properties of each piece of merch(item) being mapped in Store.jsx then display that data, so each mapped item's properties being passed as props in Store.jsx item={item} continues here as props
  //   passing props in to gain access to each item's data
  const item = props.item;

  // gives us access to cartContext
  const cart = useContext(CartContext);
  // now using context defined in cartContext
  // passing in id as argument here because id is parameter in function definition
  // needs to be item.id because of const item = props.item
  const itemQuantity = cart.getItemQuantity(item.id);

  // not entirely sure how we have access to items - check later
  console.log(cart.items);

  return (
    <Card>
      <Card.Img src={item.img} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>${item.price}</Card.Text>
        {itemQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {itemQuantity}
              </Form.Label>
              <Col sm="6">
                <button
                  sm="6"
                  onClick={() => cart.addOneToCart(item.id)}
                  className="mx-2"
                >
                  +
                </button>
                <button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(item.id)}
                  className="mx-2"
                >
                  -
                </button>
              </Col>
            </Form>
            <button onClick={() => cart.deleteAllOfOneItemFromCart(item.id)}>
              Remove
            </button>
          </>
        ) : (
          // /* needs to be cart. to have access to context */
          <button onClick={() => cart.addOneToCart(item.id)}>
            Add to Cart
          </button>
        )}
      </Card.Body>
    </Card>
  );
}
export default MerchCard;
