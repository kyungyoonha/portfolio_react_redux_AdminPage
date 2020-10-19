import React from "react";
import { Route } from "react-router-dom";
import Layout from "../components/Layout";

const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
};

export default DefaultLayout;
