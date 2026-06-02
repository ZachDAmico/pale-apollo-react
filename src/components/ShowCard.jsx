import { Card, Row, Col, Form } from "react-bootstrap";

function ShowCard(props) {
  const show = props.show;

  return (
    <>
      <Card>
        <Card.Img src="/media/IMG_3894 (1).jpg" alt={show.title} />
        <Card.Title>{show.title}</Card.Title>
        <Card.Text>{show.venue.name}</Card.Text>
        <Card.Text>{show.venue.street_address}</Card.Text>
        <Card.Text>{show.venue.location}</Card.Text>
        {/* 2 different ternaries
      first is checking the offers.length because if it's greater than 0, that means tickets are available and the proper corresponding url desination
      second is the text to show tickets if the length is greater than 0 and details if no tickets */}
      </Card>
      <a href={show.offers.length > 0 ? show.offers[0].url : show.url}>
        {show.offers.length > 0 ? "Tickets" : "Details"}
      </a>
    </>
  );
}
export default ShowCard;
