import React, { useEffect, useState, useMemo } from "react";
import history from "../../history";
import { Board222, BoardTop } from "../../components/Board/Board";
import BoardFooter from "../../components/Board/BoardFooter";
import { ContentBody, ContentNav } from "../../components/Content/Content";
import { useParams } from "react-router-dom";
// 리덕스
import { useSelector, useDispatch } from "react-redux";
import {
    //boardAction_fetch,
    boardAction_selected,
    boardAction_delete,
    boardAction_fetch222,
} from "../../redux/actions";

// BBB
const MemberBoard = () => {
    const { pathname, search } = history.location;
    const apiurl = history.location.pathname;

    const dispatch = useDispatch();
    const { pageCount, pages, data, selectedId } = useSelector(
        (state) => state.board
    );

    useEffect(() => {
        dispatch(boardAction_fetch222(pathname + search, {}));
    }, [dispatch, pathname, search]);

    const handleClickInsert = () => {
        history.push(`${apiurl}/form`);
    };

    const handleSelectedId = (selectedId) => {
        dispatch(boardAction_selected(selectedId));
    };

    const handleClickDelete = async () => {
        if (!selectedId) {
            alert("삭제할 행을 선택해주세요");
        } else {
            dispatch(boardAction_delete(apiurl, selectedId));
        }
    };

    // const handleChangePageCtrl = (name, value) => {
    //     setPageCtrl((state) => ({
    //         ...state,
    //         [name]: value,
    //     }));
    // };

    return (
        <React.Fragment>
            <ContentNav
                onClickInsert={handleClickInsert}
                onClickDelete={handleClickDelete}
            />

            <ContentBody>
                {/* <BoardTop handleChangePageCtrl={handleChangePageCtrl} /> */}
                {/* {prevId === pageId && ( */}
                <Board222
                    data={data}
                    selectedId={selectedId}
                    handleSelectedId={handleSelectedId}
                />
                <BoardFooter pageCount={pageCount} pages={pages} />
            </ContentBody>
        </React.Fragment>
    );
};

export default MemberBoard;
