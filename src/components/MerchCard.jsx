import { Card, Row, Col, Form } from "react-bootstrap";
// props is generic name for all properties being passed as single object to MerchCard component in Store.jsx via the .map method passing "item"
function MerchCard(props) {
  // props.item is item being sold
  //   need to access the properties of each piece of merch(item) being mapped in Store.jsx then display that data, so each mapped item's properties being passed as props in Store.jsx item={item} continues here as props
  //   passing props in to gain access to each item's data
  const item = props.item;

  return (
    <Card>
      <Card.Img src={item.img} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>${item.price}</Card.Text>
        <button>Add to Cart</button>
      </Card.Body>
    </Card>
  );
}
export default MerchCard;
