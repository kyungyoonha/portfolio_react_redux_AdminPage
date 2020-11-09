import React, { useEffect } from "react";
import history from "../../history";

// import InfoTop from "./InfoTop";
import { Board, BoardLayout } from "../../components/Board/Board";
import BoardFooter from "../../components/Board/BoardFooter";
import Navbar from "../../components/Navbar/Navbar";

// 리덕스
import { useSelector, useDispatch } from "react-redux";
import {
    boardAction_fetch,
    boardAction_selected,
    boardAction_delete,
    boardAction_initialize,
} from "../../redux/actions";

// BBB
const OrderBoard = () => {
    const { pathname, search } = history.location;
    const dispatch = useDispatch();
    const { pageCount, pages, data, selectedId } = useSelector(
        (state) => state.board
    );

    useEffect(() => {
        dispatch(boardAction_fetch(pathname + search, {}));
        return () => dispatch(boardAction_initialize());
    }, [dispatch, pathname, search]);

    const handleClickInsert = () => {
        history.push(`${pathname}/form`);
    };

    const handleClickRow = (idx) => {
        dispatch(boardAction_selected(idx));
    };

    const handleClickDelete = async () => {
        if (!selectedId) {
            alert("삭제할 행을 선택해주세요");
        } else {
            dispatch(boardAction_delete(pathname, selectedId));
        }
    };

    return (
        <React.Fragment>
            <Navbar
                onClickInsert={handleClickInsert}
                onClickDelete={handleClickDelete}
            />

            <BoardLayout>
                {/* <InfoTop handleChangePageCtrl={handleChangePageCtrl} /> */}
                <Board
                    pathname={pathname}
                    data={data}
                    selectedId={selectedId}
                    onClickRow={handleClickRow}
                />
                <BoardFooter pageCount={pageCount} pages={pages} />
            </BoardLayout>
        </React.Fragment>
    );
};

export default OrderBoard;
