import React from "react";
import { NavLink } from "react-router-dom";
import "./ContentNav.scss";
import pageDataMap from "../../json/pageDataMap.json";

const navMap = {
    member: [
        { to: "/member/user", title: "일반 회원" },
        { to: "/member/driver", title: "기사 회원" },
        { to: "/member/manager", title: "관리자" },
    ],
    tour: [
        { to: "/tour/tourpackage", title: "관광지 관리" },
        { to: "/tour/nation", title: "국가 코드 관리" },
        { to: "/tour/area", title: "지역 코드 관리" },
    ],
    purch: [
        { to: "/purch/purchinfo", title: "구매정보 관리" },
        { to: "/purch/purchcodeform", title: "구매코드 발급" },
        { to: "/purch/purchcode", title: "구매코드 조회" },
    ],
    cs: [
        { to: "/cs/push", title: "알림 관리" },
        { to: "/cs/notice", title: "공지사항 관리" },
        { to: "/cs/question", title: "문의사항 관리" },
    ],
};

const ContentNav = ({ pageId, children }) => {
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

export default ContentNav;
