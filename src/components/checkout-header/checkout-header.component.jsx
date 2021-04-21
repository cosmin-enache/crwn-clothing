import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { addItemToCart, reduceItemFromCart, removeItemFromCart } from "../../redux/cart/cart-action.js";

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
                        cartItems.reduce((a, cartItem, i) => {
                            const { id, name, quantity, price, imageUrl } = cartItem;

                            a.push(
                                <tr key={i}>
                                    <td>
                                        <div className="checkout-product-img-container">
                                            <img src={imageUrl} />
                                        </div>
                                    </td>
                                    <td>
                                        <span>{name}</span>
                                    </td>
                                    <td className="text-center">
                                        <div className="quantity-wrapper">
                                            <span
                                                className="quantity-decrease"
                                                onClick={() => reduceItemFromCart(cartItem)}
                                                >&lsaquo;</span>
                                            <span className="quantity">{quantity}</span>
                                            <span
                                                className="quantity-increase"
                                                onClick={() => addItemToCart(cartItem)}
                                                >&rsaquo;</span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <span>{price}$</span>
                                    </td>
                                    <td className="text-center">
                                        <span
                                            className="remove-x"
                                            onClick={() => removeItemFromCart(cartItem)}
                                            >&#128473;</span>
                                    </td>
                                </tr>
                            );
                            return a;
                        }, [])
                    }
                </tbody>
            </Table>
            <h1 className="text-right font-weight-bold">TOTAL: { cartItems ? calculateTotalCost(cartItems) : 0 }$</h1>
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
