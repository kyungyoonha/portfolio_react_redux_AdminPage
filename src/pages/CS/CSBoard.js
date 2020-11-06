import React, { useEffect, useState } from "react";
import history from "../../history";

import { Board, BoardTop, BoardFooter } from "../../components/Board/Board";
import { ContentBody, ContentNav } from "../../components/Content/Content";

// 리덕스
import { useSelector, useDispatch } from "react-redux";
import {
    boardAction_fetch,
    boardAction_selected,
    boardAction_delete,
} from "../../redux/actions";

// BBB
const CSBoard = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const dispatch = useDispatch();
    const { pageId: prevId, data, totalPage, selectedId } = useSelector(
        (state) => state.board
    );

    const [pageCtrl, setPageCtrl] = useState({
        pageSize: 4,
        currentPage: 1,
        countryCtg: "",
        searchKeyword: "",
        sort: "",
    });

    useEffect(() => {
        dispatch(boardAction_fetch(pageId));
    }, [dispatch, pageId]);

    const handleSelectedId = (id) => {
        dispatch(boardAction_selected(id));
    };

    const handleClickDelete = async () => {
        if (!selectedId) {
            alert("삭제할 행을 선택해주세요");
        } else {
            dispatch(boardAction_delete(pageId, selectedId));
        }
    };

    const handleChangePageCtrl = (name, value) => {
        setPageCtrl((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleClickEditCopy = (type) => {
        if (!selectedId && type !== "insert") {
            alert("행을 선택해주세요.");
            return;
        }

        const id = type === "insert" ? "" : selectedId;
        history.push(`/cs/${pageId}/form?type=${type}&id=${id}`);
    };

    return (
        <React.Fragment>
            {pageId === "question" ? (
                <ContentNav
                    onClickSend={() => handleClickEditCopy("edit")}
                    onClickDelete={() => handleClickDelete}
                />
            ) : (
                <ContentNav
                    onClickInsert={() => handleClickEditCopy("insert")}
                    onClickEdit={() => handleClickEditCopy("edit")}
                    onClickDelete={() => handleClickDelete}
                />
            )}

            <ContentBody>
                <BoardTop handleChangePageCtrl={handleChangePageCtrl} />
                {prevId === pageId && (
                    <Board
                        pageId={pageId}
                        data={data}
                        selectedId={selectedId}
                        handleSelectedId={handleSelectedId}
                    />
                )}

                <BoardFooter
                    totalPage={totalPage}
                    currentPage={pageCtrl.currentPage}
                    handleChangePageCtrl={handleChangePageCtrl}
                />
            </ContentBody>
        </React.Fragment>
    );
};

export default CSBoard;
