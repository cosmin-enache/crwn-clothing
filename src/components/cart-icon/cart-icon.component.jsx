import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";

const CartIcon = ({ iconClick, cartItemCount }) => {
    return (
        <div onClick={iconClick} className="cart-icon">
            <ShoppingIcon className="cart-icon-svg"/>
            <span className="item-count">{cartItemCount}</span>
        </div>
    );
}

const mapStateToProps = state => ({
    cartItemCount: state.cart.cartItemCount
});

export default connect(mapStateToProps)(CartIcon);
