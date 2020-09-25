import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
    width: 300px;
    background: #303c54;
    & > a {
        display: block;
        & :hover {
            background: #46546c;
        }
        &.active {
            background: red;
        }
    }

    .user {
        position: relative;
        padding-left: 15px;
        height: 100px;
        color: #7d8798;
        font-size: 0.8rem;

        & > div {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            line-height: 30px;
        }
        & > div > span {
            margin-left: 5px;
            color: white;
            font-size: 0.9rem;
        }
    }

    .navItem {
        padding-left: 15px;
        height: 70px;
        line-height: 70px;
        background: #3c4b64;
        color: white;
        font-size: 0.8rem;
        & > i {
            margin-right: 15px;
            font-size: 1.2rem;
        }
    }
`;

const LinkElem = styled(NavLink)`
    &.active {
        color: red;
    }
`;

const user = {
    name: "하경윤",
    email: "gkb10a@naver.com",
};

const routes = [
    { path: "/", title: "Dashboard", icon: "chart-pie" },
    { path: "/member/user", title: "회원정보", icon: "user-cog" },
    {
        path: "/code/place",
        title: "관광지 관리",
        icon: "map-marked-alt",
    },
    { path: "/tour", title: "투어 관리", icon: "route" },
    { path: "/notice", title: "공지사항", icon: "bell" },
];

const Sidebar = () => {
    return (
        <Container>
            <div className="user">
                <div>
                    ※ 관리자: <span>{user.name}</span>
                    <br />※ 이메일: <span>{user.email}</span>
                </div>
            </div>
            {routes.map((route) => (
                <LinkElem
                    key={route.path}
                    to={route.path}
                    activeClassName="active"
                >
                    <div className="navItem">
                        <i className={`fas fa-${route.icon}`}></i>
                        {route.title}
                    </div>
                </LinkElem>
            ))}
        </Container>
    );
};

export default Sidebar;
