import { Card, Row, Col, Form } from "react-bootstrap";
function MerchCard(props) {
  // props.item is item being sold
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
