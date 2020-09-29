import React from "react";
import "./Template.scss";
import TemplateNav from "./TemplateNav/TemplateNav";

const Template = ({
    title,
    navCtg,
    handleClickInsert,
    handleClickDelete,
    isFooter,
    children,
}) => {
    return (
        <div className="card template">
            <div className="card-header bg-white">
                <i className="fas fa-user-cog"></i>
                {title}
            </div>
            <div className="card-body bg-white">
                <TemplateNav navCtg={navCtg} />
                {children}
            </div>
            {isFooter && (
                <div className="card-footer bg-white">
                    <div className="template__buttonContainer">
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
                </div>
            )}
        </div>
    );
};

export default Template;
