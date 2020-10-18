import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const routes = [
    { path: "/dashboard", title: "Dashboard", icon: "chart-pie" },
    { path: "/member", title: "회원정보", icon: "user-cog" },
    {
        path: "/tour",
        title: "관광지 관리",
        icon: "map-marked-alt",
    },
    { path: "/purch", title: "구매 관리", icon: "route" },
    { path: "/cs", title: "공지사항", icon: "bell" },
];

const Sidebar = ({ isOpen, handleClickOpen }) => {
    const { email, name } = useSelector((state) => state.user);

    return (
        <div className={`sidebar ${isOpen && "on"}`}>
            <div className="sidebar__menu">
                <i
                    className="sidebar__close fas fa-times "
                    onClick={() => handleClickOpen()}
                ></i>

                <div className="sidebar__user">
                    <div>
                        ※ 관리자: <span>{name}</span>
                        <br />※ 이메일: <span>{email}</span>
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
