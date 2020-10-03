import React from "react";
import { NavLink } from "react-router-dom";
import "./Content.scss";
import pageDataMap from "../../json/pageDataMap.json";

const navMap = {
    user: [
        { to: "/user/member", title: "일반 회원" },
        { to: "/user/driver", title: "기사 회원" },
        { to: "/user/manager", title: "관리자" },
    ],
    tour: [
        { to: "/tour/area", title: "관광지 코드 관리" },
        { to: "/tour/region", title: "지역 코드 관리" },
    ],
    purch: [
        { to: "/purch/purchinfo", title: "구매정보 관리" },
        { to: "/purch/purchcodeform", title: "구매코드 발급" },
        { to: "/purch/purchcode", title: "구매코드 조회" },
    ],
};

export const ContentNav = ({ id, children }) => {
    const { title, navCtg } = pageDataMap[id];
    const navList = navMap[navCtg];
    return (
        <div className="contentNav">
            <div className="contentNav__title">
                <i className="fas fa-user-cog"></i>
                {title}
            </div>
            <div className="contentNav__content">
                {navList.map((nav) => (
                    <NavLink key={nav.to} to={nav.to} activeClassName="active">
                        {nav.title}
                    </NavLink>
                ))}
            </div>
            {children}
        </div>
    );
};

export const ContentBody = ({ children }) => {
    return <div className="contentBody">{children}</div>;
};

export const ContentButton = ({
    type,
    handleClickInsert,
    handleClickDelete,
}) => {
    return (
        <div className="contentButton">
            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleClickDelete}
            >
                {type === "form" ? "뒤로가기" : "삭제하기"}
            </button>
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleClickInsert}
            >
                추가하기
            </button>
        </div>
    );
};
