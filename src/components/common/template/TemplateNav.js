import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const navMap = {
    member: [
        { to: "/member/user", title: "일반 회원" },
        { to: "/member/driver", title: "기사 회원" },
        { to: "/member/manager", title: "관리자" },
    ],
    place: [
        { to: "/place/placecode", title: "관광지 코드 관리" },
        { to: "/place/regioncode", title: "지역 코드 관리" },
    ],
};

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

const TemplateNav = ({ navCtg }) => {
    const navList = navMap[navCtg];
    return (
        <Container>
            {navList.map((nav) => (
                <NavLink key={nav.to} to={nav.to} activeClassName="active">
                    {nav.title}
                </NavLink>
            ))}
        </Container>
    );
};

export default TemplateNav;
