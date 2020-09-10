import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 40px;
    height: 80px;
    line-height: 80px;
    border-bottom: 2px solid #eeeeee;

    & a {
        position: relative;
        float: left;
        padding: 0 80px;
        margin: 0 50px;
        height: 100%;
        color: black;

        &:hover {
            border-bottom: 4px solid #f4ac19;
            transition: 0.2s;
        }
        &.active {
            color: #2196f3;
            border-bottom: 4px solid #2196f3;
        }
    }
`;

const UserNav = () => {
    return (
        <Container>
            <NavLink to="/member/user" activeClassName="active">
                일반 회원
            </NavLink>
            <NavLink to="/member/driver" activeClassName="active">
                기사 회원
            </NavLink>
            <NavLink to="/member/manager" activeClassName="active">
                관리자
            </NavLink>
        </Container>
    );
};

export default UserNav;
