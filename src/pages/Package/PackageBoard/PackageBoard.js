import React, { useEffect, useState } from "react";
import history from "../../../history";

import PackageBoardTop from "./components/PackageBoardTop";
import { Board, BoardFooter } from "../../../components/Board/Board";
import { ContentBody, ContentNav } from "../../../components/Content/Content";

// 리덕스
import { useSelector, useDispatch } from "react-redux";
import {
    boardAction_fetch,
    boardAction_selected,
    boardAction_delete,
} from "../../../redux/actions";

// BBB
const PackageBoard = ({ match }) => {
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

    const handleClickDelete = () => {
        if (!selectedId) {
            alert("삭제할 행을 선택해주세요");
        } else {
            dispatch(boardAction_delete(pageId, selectedId));
        }
    };

    const handleClickEditCopy = (type) => {
        if (!selectedId && type !== "insert") {
            alert("행을 선택해주세요.");
            return;
        }

        const id = type === "insert" ? "" : selectedId;
        history.push(`/package/${pageId}/form?type=${type}&id=${id}`);
    };

    const handleChangePageCtrl = (name, value) => {
        setPageCtrl((state) => ({
            ...state,
            [name]: value,
        }));
    };

    return (
        <React.Fragment>
            {pageId === "tour" ? (
                <ContentNav
                    onClickInsert={() => handleClickEditCopy("insert")}
                    onClickDelete={() => handleClickDelete}
                />
            ) : (
                <ContentNav
                    onClickInsert={() => handleClickEditCopy("insert")}
                    onClickEdit={() => handleClickEditCopy("edit")}
                    onClickCopy={() => handleClickEditCopy("copy")}
                    onClickDelete={() => handleClickDelete}
                />
            )}

            <ContentBody>
                <PackageBoardTop handleChangePageCtrl={handleChangePageCtrl} />
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

export default PackageBoard;
