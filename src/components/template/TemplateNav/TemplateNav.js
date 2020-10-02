import React from "react";
import { NavLink } from "react-router-dom";
import "./TemplateNav.scss";

const navMap = {
    user: [
        { to: "/user/member", title: "일반 회원" },
        { to: "/user/driver", title: "기사 회원" },
        { to: "/user/manager", title: "관리자" },
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

const TemplateNav = ({ navCtg }) => {
    const navList = navMap[navCtg];
    return (
        <div className="templateNav">
            {navList.map((nav) => (
                <NavLink key={nav.to} to={nav.to} activeClassName="active">
                    {nav.title}
                </NavLink>
            ))}
        </div>
    );
};

export default TemplateNav;
