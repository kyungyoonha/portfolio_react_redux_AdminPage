import React from "react";
import { NavLink } from "react-router-dom";
import "./Content.scss";

const navMap = {
    member: [
        { to: "/member/user", title: "일반 회원" },
        { to: "/member/driver", title: "기사 회원" },
        { to: "/member/manager", title: "관리자" },
    ],
    tourarea: [
        { to: "/tourarea/area", title: "관광지 코드 관리" },
        { to: "/tourarea/region", title: "지역 코드 관리" },
    ],
    tourpackage: [
        { to: "/tourpackage/purchinfo", title: "구매정보 관리" },
        { to: "/tourpackage/purchcodeform", title: "구매코드 발급" },
        { to: "/tourpackage/purchcode", title: "구매코드 조회" },
    ],
};

export const ContentNav = ({ title, navCtg, children }) => {
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

export const ContentButton = ({ handleClickInsert, handleClickDelete }) => {
    return (
        <div className="contentButton">
            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleClickDelete}
            >
                삭제하기
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClickInsert}
            >
                추가하기
            </button>
        </div>
    );
};
