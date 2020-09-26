import React from "react";
import { NavLink } from "react-router-dom";
import "./TemplateNav.scss";

const navMap = {
    member: [
        { to: "/member/user", title: "일반 회원" },
        { to: "/member/driver", title: "기사 회원" },
        { to: "/member/manager", title: "관리자" },
    ],
    place: [
        { to: "/code/place", title: "관광지 코드 관리" },
        { to: "/code/region", title: "지역 코드 관리" },
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
