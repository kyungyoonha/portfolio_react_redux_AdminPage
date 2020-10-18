import { combineReducers } from "redux";
import userReducers from "./userReducers";
import boardReducers from "./boardReducers";
import fileReducers from "./fileReducers";

export default combineReducers({
    user: userReducers,
    file: fileReducers,
    board: boardReducers,
});
