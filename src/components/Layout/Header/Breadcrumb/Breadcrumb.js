import React from "react";
import "./Breadcrumb.scss";
import { NavLink } from "react-router-dom";
import history from "../../../../history";

const BreadCrumMap = {
    Home: "홈",
    dashboard: "홈",
    member: "회원정보",
    user: "일반 회원",
    driver: "기사 회원",
    manager: "관리자",
    code: "관광지 관리",
    place: "관광지 코드",
    region: "지역 코드",
    form: "추가",
};

const Breadcrumb = () => {
    const path = history.location.pathname;
    const pathNames =
        path === "/" ? ["Home"] : path.split("/").filter((value) => value);

    return (
        <div className="breadcrumb__container">
            {pathNames.map((value, idx) => {
                const to = `/${pathNames.slice(0, idx + 1).join("/")}`;

                return (
                    <React.Fragment key={idx}>
                        {idx !== 0 && (
                            <span>
                                <i className="fas fa-chevron-right"></i>
                            </span>
                        )}
                        <NavLink to={to} activeClassName="active">
                            {value.indexOf("form") !== -1
                                ? "추가"
                                : BreadCrumMap[value]}
                        </NavLink>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Breadcrumb;
