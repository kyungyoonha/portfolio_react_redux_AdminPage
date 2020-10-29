import React from "react";
import "./App.scss";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

import Login from "./pages/Login/Login";

const App = () => {
    const user = useSelector((state) => state.user);
    return (
        <div className="app">
            <ToastContainer
                autoClose={2500}
                position="top-right"
                closeButton={false}
            />
            {!user.token ? <Login /> : <Routes />}
        </div>
    );
};

export default App;
