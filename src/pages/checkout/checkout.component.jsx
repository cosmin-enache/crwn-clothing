import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component.jsx";
import { connect } from "react-redux";

const CheckoutPage = ({ cartItems }) => (
    <div id="checkoutPage">
        <h1 className="sp-title padMeMore">Checkout</h1>
        <Container>
            <Row>
                <Col xs={12} className="text-center">
                    { cartItems.length ? <CheckoutHeader /> : <h1>No items in cart!</h1>}
                </Col>
            </Row>
        </Container>
    </div>
);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CheckoutPage);
