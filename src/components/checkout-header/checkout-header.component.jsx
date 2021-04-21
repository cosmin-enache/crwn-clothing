import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { addItemToCart, reduceItemFromCart, removeItemFromCart } from "../../redux/cart/cart-action.js";
import CheckoutHeaderItem from "../checkout-header-item/checkout-header-item.component.jsx";

const CheckoutHeader = (props) => {
    const {
        cartItems,
        reduceItemFromCart,
        addItemToCart,
        removeItemFromCart,
        calculateTotalCost
    } = props;

    return (
        <React.Fragment>
            <Table className="checkout-header">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(cartItem => (
                            <CheckoutHeaderItem
                                cartItem={cartItem}
                                addItemToCart={addItemToCart}
                                reduceItemFromCart={reduceItemFromCart}
                                removeItemFromCart={removeItemFromCart}
                                />
                            )
                        )
                    }
                </tbody>
            </Table>
        <h1 className="header-total text-right font-weight-bold">TOTAL: { cartItems ? calculateTotalCost(cartItems) : 0 }$</h1>
    </React.Fragment>
);
}

const mapStateToProps = state => ({
    cartItems:              state.cart.cartItems,
    calculateTotalCost:     state.cart.totalCost
});

const mapDispatchToProps = dispatch => ({
    addItemToCart:          item => dispatch(addItemToCart(item)),
    reduceItemFromCart:     item => dispatch(reduceItemFromCart(item)),
    removeItemFromCart:     item => dispatch(removeItemFromCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutHeader);
