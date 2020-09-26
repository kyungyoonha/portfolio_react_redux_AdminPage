import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

import Breadcrumb from "./Breadcrumb/Breadcrumb";

const Header = () => {
    return (
        <div className="header">
            <div className="header__title">
                <Link to="/dashboard">TRIPSODA</Link>
            </div>
            <Breadcrumb />
        </div>
    );
};

export default Header;
