import React from "react";
// 리덕스
import { useSelector, useDispatch } from "react-redux";
import boardActions from "../../redux/actions/boardActions";
// Components
import Modal from "./Modal";
import Board from "../Board/Board";
import useOpen from "../../Hooks/useOpen";

const ModalButtonSearch = ({ searchPath, label, onChange }) => {
    const dispatch = useDispatch();
    const [isOpen, onClickOpen, onClickClose] = useOpen();
    const { pageCount, pages, data, selectedId } = useSelector(
        (state) => state.board
    );

    const handleClickRow = (idx) => {
        dispatch(boardActions.selected(idx));
    };

    const handleClickSearch = (query) => {
        query = query ? query + "&limit=100" : "?limit=100";

        dispatch(boardActions.fetch(searchPath + query));
    };
    const handleClickSave = () => {
        if (!selectedId) {
            alert("사용할 행을 선택해주세요");
            return;
        }

        onChange(data.find((item) => item.idx === selectedId));
        onClickClose();
        dispatch(boardActions.initialize());
    };

    return (
        <>
            <Modal
                title="구매코드 검색"
                isOpen={isOpen}
                onClick={handleClickSave}
                onClickClose={onClickClose}
            >
                <Board
                    data={data}
                    pages={pages}
                    pageCount={pageCount}
                    pathname={searchPath}
                    selectedId={selectedId}
                    onClickRow={handleClickRow}
                    onClickSearch={handleClickSearch}
                />
            </Modal>
            <tr>
                <td colSpan="2">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onClickOpen}
                    >
                        {label + "  "}
                        <i className="fas fa-search"></i>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default ModalButtonSearch;
