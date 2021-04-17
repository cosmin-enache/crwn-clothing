import cartTypes from "./cart-types.js"

export const toggleCartHidden = () => ({
    type: cartTypes.TOGGLE_CART_HIDDEN,
    payload: null
});

export const addItemToCart = item => ({
    type: cartTypes.ADD_ITEM_TO_CART,
    payload: item
});
