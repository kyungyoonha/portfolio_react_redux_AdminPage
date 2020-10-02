import React from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./App.scss";
import routes from "./routes";


// pages
import Signup from './pages/Signup/Signup';
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

// container
import Layout from "./components/Layout/Layout";


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
                    <Route path="/user" exact render={() => <Redirect to="/user/member" />}/>
                    <Route path="/tourarea" exact render={() => <Redirect to="/tourarea/area" />}/>
                    <Route path="/tourpackage" exact render={() => <Redirect to="/tourpackage/purchinfo" />}/>
                    <Route path="/pages/signup" title="회원가입" component={Signup} />
                    <Route path="/pages/login" title="로그인" component={Login} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
