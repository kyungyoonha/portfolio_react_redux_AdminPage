import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import routes from "../routes";

const Container = styled.div`
    width: 256px;
    background: #303c54;
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

const Sidebar = () => {
    return (
        <Container>
            {routes.map((route) => (
                <NavLink
                    key={route.path}
                    to={route.path}
                    activeClassName="active"
                >
                    <NavItem>
                        <i class={`fas fa-${route.icon}`}></i>
                        {route.title}
                    </NavItem>
                </NavLink>
            ))}
        </Container>
    );
};

export default Sidebar;
