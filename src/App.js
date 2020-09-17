import React from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./App.css";
import routes from "./routes";

// pages
import Signup from './pages/signup/Signup';
import Login from "./pages/login/Login";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

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
                    <Route path="/member" exact render={() => <Redirect to="/member/user" />}/>
                    <Route path="/pages/signup" title="회원가입" component={Signup} />
                    <Route path="/pages/login" title="로그인" component={Login} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
