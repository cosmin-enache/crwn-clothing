import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component.jsx";

const CheckoutPage = () => (
    <div id="checkoutPage">
        <h1 className="sp-title padMeMore">Checkout</h1>
        <Container>
            <Row>
                <Col xs={12} className="text-center">
                    <CheckoutHeader />
                </Col>
            </Row>
        </Container>
    </div>
);

export default CheckoutPage;
