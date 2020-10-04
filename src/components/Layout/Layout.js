import React, { useState } from "react";
import "./Layout.scss";

// containers
import Sidebar from "./Sidebar.js/Sidebar";
import Header from "./Header/Header";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen((state) => !state);
    };

    return (
        <div className="layout">
            <Header handleClickOpen={handleClickOpen} />
            <div className="layout__body">
                <Sidebar isOpen={isOpen} handleClickOpen={handleClickOpen} />
                {children}
            </div>
        </div>
    );
};

export default Layout;
