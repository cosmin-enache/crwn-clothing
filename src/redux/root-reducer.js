import { combineReducers } from "redux";
import userReducer from "./user/user-slice.js";
import cartReducer from "./cart/cart-slice.js";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default rootReducer;
