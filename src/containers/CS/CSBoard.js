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

// BBB
const CSBoard = () => {
    const { pathname, search } = history.location;
    const dispatch = useDispatch();
    const { pageCount, pages, data, selectedId } = useSelector(
        (state) => state.board
    );

    useEffect(() => {
        dispatch(boardActions.fetch(pathname + search, {}));
        return () => dispatch(boardActions.initialize());
    }, [dispatch, pathname, search]);

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
    const handleClickButton = (type) => {
        if (!selectedId && type !== "insert") {
            alert("행을 선택해주세요.");
            return;
        }

        const id = type === "insert" ? "" : selectedId;
        history.push(`${pathname}/form?type=${type}&id=${id}`);
    };

    return (
        <React.Fragment>
            {pathname.indexOf("question") > -1 ? (
                <Navbar
                    onClickSend={() => handleClickButton("edit")}
                    onClickDelete={() => handleClickDelete}
                />
            ) : (
                <Navbar
                    onClickInsert={() => handleClickButton("insert")}
                    onClickEdit={() => handleClickButton("edit")}
                    onClickDelete={() => handleClickDelete}
                />
            )}

            <BoardLayout>
                {/* <BoardTop handleChangePageCtrl={handleChangePageCtrl} /> */}
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

export default CSBoard;
