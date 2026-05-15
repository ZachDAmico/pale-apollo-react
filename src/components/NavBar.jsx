import { Navbar } from "react-bootstrap";

function NavBarComponent() {
  return (
    <Navbar expand="sm">
      {/* Navbar.Toggle - auto-generated hamburger icon, only appears below 576px */}
      <Navbar.Toggle />

      {/* Navbar.Collapse - hides on small screens, shows when hamburger is clicked.
          justify-content-end pushes contents to the right */}
      <Navbar.Collapse className="justify-content-end">
        <button className="cartButton">
          <img src="/media/cart.png" alt="cart" />
          <span className="cartCount">0</span>
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
