import React, { useState } from "react";
import "./ModalSearch.scss";
import { FormSection } from "../Form/Form";
import Modal from "./Modal";
import axios from "axios";
import { Board } from "../Board/Board";

const modalStyle = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        marginBottom: "50px",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "550px",
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "5",
    },
};

const ModalSearch = ({ searchId, label, onChangeData }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState([]);
    const [selectedId, setSelectedId] = useState("");

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

    const handleClickSearch = async () => {
        // if (!keyword) return;
        const res = await axios.get(
            `http://localhost:3000/json/${searchId}.json`
        );

        const result = res.data.data.filter(
            (item) =>
                item[searchMap[searchId].column[0]]
                    .toLowerCase()
                    .indexOf(keyword) > -1 ||
                item[searchMap[searchId].column[1]]
                    .toLowerCase()
                    .indexOf(keyword) > -1
        );

        setResults(result);
    };

    const handleSelectedId = (idx) => {
        setSelectedId(selectedId === idx ? "" : idx);
    };

    const handleClickSave = () => {
        if (selectedId) {
            onChangeData(results.find((item) => item.idx === selectedId));
            setModalOpen(false);
            setResults([]);
            setKeyword("");
            setSelectedId("");
        }
    };
    return (
        <React.Fragment>
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setModalOpen(true)}
                >
                    {label + "  "}
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <Modal
                isModalOpen={modalOpen}
                modalStyle={modalStyle}
                handleModalClose={() => setModalOpen(false)}
            >
                <div className="modalSearch">
                    <div className="modalSearch__title">
                        <h4>{label}</h4>
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleClickSave}
                        >
                            사용하기
                        </button>
                    </div>
                    <div className="modalSearch__body">
                        <FormSection full title={label}>
                            {/* <Input
                                label={label}
                                value={keyword}
                                onChange={(e) =>
                                    setKeyword(e.target.value.toLowerCase())
                                }
                                placeholder={searchMap[searchId].placeholder}
                            /> */}
                            <tr>
                                <td className="input-group">
                                    <input
                                        type="input"
                                        value={keyword}
                                        className="form-control"
                                        onChange={(e) =>
                                            setKeyword(e.target.value)
                                        }
                                    />
                                    <div
                                        className="input-group-append"
                                        onClick={handleClickSearch}
                                    >
                                        <button
                                            className="btn btn-outline-primary"
                                            type="button"
                                        >
                                            검색{" "}
                                            <i className="fas fa-map-search "></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </FormSection>
                        <br />
                        <div className="modalSearch__board">
                            <Board
                                pageId={searchId}
                                data={results}
                                selectedId={selectedId}
                                handleSelectedId={handleSelectedId}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default ModalSearch;
