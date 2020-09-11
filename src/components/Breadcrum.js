import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import history from "../history";

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
                            {value}
                        </NavLink>
                    </React.Fragment>
                );
            })}
        </Container>
    );
};

export default Breadcrumb;
