import React from "react";
import "./Layout.scss";

// containers
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import useOpen from "../Hooks/useOpen";

const Layout = ({ children }) => {
    const [isOpen, onClickOpen] = useOpen();

    return (
        <div className="layout">
            <Header onClick={onClickOpen} />
            <div className="layout__body">
                <Sidebar isOpen={isOpen} onClick={onClickOpen} />
                <div className="layout__content">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
