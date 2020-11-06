import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction_logout } from "../../redux/actions/authActions";
import navConfig from "../../siteConfig/navConfig";

const Sidebar = ({ isOpen, handleClickOpen }) => {
    const navList = ["dashboard", "member", "package", "order", "cs"];
    const dispatch = useDispatch();
    const { email, username } = useSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(authAction_logout());
    };
    return (
        <div className={`sidebar ${isOpen && "on"}`}>
            <div className="sidebar__menu">
                <i
                    className="sidebar__close fas fa-times "
                    onClick={() => handleClickOpen()}
                ></i>

                <div className="sidebar__user">
                    <p>
                        ※ 관리자: <span>{username}</span>
                    </p>
                    <p>
                        ※ 이메일: <span>{email}</span>
                    </p>
                    <button
                        type="button"
                        className="btn btn-secondary btn-sm btn-block"
                        onClick={handleLogout}
                    >
                        로그아웃
                    </button>
                </div>
                {navList.map((nav) => {
                    let { path, title, icon } = navConfig[nav];
                    return (
                        <NavLink key={path} to={path} activeClassName="active">
                            <div className="sidebar__content">
                                <i className={`fas fa-${icon}`}></i>
                                {title}
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
