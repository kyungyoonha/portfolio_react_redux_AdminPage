import React, { useEffect, useState } from "react";
import history from "../../../history";

import TourBoardTop from "./components/TourBoardTop";
import { Board, BoardFooter } from "../../../components/Board/Board";
import {
    Content,
    ContentBtn,
    ContentNav,
    ContentBody,
} from "../../../components/Content/Content";

// 리덕스
import { useSelector, useDispatch } from "react-redux";
import {
    boardAction_fetch,
    boardAction_selected,
    boardAction_delete,
    boardAction_init,
} from "../../../redux/actions";

const TourBoard = ({ match }) => {
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
        if (!selectedId && type !== "new") {
            alert("행을 선택해주세요.");
            return;
        }

        history.push(
            `/tour/${pageId}/form/${
                type === "new" ? "new" : selectedId
            }?type=${type}`
        );
    };

    const handleChangePageCtrl = (name, value) => {
        setPageCtrl((state) => ({
            ...state,
            [name]: value,
        }));
    };

    return (
        <Content>
            <ContentNav pageId={pageId}>
                <ContentBtn
                    handleClickInsert={() => handleClickEditCopy("new")}
                    handleClickDelete={handleClickDelete}
                >
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
                </ContentBtn>
            </ContentNav>

            <ContentBody>
                <TourBoardTop handleChangePageCtrl={handleChangePageCtrl} />
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
        </Content>
    );
};

export default TourBoard;
