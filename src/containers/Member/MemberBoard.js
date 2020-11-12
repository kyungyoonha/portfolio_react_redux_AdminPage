import React, { useEffect } from "react";
import history from "../../history";

// 리덕스
import { useSelector, useDispatch } from "react-redux";
import boardActions from "../../redux/actions/boardActions";

// Components
import Board from "../../components/Board/Board";
import Navbar from "../../components/Navbar/Navbar";

// BBB
const MemberBoard = () => {
    const { pathname, search } = history.location;
    const dispatch = useDispatch();
    const { pageCount, pages, data, selectedId } = useSelector(
        (state) => state.board
    );

    useEffect(() => {
        console.log(pathname, search);
        dispatch(boardActions.fetch(pathname + search));
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

            <Board
                pathname={pathname}
                data={data}
                selectedId={selectedId}
                onClickRow={handleClickRow}
                pages={pages}
                pageCount={pageCount}
            />
        </React.Fragment>
    );
};

export default MemberBoard;