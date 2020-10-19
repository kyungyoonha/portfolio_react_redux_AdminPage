import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import "./ModalNumRange.scss";
import { Select } from "../Form/Form";

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
        if (Number(minNum) > Number(maxNum)) {
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
            <div className="timePicker">
                <div className="timePicker__title">
                    <h4>운영 시간</h4>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleClickSave}
                    >
                        사용하기
                    </button>
                </div>
                <div className="timePicker__body">
                    <label className="col-form-label">시작시간:</label>
                    <Select
                        label="최소 인원"
                        name="minNum"
                        value={minNum}
                        onChange={(e) => setMinNum(e.target.value)}
                        options={[...new Array(30)].map((_, i) => ({
                            value: i + 1,
                            title: i + 1 + "명",
                        }))}
                    />
                    <label className="col-form-label">종료시간:</label>
                    <Select
                        label="최대 인원"
                        name="maxNum"
                        value={maxNum}
                        onChange={(e) => setMaxNum(e.target.value)}
                        options={[...new Array(30)].map((_, i) => ({
                            value: i + 1,
                            title: i + 1 + "명",
                        }))}
                    />
                </div>
                <div className="timePicker__footer">
                    {minNum} 명 ~ {maxNum} 명
                </div>
                {error && (
                    <p className="timePicker__error float-left">
                        <i className="fas fa-exclamation-circle"></i>
                        {error}
                    </p>
                )}
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
