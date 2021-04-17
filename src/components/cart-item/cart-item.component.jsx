import React from "react";
import { Row, Col } from "react-bootstrap";

const CartItem = ({ name, price, imageUrl, quantity }) => {
    return (
        <Row className="cart-item">
            <Col xs={6} className="text-left text-center">
                <div className="img-container">
                    <img src={imageUrl} alt="item" />
                </div>
            </Col>
            <Col xs={6} className="text-left align-self-center">
                <div className="item-details">
                    <span className="item-name">{name}</span>
                    <br />
                    <span className="item-price-quantity">{quantity} x {price}$</span>
                </div>
            </Col>
        </Row>
    );
};

export default CartItem;
