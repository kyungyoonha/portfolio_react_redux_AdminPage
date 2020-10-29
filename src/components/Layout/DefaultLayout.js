import React from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout";

const DefaultLayout = ({ route }) => {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            title={route.title}
            render={(props) => (
                <Layout>
                    <route.component {...props} />
                </Layout>
            )}
        />
    );
};

export default DefaultLayout;
