import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import routes from "../routes";

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
`;

const LinkElem = styled(NavLink)`
    &.active {
        color: red;
    }
`;

const User = styled.div`
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
`;

const NavItem = styled.div`
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
`;

const user = {
    name: "하경윤",
    email: "gkb10a@naver.com",
};

const Sidebar = () => {
    return (
        <Container>
            <User>
                <div>
                    ※ 관리자: <span>{user.name}</span>
                    <br />※ 이메일: <span>{user.email}</span>
                </div>
            </User>
            {routes.map(
                (route) =>
                    route.icon && (
                        <LinkElem
                            key={route.path}
                            to={route.path}
                            activeClassName="active"
                        >
                            <NavItem>
                                <i className={`fas fa-${route.icon}`}></i>
                                {route.title}
                            </NavItem>
                        </LinkElem>
                    )
            )}
        </Container>
    );
};

export default Sidebar;
