import React, { useEffect } from "react";
import history from "../../history";

// 리덕스
import { useSelector, useDispatch } from "react-redux";
import boardActions from "../../redux/actions/boardActions";

// Components
import Board from "../../components/Board/Board";
import BoardLayout from "../../components/Board/BoardLayout";
import BoardFooter from "../../components/Board/BoardFooter";
import Navbar from "../../components/Navbar/Navbar";
// import InfoTop from "./InfoTop";

// BBB
const OrderBoard = () => {
    const { pathname, search } = history.location;
    const dispatch = useDispatch();
    const { pageCount, pages, data, selectedId } = useSelector(
        (state) => state.board
    );

    useEffect(() => {
        dispatch(boardActions.fetch(pathname + search, {}));
        return () => dispatch(boardActions.initialize());
    }, [dispatch, pathname, search]);

    const handleClickInsert = () => {
        history.push(`${pathname}/form`);
    };

    const handleClickRow = (idx) => {
        dispatch(boardActions.selected(idx));
    };

    const handleClickDelete = async () => {
        if (!selectedId) {
            alert("삭제할 행을 선택해주세요");
        } else {
            dispatch(boardActions.deleteData(pathname, selectedId));
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
