import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component.jsx";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-action.js";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
    <div className="cart-dropdown">
        {
            cartItems.length ? (
                <React.Fragment>
                    <Container fluid className="cart-items">
                        { cartItems && cartItems.map(item => <CartItem key={item.id} {...item} />) }
                    </Container>
                    <Button
                        variant="dark"
                        onClick={
                            () => {
                                toggleCartHidden();
                                history.push("/checkout");
                            }
                        }
                        >GO TO CHECKOUT</Button>
                </React.Fragment>
            ) : (
                <span className="cart-is-empty-span">Your cart is empty!</span>
            )
        }
    </div>
);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: toggle => dispatch(toggleCartHidden(toggle))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
