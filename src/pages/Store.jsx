import { Row, Col } from "react-bootstrap";
import { merchArray } from "../merch";
import NavBarComponent from "../components/NavBar";
import { Container } from "react-bootstrap";
import MerchCard from "../components/MerchCard";
function Store() {
  return (
    <>
      <Container>
        <NavBarComponent></NavBarComponent>
        <h1 align="center">Welcome to the Pale Apollo Merch Store</h1>
        {/* dictating how many rows depending on screen size */}
        <Row xs={1} md={3}>
          {/* mapping each object in merchArray, each object is defined as item
            passing item as a prop to MerchCard so it knows which product to display and storing that prop as item, hence item={item}*/}
          {/* text-center built in css class from bootstrap */}
          {merchArray.map((item) => (
            <Col className="text-center" key={item.id}>
              {/* need to pass in item as prop so MerchCard can access data for current object being mapped in merchArray */}
              <MerchCard item={item}></MerchCard>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Store;
