import { Modal, Navbar } from "react-bootstrap";
import { useState } from "react";

function NavBarComponent() {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);
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
            <span className="cartCount">0</span>
          </button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={closeModal}>
        {/* closeButton is built in prop in bootstrap for showing and styling x button for closing -defaults to true*/}
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Modal Body Placeholder</h1>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavBarComponent;
