import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./redux/reducers";
import { authAction_getMyInfo } from "./redux/actions";
import history from "./history";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

const store = createStore(reducers, applyMiddleware(reduxThunk));
const token = JSON.parse(localStorage.getItem("token"));
if (token) {
    store.dispatch(authAction_getMyInfo());
} else {
    history.push("/login");
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
