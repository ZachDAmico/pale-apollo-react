import { Row, Col } from "react-bootstrap";
import NavBarComponent from "../components/NavBar";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import ShowCard from "../components/ShowCard";

function Shows() {
  // useState will hold the retrieved data that the useEffect fetches here, so the component can use it
  const [shows, setShows] = useState([]);

  // not seeing any shows on the url because they haven't been mapped in the JSX yet, so using console.log to make sure they are being fetched first
  console.log(shows);

  // because the shows are not hardcoded or even stored locally, we need to use useEffect because we are connecting to an api to get the data we need
  // we want to display the shows immediately. the backend did all the work already, this just needs to fetch shows from backend via the url and stores them in state

  useEffect(() => {
    // remember every fetch needs to be parsed/"unwrapped"
    fetch(`http://localhost:4000/shows`)
      // .then() used to wait for response from the fetch
      // naming that response "response" right here as parameter, then apply .json() to "unwrap" raw data of response
      .then((response) => response.json())
      // now taking that "unwrapped" data and saving it/updating the shows state by passing in that data
      .then((data) => setShows(data));
  }, []); //now that this is done, you'd set up the route

  return (
    <>
      <Container>
        <NavBarComponent></NavBarComponent>
        <h1 align="center">Upcoming Shows</h1>
        {/* dictating how many rows depending on screen size */}
        <Row xs={1} md={3}>
          <Col className="text-center">
            {shows.map((show) => (
              // need a unique identifier for each show, so key is necessary to prevent duplicates and ids are normally used for this
              // show= is prop name being passed into ShowCard here
              // that name needs to match the props.show so ShowCard knows that it's the prop it's looking for even though i created ShowCard first
              // {show} is the actual data as a result of the map
              <ShowCard key={show.id} show={show} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Shows;
