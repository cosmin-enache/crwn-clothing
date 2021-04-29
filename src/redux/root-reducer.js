import { combineReducers } from "redux";
import userReducer from "./user/user-slice.js";
import cartReducer from "./cart/cart-slice.js";
import directoryReducer from "./directory/directory.reducer.js";
import shopReducer from "./shop/shop.reducer.js";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default rootReducer;
