import { Modal, Navbar, Nav } from "react-bootstrap";
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

function NavBarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);
  const checkout = async () => {
    await fetch("https://pale-apollo-react.onrender.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // we have access to cart.items because of the useContext above
      // this is where we pass items in cart over to backend to be formatted in the server.json
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
        // this is the url response defined in server.json
      })
      .then((response) => {
        // if url exists, send user to that url
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  // we don't have a function defined to count items in cart, but only need it for a "one off", so we can create it here
  const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <Navbar expand="sm">
        {/* Navbar.Toggle - auto-generated hamburger icon, only appears below 576px */}
        <Navbar.Toggle />

        {/* Navbar.Collapse - hides on small screens, shows when hamburger is clicked.
          justify-content-end pushes contents to the right */}
        
        <Navbar.Collapse className="justify-content-end">
          {/* Nav wraps a group of links - like a styled ul specifically for navbars */}
          {/* me-auto adds margin-right: auto which pushes everything after it to the right */}
          <Nav className="me-auto">
            {/* only show home link when not on home page */}
            {location.pathname !== "/" && (
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            )}
            {/* only show store link when not on store page */}
            {location.pathname !== "/store" && (
              <Nav.Link as={Link} to="/store">
                Store
              </Nav.Link>
            )}
            {/* only show shows link when not on shows page */}
            {location.pathname !== "/shows" && (
              <Nav.Link as={Link} to="/shows">
                Shows
              </Nav.Link>
            )}
          </Nav>

          {/* second Nav group for social links - sits to the right because of me-auto above */}
          <Nav>
            {/* Nav.Link is a styled link item inside Nav - like a styled li/a combo */}
            <Nav.Link
              href="https://instagram.com/paleapolloband"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="instagramLogo" src="/media/instagram.png" />
            </Nav.Link>
            <Nav.Link href="mailto:paleapollo@gmail.com">
              <img className="emailLogo" src="/media/email.png" />
            </Nav.Link>
          </Nav>

          {/* cart button stays on far right */}
          <button onClick={openModal} className="cartButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="cartIcon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="cartCount"> ({cartCount} Items) </span>
          </button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={closeModal}>
        {/* closeButton is built in prop in bootstrap for showing and styling x button for closing -defaults to true*/}
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentItem, index) => (
                <CartProduct
                  key={index}
                  id={currentItem.id}
                  quantity={currentItem.quantity}
                ></CartProduct>
              ))}
              {/* .toFixed rounds to defined number of decimal places */}
              <h1>Total: ${cart.getTotalCostOfCart().toFixed(2)}</h1>
              <button onClick={checkout}>Purchase</button>
            </>
          ) : (
            <h1>There are no items in your cart</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavBarComponent;
