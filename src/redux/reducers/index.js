import { combineReducers } from "redux";

import authReducers from "./authReducers";
import boardReducers from "./boardReducers";
import fileReducers from "./fileReducers";
import formReducers from "./formReducers";

export default combineReducers({
    auth: authReducers,
    file: fileReducers,
    board: boardReducers,
    form: formReducers,
});
