import cartTypes from "./cart-types.js"
import {
    handleAddItemToCart,
    handleRemoveItemFromCart,
    handleReduceItemFromCart,
    saveCartItemsLocally,
    loadCartItemsFromLocal
} from "./cart.utils.js";

let initialCartItems = loadCartItemsFromLocal() || [];

const INITIAL_STATE = {
    dropdownHidden: true,
    cartItems: initialCartItems,
    totalCost: cartItems => cartItems.reduce((total, item) => {
        total += item.quantity * item.price;

        return total;
    }, 0)
};

const cartReducer = (state=INITIAL_STATE, { type, payload }) => {
    if (type === cartTypes.TOGGLE_CART_HIDDEN) {
        return {
            ...state,
            dropdownHidden: !state.dropdownHidden
        };
    } else if (type === cartTypes.ADD_ITEM_TO_CART) {
        const newState = {
            ...state,
            cartItems: handleAddItemToCart(state.cartItems, payload),
        };

        saveCartItemsLocally(newState.cartItems);

        return newState;
    } else if (type === cartTypes.REDUCE_ITEM_FROM_CART) {
        const newState2 = {
            ...state,
            cartItems: handleReduceItemFromCart(state.cartItems, payload),
        };

        saveCartItemsLocally(newState2.cartItems);

        return newState2;
    } else if (type === cartTypes.REMOVE_ITEM_FROM_CART) {
        const {
            cartItems
        } = handleRemoveItemFromCart(state.cartItems, payload);

        const newState3 = {
            ...state,
            cartItems
        };

        saveCartItemsLocally(newState3.cartItems);

        return newState3;
    } else if (type === cartTypes.CLEAR_CART_ITEMS) {
        const newState4 = {
            ...state,
            cartItems: [],
        };

        saveCartItemsLocally(newState4.cartItems);

        return newState4;
    } else {
        return state;
    }
};

export default cartReducer;
