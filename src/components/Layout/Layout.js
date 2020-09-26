import React from "react";
import "./Layout.scss";

// containers
import Sidebar from "./Sidebar.js/Sidebar";
import Header from "./Header/Header";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="layout__body">
                <Sidebar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
