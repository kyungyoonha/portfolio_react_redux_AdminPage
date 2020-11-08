import React, { useEffect } from "react";
import history from "../../history";
import { Board222, BoardTop } from "../../components/Board/Board";
import BoardFooter from "../../components/Board/BoardFooter";
import { ContentBody, ContentNav } from "../../components/Content/Content";
import { getHeaderList } from "../../util/helperFunc";
// 리덕스
import { useSelector, useDispatch } from "react-redux";
import {
    boardAction_selected,
    boardAction_delete,
    boardAction_fetch222,
    boardAction_initialize,
} from "../../redux/actions";

// BBB
const MemberBoard = () => {
    const { pathname, search } = history.location;
    const headers = getHeaderList(pathname);
    const dispatch = useDispatch();
    const { pageCount, pages, data, selectedId } = useSelector(
        (state) => state.board
    );

    useEffect(() => {
        dispatch(boardAction_fetch222(pathname + search, {}));
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
            <ContentNav
                onClickInsert={handleClickInsert}
                onClickDelete={handleClickDelete}
            />

            <ContentBody>
                {/* <BoardTop handleChangePageCtrl={handleChangePageCtrl} /> */}

                <Board222
                    headers={headers}
                    data={data}
                    selectedId={selectedId}
                    onClickRow={handleClickRow}
                />
                <BoardFooter pageCount={pageCount} pages={pages} />
            </ContentBody>
        </React.Fragment>
    );
};

export default MemberBoard;
