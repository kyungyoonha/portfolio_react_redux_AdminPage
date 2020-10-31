import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction_logout } from "../../../redux/actions";

const routes = [
    { path: "/dashboard", title: "Dashboard", icon: "chart-pie" },
    { path: "/member", title: "회원정보", icon: "user-cog" },
    {
        path: "/package",
        title: "관광지 관리",
        icon: "map-marked-alt",
    },
    { path: "/order", title: "구매 관리", icon: "route" },
    { path: "/cs", title: "공지사항", icon: "bell" },
];

const Sidebar = ({ isOpen, handleClickOpen }) => {
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
