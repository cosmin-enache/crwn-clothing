import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component.jsx";
import { Container } from "react-bootstrap";

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <Container fluid className="cart-items">
            { cartItems && cartItems.map(item => <CartItem key={item.id} {...item} />) }
        </Container>
        <Button variant="dark">GO TO CHECKOUT</Button>
    </div>
);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
