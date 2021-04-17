import cartTypes from "./cart-types.js"
import { handleAddItemToCart } from "./cart.utils.js";

const INITIAL_STATE = {
    dropdownHidden: true,
    cartItems: [],
    cartItemCount: 0
};

const cartReducer = (state=INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case cartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                dropdownHidden: !state.dropdownHidden
            };
        case cartTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: handleAddItemToCart(state.cartItems, payload),
                cartItemCount: state.cartItemCount + 1
            };
        default:
            return state;
    }
};

export default cartReducer;
