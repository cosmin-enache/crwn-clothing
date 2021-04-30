import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Navbar, Nav } from "react-bootstrap";
import { auth } from "../../firebase/firebase.utils.js";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";
import { toggleCartHidden } from "../../redux/cart/cart-action.js";

const Header = ({ dropdownHidden, currentUser, toggleCartHidden }) => {
    return (
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
                    <Link className="nav-item" to="/user-auth" onClick={() => auth.signOut()}>
                    { currentUser ? "SIGN OUT" : "SIGN IN" }
                    </Link>
                    <CartIcon iconClick={toggleCartHidden}/>
                    { !dropdownHidden ? <CartDropdown /> : null }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    dropdownHidden: state.cart.dropdownHidden
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: args => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
