import React, { useState, useEffect } from "react";
import "./ModalSearch.scss";
import { FormSection, Input } from "../Form/Form";
import Modal from "./Modal";
import axios from "axios";

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

const ModalSearch = ({ label, handleChangePurchaseCode }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState([]);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        const getSearchData = async () => {
            // if (!keyword) return;
            const res = await axios.get(
                "http://localhost:3000/json/purchasecode.json"
            );
            const result = res.data.filter(
                (item) =>
                    item.codenumber.toLowerCase().indexOf(keyword) > -1 ||
                    item.purchaseuser.toLowerCase().indexOf(keyword) > -1
            );
            setResults(result);
        };

        // 시간이 지난 후에 한번만 코드를 실행 시킨다.
        const delay = setTimeout(() => getSearchData(), 2000);

        return () => clearTimeout(delay);
    }, [keyword]);

    const handleClickSelected = (item) => {
        setSelected(selected.idx === item.idx ? "" : item);
    };

    const handleClickSave = () => {
        if (selected) {
            handleChangePurchaseCode(selected);
            setModalOpen(false);
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
                    {label}
                </button>
            </div>
            <Modal
                isModalOpen={modalOpen}
                modalStyle={modalStyle}
                handleModalClose={() => setModalOpen(false)}
            >
                <div className="modalSearch">
                    <div className="modalSearch__title">
                        <h4>구매 코드 검색</h4>
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleClickSave}
                        >
                            사용하기
                        </button>
                    </div>
                    <div className="modalSearch__body">
                        <FormSection full title="구매코드 검색">
                            <Input
                                label="구매 코드 검색"
                                name="minNum"
                                value={keyword}
                                onChange={(e) =>
                                    setKeyword(e.target.value.toLowerCase())
                                }
                                placeholder={
                                    "구매코드 번호 또는 구매자id를 입력해주세요."
                                }
                            />
                        </FormSection>
                        <br />
                        <FormSection full scroll>
                            <tr>
                                <th>#</th>
                                <th>구매코드</th>
                                <th>구매일자</th>
                                <th>구매방식</th>
                                <th>구매코드번호</th>
                                <th>가격</th>
                                <th>구매자id</th>
                                <th>등록일</th>
                                <th>수정일</th>
                            </tr>
                            {results.map((item, idx) => (
                                <tr
                                    key={idx}
                                    onClick={() => handleClickSelected(item)}
                                >
                                    <td>
                                        <input
                                            type="checkbox"
                                            aria-label="Checkbox"
                                            checked={item.idx === selected.idx}
                                            onChange={() =>
                                                handleClickSelected(item)
                                            }
                                        />
                                    </td>
                                    <td>{item.idx}</td>
                                    <td>{item.purchasedate}</td>
                                    <td>{item.purchasetype}</td>
                                    <td>{item.codenumber}</td>
                                    <td>{item.price}</td>
                                    <td>{item.purchaseuser}</td>
                                    <td>{item.regdate}</td>
                                    <td>{item.moddate}</td>
                                </tr>
                            ))}
                        </FormSection>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default ModalSearch;
