import React, { useEffect, useState } from "react";
import history from "../../../history";

import InfoTop from "./components/InfoTop";
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

const PurchBoard = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const dispatch = useDispatch();
    const { data, totalPage, selectedId } = useSelector((state) => state.board);

    const [pageCtrl, setPageCtrl] = useState({
        pageSize: 4,
        currentPage: 1,
        countryCtg: "",
        searchKeyword: "",
        sort: "",
    });

    useEffect(() => {
        dispatch(boardAction_fetch(pageId));
        return () => dispatch(boardAction_init());
    }, [dispatch, pageId]);

    const handleClickInsert = () => {
        history.push(`/purch/${pageId}/form`);
    };

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

    return (
        <Content>
            <ContentNav pageId={pageId}>
                <ContentBtn
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={handleClickDelete}
                />
            </ContentNav>

            <ContentBody>
                <InfoTop handleChangePageCtrl={handleChangePageCtrl} />

                <Board
                    pageId={pageId}
                    data={data}
                    selectedId={selectedId}
                    handleSelectedId={handleSelectedId}
                />
                <BoardFooter
                    totalPage={totalPage}
                    currentPage={pageCtrl.currentPage}
                    handleChangePageCtrl={handleChangePageCtrl}
                />
            </ContentBody>
        </Content>
    );
};

export default PurchBoard;
