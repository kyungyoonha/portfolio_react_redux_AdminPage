import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import history from "../history";

const BreadCrumMap = {
    Home: "홈",
    member: "회원정보",
    user: "일반 회원",
    driver: "기사 회원",
    manager: "관리자",
    code: "관광지 관리",
    place: "관광지 코드",
    region: "지역 코드",
    form: "추가",
};

const Container = styled.div`
    padding: 0 30px;
    height: 50px;
    line-height: 50px;
    background: white;
    border-bottom: 1px solid #d8dbe0;
    > span {
        margin: 0 15px;
    }

    a {
        color: black;

        :hover {
            color: red;
        }
    }
`;

const Arrow = () => (
    <span>
        <i className="fas fa-chevron-right"></i>
    </span>
);

const Breadcrumb = () => {
    const path = history.location.pathname;
    const pathNames =
        path === "/" ? ["Home"] : path.split("/").filter((value) => value);

    return (
        <Container>
            {pathNames.map((value, idx) => {
                const to = `/${pathNames.slice(0, idx + 1).join("/")}`;

                return (
                    <React.Fragment key={idx}>
                        {idx !== 0 && <Arrow />}
                        <NavLink to={to} activeClassName="active">
                            {value.indexOf("form") !== -1
                                ? "추가"
                                : BreadCrumMap[value]}
                        </NavLink>
                    </React.Fragment>
                );
            })}
        </Container>
    );
};

export default Breadcrumb;
