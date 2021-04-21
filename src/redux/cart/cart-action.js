import cartTypes from "./cart-types.js"

export const toggleCartHidden = () => ({
    type: cartTypes.TOGGLE_CART_HIDDEN,
    payload: null
});

export const addItemToCart = item => ({
    type: cartTypes.ADD_ITEM_TO_CART,
    payload: item
});

export const reduceItemFromCart = item => ({
    type: cartTypes.REDUCE_ITEM_FROM_CART,
    payload: item
});

export const removeItemFromCart = item => ({
    type: cartTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})
