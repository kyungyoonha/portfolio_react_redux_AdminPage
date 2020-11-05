import React from "react";
import { NavLink } from "react-router-dom";
import "./Content.scss";
import tableConfig from "../../siteConfig/tableConfig.json";
import navConfig from "../../siteConfig/navConfig";
import queryString from "query-string";
import history from "../../history";

export const ContentNav = ({
    onClickInsert,
    onClickDelete,
    onClickBack,
    onClickEdit,
    onClickCopy,
    onClickSend,
}) => {
    const pageId = history.location.pathname.split("/")[2];
    const type = queryString.parse(history.location.search).type;
    const { title, navCtg } = tableConfig[pageId];
    const navList = navConfig[navCtg];

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
            <div className="contentButton">
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

export const ContentBody = ({ children }) => {
    return <div className="contentBody">{children}</div>;
};

export const ContentBoardBtn = ({
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
                삭제하기
            </button>
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleClickInsert}
            >
                추가하기
            </button>
            {children}
        </div>
    );
};
