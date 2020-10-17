import React from "react";
import "./Breadcrumb.scss";
import { NavLink } from "react-router-dom";
import history from "../../../../history";

const BreadCrumMap = {
    Home: "홈",
    dashboard: "홈",
    user: "회원 정보",
    member: "일반 회원",
    driver: "기사 회원",
    manager: "관리자",
    tour: "관광지 관리",
    package: "관광지",
    nation: "국가 코드 관리",
    region: "지역 코드",
    purch: "구매 관리",
    purchinfo: "구매정보 관리",
    purchcode: "구매코드 조회",
    purchcodeform: "구매코드 추가",
    cs: "공지사항",
    push: "알림 관리",
    notice: "공지사항 관리",
    question: "문의사항 관리",
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
