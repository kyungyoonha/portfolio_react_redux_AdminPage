import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../../history";

import authReducers from "./authReducers";
import boardReducers from "./boardReducers";
import fileReducers from "./fileReducers";
import formReducers from "./formReducers";

export default combineReducers({
    auth: authReducers,
    file: fileReducers,
    board: boardReducers,
    form: formReducers,
    router: connectRouter(history),
});
