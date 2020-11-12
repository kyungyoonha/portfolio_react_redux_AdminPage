import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ModalSearch.scss";
import history from "../../history";
// 리덕스
import { useSelector, useDispatch } from "react-redux";
import boardActions from "../../redux/actions/boardActions";
// Components
import Modal2 from "./Modal2";
import Board from "../../components/Board/Board";
import FormSection from "../../components/Form/FormSection";
import FormSearch from "../Form/FormSearch";
import { changeObjToQuerystring } from "../../util/helperFunc";

const searchMap = {
    purchasecode: {
        column: ["codenumber", "purchaseuser"],
        placeholder: "구매코드 번호 또는 구매자id를 입력해주세요.",
    },
    tourpackage: {
        column: ["tourcode", "tourname"],
        placeholder: "관광지코드 또는 관광지명을 입력해주세요",
    },
};

const ModalSearch = ({ searchPath, label, onChangeData, block }) => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [search, setSearch] = useState("");
    const { pageCount, pages, data, selectedId } = useSelector(
        (state) => state.board
    );

    useEffect(() => {
        console.log("useeffect");
        dispatch(boardActions.fetch(searchPath));
        return () => dispatch(boardActions.initialize());
    }, [dispatch, searchPath]);

    const handleClickRow = (idx) => {
        dispatch(boardActions.selected(idx));
    };

    const handleClickSearch = async () => {
        const query = changeObjToQuerystring({ search });
        dispatch(boardActions.fetch(searchPath + query));
    };
    const handleClickSave = () => {
        // if (selectedId) {
        //     onChangeData(results.find((item) => item.idx === selectedId));
        //     setModalOpen(false);
        //     setResults([]);
        //     setKeyword("");
        //     setSelectedId("");
        // }
    };
    const handleChange = (e) => setSearch(e.target.value);
    console.log(search);
    return (
        <React.Fragment>
            <button
                type="button"
                className={`btn btn-primary ${block && "btn-block"}`}
                onClick={() => setModalOpen(true)}
            >
                {label + "  "}
                <i className="fas fa-search"></i>
            </button>
            <Modal2
                title="구매코드 검색"
                isModalOpen={modalOpen}
                onClick={handleClickSave}
                onClickClose={() => setModalOpen(false)}
            >
                <FormSection full title={label}>
                    <FormSearch
                        value={search}
                        onChange={handleChange}
                        onClick={handleClickSearch}
                    />
                </FormSection>
                <br />
                <Board
                    noStyle
                    pathname={searchPath}
                    data={data}
                    selectedId={selectedId}
                    onClickRow={handleClickRow}
                    pages={pages}
                    pageCount={pageCount}
                />
            </Modal2>
        </React.Fragment>
    );
};

export default ModalSearch;
