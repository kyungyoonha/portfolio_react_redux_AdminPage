import React from "react";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";

// Pages
import MainPage from "./pages/MainPage";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./pages/LoginPage";

const App = () => {
    return (
        <div className="app">
            <ToastContainer
                autoClose={2500}
                position="top-right"
                closeButton={false}
            />
            <Router history={history}>
                <Switch>
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/404" exact component={PageNotFound} />
                    <Route path="/" component={MainPage} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
