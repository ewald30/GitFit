import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { themeReducer } from "./theme";

const reducers = combineReducers({
    auth: authReducer,
    themeState: themeReducer
})

export default reducers;