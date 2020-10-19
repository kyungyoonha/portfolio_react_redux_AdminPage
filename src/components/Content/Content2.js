import React from "react";
import "./Content.scss";
// import history from "../../history";

// // redux
// import { useSelector, useDispatch } from "react-redux";
// import {
//     boardAction_delete,
//     boardAction_insertType,
// } from "../../redux/actions";

// components
import ContentNav from "./ContentNav";

const Content = ({ path, children }) => {
    //const page = path.split("/")[1];
    const pageId = path.split("/")[2];

    // const dispatch = useDispatch();
    // const { selectedId, insertType } = useSelector((state) => state.board);

    // const handleClickInsert = () => {
    //     history.push(`/${page}/${pageId}/form`);
    // };

    // const handleClickDelete = async () => {
    //     if (!selectedId) {
    //         alert("삭제할 행을 선택해주세요");
    //     } else {
    //         dispatch(boardAction_delete(pageId, selectedId));
    //     }
    // };

    // const handleClickGoback = () => history.goBack();

    // const handleClickEditCopy = (type) => (dispatch) => {
    //     if (!selectedId && type !== "new") {
    //         alert("행을 선택해주세요.");
    //         return;
    //     }

    //     dispatch(boardAction_insertType(type));

    //     history.push(
    //         `/tour/${pageId}/form/${type === "new" ? "new" : selectedId}`
    //     );
    // };

    return (
        <div className="content">
            <ContentNav pageId={pageId} />
            <div className="contentBody2">{children}</div>
        </div>
    );
};

export default Content;
