import { Modal, Navbar } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./cartProduct";

function NavBarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);
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
          <button onClick={openModal} className="cartButton">
            <img src="/media/cart.png" alt="cart" />
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
              <button>Purchase</button>
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
