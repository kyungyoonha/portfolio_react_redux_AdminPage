import React from "react";
import "./ContentBtn.scss";

const ContentBtn = ({
    path,
    insertType,
    handleClickInsert,
    handleClickDelete,
    handleClickGoback,
    handleClickEditCopy,
    children,
}) => {
    const pageId = path.split("/")[2];

    // Borad
    if (path.indexOf("form") === -1) {
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
                    className="btn btn-outline-secondary"
                    onClick={handleClickInsert}
                >
                    추가하기
                </button>
            </div>
        );
    }
    // Form
    return (
        <div className="contentButton">
            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleClickGoback}
            >
                뒤로가기
            </button>
            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleClickInsert}
            >
                {insertType === "edit" ? "수정하기" : "추가하기"}
            </button>
            {pageId !== "tourpackage" && (
                <React.Fragment>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => handleClickEditCopy("copy")}
                    >
                        복사하기
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => handleClickEditCopy("edit")}
                    >
                        수정하기
                    </button>
                </React.Fragment>
            )}
        </div>
    );
};

export default ContentBtn;
