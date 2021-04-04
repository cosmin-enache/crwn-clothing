import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => (
  <Navbar className="navbar" collapseOnSelect expand="lg" variant="light">
  <Link to="/">
    <Logo className="nav-logo" />
  </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto nav-item-container">
      <Link className="nav-item" to="/">HOME</Link>
      <Link className="nav-item" to="/shop">SHOP</Link>
      <Link className="nav-item" to="/contact">CONTACT</Link>
      <Link className="nav-item" to="/user-auth">SIGN IN</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

);

export default Header;
