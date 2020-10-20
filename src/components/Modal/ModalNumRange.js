import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import "./ModalNumRange.scss";
import { FormSection, Input } from "../Form/Form";
import { checkNumber } from "../../util/validate";

const modalStyle = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        marginBottom: "50px",
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "550px",
    },
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "5",
    },
};

const ModalNumRange = ({ modalOpen, onChange, handleCloseModal }) => {
    const [error, setError] = useState("시간을 선택해주세요.");
    const [minNum, setMinNum] = useState("1");
    const [maxNum, setMaxNum] = useState("1");

    useEffect(() => {
        if (checkNumber(minNum) || checkNumber(maxNum)) {
            setError("숫자만 입력가능합니다.");
        } else if (Number(minNum) > Number(maxNum)) {
            setError("최소인원보다 더 큰 수만 선택 가능합니다.");
        } else {
            setError("");
        }
    }, [minNum, maxNum]);

    const handleClickSave = () => {
        if (!error) {
            onChange(minNum + "명 ~ " + maxNum + "명");
            handleCloseModal();
        } else {
            setError("시간을 다시 선택해주세요.");
        }
    };

    return (
        <ReactModal
            isOpen={modalOpen}
            contentLabel="Minimal Modal Example"
            style={modalStyle}
            onRequestClose={handleCloseModal}
        >
            <div className="modalNumRange">
                <div className="modalNumRange__title">
                    <h4>투어 인원수</h4>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleClickSave}
                    >
                        사용하기
                    </button>
                </div>
                <div className="modalNumRange__body">
                    <FormSection full>
                        <Input
                            label="최소 인원"
                            name="minNum"
                            value={minNum}
                            onChange={(e) => setMinNum(e.target.value)}
                        />
                        <Input
                            label="최대 인원"
                            name="maxNum"
                            value={maxNum}
                            onChange={(e) => setMaxNum(e.target.value)}
                        />
                        <tr>
                            <td colSpan="2">
                                <div className="modalNumRange__footer">
                                    {minNum} 명 ~ {maxNum} 명
                                </div>
                                <div style={{ height: "30px" }}>
                                    {error && (
                                        <p className="modalNumRange__error float-left">
                                            <i className="fas fa-exclamation-circle"></i>
                                            {error}
                                        </p>
                                    )}
                                </div>
                            </td>
                        </tr>
                    </FormSection>
                </div>
                <button
                    type="button"
                    className="btn btn-secondary float-right"
                    onClick={handleCloseModal}
                >
                    닫기
                </button>
            </div>
        </ReactModal>
    );
};

export default ModalNumRange;
