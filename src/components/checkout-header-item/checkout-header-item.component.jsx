import React from "react";

const CheckoutHeaderItem = ({ cartItem, reduceItemFromCart, addItemToCart, removeItemFromCart }) => {
    const { name, quantity, price, imageUrl } = cartItem;

    return (
        <tr>
            <td>
                <div className="checkout-product-img-container">
                    <img src={imageUrl} alt="Checkout Product" />
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
                        >&lsaquo;
                    </span>
                    <span className="quantity">{quantity}</span>
                    <span
                        className="quantity-increase"
                        onClick={() => addItemToCart(cartItem)}
                        >&rsaquo;
                    </span>
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
};

export default CheckoutHeaderItem;
