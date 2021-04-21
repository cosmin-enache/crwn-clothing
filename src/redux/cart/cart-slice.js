import cartTypes from "./cart-types.js"
import { handleAddItemToCart, handleRemoveItemFromCart, handleReduceItemFromCart } from "./cart.utils.js";

const INITIAL_STATE = {
    dropdownHidden: true,
    cartItems: [],
    cartItemCount: 0,
    totalCost: cartItems => cartItems.reduce((total, item) => {
        total += item.quantity * item.price;

        return total;
    }, 0)
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
        case cartTypes.REDUCE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: handleReduceItemFromCart(state.cartItems, payload),
                cartItemCount: state.cartItemCount - 1
            };
        case cartTypes.REMOVE_ITEM_FROM_CART:
            const { cartItems, cartItemCount } = handleRemoveItemFromCart(state.cartItems, state.cartItemCount, payload);

            return {
                ...state,
                cartItems,
                cartItemCount
            };
        default:
            return state;
    }
};

export default cartReducer;
