import React from "react";
import { NavLink } from "react-router-dom";
import pageConfig from "../../siteConfig/pageConfig.json";
import navConfig from "../../siteConfig/navConfig";
import queryString from "query-string";
import history from "../../history";
import "./Navbar.scss";

const Navbar = ({
    onClickInsert,
    onClickDelete,
    onClickBack,
    onClickEdit,
    onClickCopy,
    onClickSend,
}) => {
    const pageId = history.location.pathname.split("/")[2];
    const type = queryString.parse(history.location.search).type;
    const { title, navCtg } = pageConfig[pageId];
    const navList = navConfig[navCtg].navList;

    const Button = ({ onClick, children }) => {
        return (
            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onClick}
            >
                {children}
            </button>
        );
    };
    return (
        <div className="navBar">
            <div className="navBar__title">
                <i className="fas fa-user-cog"></i>
                {title}
            </div>
            <div className="navBar__content">
                {navList.map((nav) => (
                    <NavLink key={nav.to} to={nav.to} activeClassName="active">
                        {nav.title}
                    </NavLink>
                ))}
            </div>
            <div className="navBar__buttons">
                {onClickDelete && (
                    <Button onClick={onClickDelete}>삭제하기</Button>
                )}
                {onClickEdit && <Button onClick={onClickEdit}>수정하기</Button>}
                {onClickCopy && <Button onClick={onClickCopy}>복사하기</Button>}
                {onClickBack && <Button onClick={onClickBack}>뒤로가기</Button>}
                {onClickSend && <Button onClick={onClickSend}>발송하기</Button>}
                {onClickInsert && (
                    <Button onClick={onClickInsert}>
                        {type === "edit" ? "수정하기" : "추가하기"}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
