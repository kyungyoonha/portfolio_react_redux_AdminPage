import React from "react";
import { Route } from "react-router-dom";
import Layout from "../components/Layout";
import Content2 from "../components/Content/Content2";

const FormLayout = ({ component: Component, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => (
                <Layout>
                    <Content2 path={path} type="form">
                        <Component {...props} />
                    </Content2>
                </Layout>
            )}
        />
    );
};

export default FormLayout;
