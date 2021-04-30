import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";

const CartIcon = ({ iconClick, cartItems }) => {
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div onClick={iconClick} className="cart-icon">
            <ShoppingIcon className="cart-icon-svg"/>
            <span className="item-count">{cartItemCount}</span>
        </div>
    );
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartIcon);
