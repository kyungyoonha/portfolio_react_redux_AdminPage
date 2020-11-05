import React from "react";
import "./App.scss";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <div className="app">
            <ToastContainer
                autoClose={2500}
                position="top-right"
                closeButton={false}
            />
            <Routes />
        </div>
    );
};

export default App;
