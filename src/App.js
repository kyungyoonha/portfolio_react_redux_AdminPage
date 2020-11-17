import React from "react";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import history from "./history";
import routes from "./routes";

import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

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
                    <Route path="/login" exact component={Login} />
                    <Route path="/404" exact component={PageNotFound} />
                    {routes.map((route, idx) => (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            title={route.title}
                            render={(props) => (
                                <Layout>
                                    <route.component {...props} />
                                </Layout>
                            )}
                        />
                    ))}
                    <Redirect from="/member" to="/member/user" />
                    <Redirect from="/package" to="/package/tour" />
                    <Redirect from="/order" to="/order/purchase" />
                    <Redirect from="/cs" to="/cs/push" />
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
