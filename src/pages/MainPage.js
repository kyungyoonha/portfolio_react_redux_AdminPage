import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes";
import Layout from "../Layout/Layout";

const MainPage = () => {
    return (
        <Switch>
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
        </Switch>
    );
};

export default MainPage;
