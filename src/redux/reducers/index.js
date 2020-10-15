import { combineReducers } from "redux";
import userReducers from "./userReducers";
import boardReducers from "./boardReducers";

export default combineReducers({
    user: userReducers,
    board: boardReducers,
});
