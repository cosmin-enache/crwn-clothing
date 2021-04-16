import { combineReducers } from "redux";
import userReducer from "./user/user-slice.js";

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;
