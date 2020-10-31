import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./redux/reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import history from "./history";
import axios from "axios";
import { authAction_getMyInfo } from "./redux/actions";

const store = createStore(reducers, applyMiddleware(reduxThunk));

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
const token = JSON.parse(localStorage.getItem("token"));
if (token) {
    axios.defaults.headers.common["Authorization"] = token;
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
