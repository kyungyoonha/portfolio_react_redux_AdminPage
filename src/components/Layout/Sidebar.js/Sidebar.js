import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const user = {
    name: "하경윤",
    email: "gkb10a@naver.com",
};

const routes = [
    { path: "/dashboard", title: "Dashboard", icon: "chart-pie" },
    { path: "/user", title: "회원정보", icon: "user-cog" },
    {
        path: "/tourarea",
        title: "관광지 관리",
        icon: "map-marked-alt",
    },
    { path: "/tourpackage", title: "투어 관리", icon: "route" },
    { path: "/notice", title: "공지사항", icon: "bell" },
];

const Sidebar = ({ isOpen, handleClickOpen }) => {
    return (
        <div className={`sidebar ${isOpen && "on"}`}>
            <div className="sidebar__menu">
                <i
                    className="sidebar__close fas fa-times "
                    onClick={() => handleClickOpen()}
                ></i>

                <div className="sidebar__user">
                    <div>
                        ※ 관리자: <span>{user.name}</span>
                        <br />※ 이메일: <span>{user.email}</span>
                    </div>
                </div>
                {routes.map((route) => (
                    <NavLink
                        key={route.path}
                        to={route.path}
                        activeClassName="active"
                    >
                        <div className="sidebar__content">
                            <i className={`fas fa-${route.icon}`}></i>
                            {route.title}
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
