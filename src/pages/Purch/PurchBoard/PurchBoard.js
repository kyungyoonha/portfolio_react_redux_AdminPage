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
    const id = match.url.split("/")[2];
    const dispatch = useDispatch();
    const { data, totalPage, selectedItem } = useSelector(
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
        dispatch(boardAction_fetch(id));
        return () => dispatch(boardAction_init());
    }, [dispatch, id]);


    const handleClickInsert = () => {
        history.push(`/purch/${id}/form`);
    };

    const handleSelectedItem = (selectedItem) => {
        dispatch(boardAction_selected(selectedItem));
    };

    const handleClickDelete = async () => {
        if (!selectedItem.id) {
            alert("삭제할 행을 선택해주세요");
        } else {
            dispatch(boardAction_delete(id, selectedItem.id));
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
            <ContentNav id={id}>
                <ContentBtn
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={handleClickDelete}
                />
            </ContentNav>

            <ContentBody>
                <InfoTop handleChangePageCtrl={handleChangePageCtrl} />

                <Board
                    id={id}
                    data={data}
                    selectedItem={selectedItem}
                    handleSelectedItem={handleSelectedItem}
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
