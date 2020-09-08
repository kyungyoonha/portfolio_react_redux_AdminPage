import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./App.css";
import routes from "./routes";

// pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// container
import Layout from "./containers/Layout";

const App = () => {
    return (
        <div className="app">
            <Router history={history}>
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
                    <Route path="signup" title="회원가입" component={Signup} />
                    <Route path="login" title="로그인" component={Login} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
