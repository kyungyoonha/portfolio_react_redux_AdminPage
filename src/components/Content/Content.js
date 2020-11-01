import React from "react";
import { NavLink } from "react-router-dom";
import "./Content.scss";
import pageDataMap from "../../json/pageDataMap.json";
import history from "../../history";

const navMap = {
    member: [
        { to: "/member/user", title: "일반 회원" },
        { to: "/member/driver", title: "기사 회원" },
        { to: "/member/admin", title: "관리자" },
    ],
    package: [
        { to: "/package/tour", title: "관광지 관리" },
        { to: "/package/nationcode", title: "국가 코드 관리" },
        { to: "/package/areacode", title: "지역 코드 관리" },
    ],
    order: [
        { to: "/order/purchase", title: "구매정보 관리" },
        { to: "/order/purchasecode", title: "구매코드 조회" },
    ],
    cs: [
        { to: "/cs/push", title: "알림 관리" },
        { to: "/cs/notice", title: "공지사항 관리" },
        { to: "/cs/question", title: "문의사항 관리" },
    ],
};

export const Content = ({ children }) => {
    return <div className="content">{children}</div>;
};

export const ContentNav = ({ children }) => {
    const pageId = history.location.pathname.split("/")[2];
    const { title, navCtg } = pageDataMap[pageId];
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

export const ContentBtn = ({
    type,
    handleClickInsert,
    handleClickDelete,
    children,
}) => {
    return (
        <div className="contentButton">
            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleClickDelete}
            >
                {type ? "뒤로가기" : "삭제하기"}
            </button>
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleClickInsert}
            >
                {type === "edit" ? "수정하기" : "추가하기"}
            </button>
            {children}
        </div>
    );
};
