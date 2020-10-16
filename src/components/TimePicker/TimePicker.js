import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import ReactModal from "react-modal";
import moment from "moment";
import "./TimePicker.scss";

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

const TimePicker = ({ modalOpen, onChange, handleCloseModal }) => {
    const [error, setError] = useState("시간을 선택해주세요.");

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    useEffect(() => {
        if (startTime && endTime) {
            startTime >= endTime &&
                setError("시작 시간 이후의 시간을 선택해주세요.");
        } else {
            setError("");
        }
    }, [startTime, endTime]);

    const handleClickSave = () => {
        if (!error && startTime && endTime) {
            onChange(
                moment(startTime).format("h:mm a") +
                    " - " +
                    moment(endTime).format("h:mm a")
            );
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
                    <ReactDatePicker
                        selected={startTime}
                        onChange={(date) => setStartTime(date)}
                        times
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="form-control"
                        wrapperClassName="timePicker__inputbox"
                    />
                    <label className="col-form-label">종료시간:</label>
                    <ReactDatePicker
                        selected={endTime}
                        onChange={(date) => setEndTime(date)}
                        times
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="form-control"
                        wrapperClassName="timePicker__inputbox"
                    />
                </div>
                <div className="timePicker__footer">
                    {startTime && moment(startTime).format("h:mm a") + " - "}
                    {endTime && moment(endTime).format("h:mm a")}
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

export default TimePicker;
