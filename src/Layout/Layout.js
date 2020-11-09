import React, { useState } from "react";
import "./Layout.scss";

// containers
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const Layout = ({ route, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen((state) => !state);
    };

    return (
        <div className="layout">
            <Header handleClickOpen={handleClickOpen} />
            <div className="layout__body">
                <Sidebar isOpen={isOpen} handleClickOpen={handleClickOpen} />
                <div className="layout__content">{children}</div>
            </div>
        </div>
    );
};

export default Layout;