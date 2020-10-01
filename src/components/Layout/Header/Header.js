import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

import Breadcrumb from "./Breadcrumb/Breadcrumb";

const Header = ({ handleClickOpen }) => {
    return (
        <div className="header">
            <div className="header__title">
                <i
                    className="fas fa-bars menuIcon"
                    onClick={() => handleClickOpen()}
                ></i>
                <Link to="/dashboard">TRIPSODA</Link>
            </div>
            <Breadcrumb />
        </div>
    );
};

export default Header;
