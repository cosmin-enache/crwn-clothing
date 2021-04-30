import React from "react";
import { Col } from "react-bootstrap";
import { addItemToCart } from "../../redux/cart/cart-action.js";
import { connect } from "react-redux";

const CollectionItem = ({ addItemToCart, cartItems, ...itemData }) =>
{
    return (
        <Col
            xs={12}
            md={6}
            lg={4}
            xl={3}
            className="padMore"
            >
            <article className="collection-item">
                <div className="bg-img-container">
                    <button
                        onClick={
                            () => addItemToCart({...itemData})
                        }
                        >ADD TO CART</button>
                    <img className="bg-img" src={itemData.imageUrl} alt="background" />
                </div>
                <span className="name">{itemData.name}</span>
                <span className="price">${itemData.price}</span>
            </article>
        </Col>
    );
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
