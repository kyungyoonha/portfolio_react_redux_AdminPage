import React, { useState } from "react";
import "./FormAudio.scss";
import FormAudioModal from "./FormAudioModal";

const options = [
    { value: "Y", title: "有" },
    { value: "N", title: "無" },
];

const FormAudio = ({
    inputs,
    onChange,
    audioList,
    handleChangeAudioList,
    handleDeleteAudioList,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIdx, setSelectedIdx] = useState("");

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSelectedIdx = (e) => {
        setSelectedIdx(e.target.value);
    };
    const handleClickDelete = () => {
        if (selectedIdx) {
            handleDeleteAudioList(selectedIdx);
        } else {
            alert("삭제할 목록을 선택해주세요");
        }
    };

    return (
        <div className="formSection formAudio">
            <table className="table">
                <tbody>
                    <tr>
                        <th rowSpan="4" className="formAudio__title">
                            <label>※ 세부 관광지 오디오 가이드</label>
                        </th>
                        <td colSpan="3">
                            {options.map((option) => (
                                <div
                                    key={option.value}
                                    className="form-check form-check-inline"
                                >
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="subaudioYN"
                                        value={option.value}
                                        checked={
                                            inputs.subaudioYN === option.value
                                        }
                                        onChange={onChange}
                                        id={"subaudioYN" + option.value}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor={"subaudioYN" + option.value}
                                    >
                                        {option.title}
                                    </label>
                                </div>
                            ))}
                        </td>
                    </tr>
                    <tr className="text-center">
                        <td>
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-block"
                                onClick={handleClickDelete}
                                disabled={inputs.hasAudio === "no"}
                            >
                                (-) 삭제
                            </button>
                        </td>
                        <td>선택</td>
                        <td>
                            <select
                                name="audioSelect"
                                value={inputs.audioSelect}
                                onChange={handleSelectedIdx}
                                className="custom-select"
                                disabled={inputs.hasAudio === "no"}
                            >
                                <option value="">
                                    {audioList[0]
                                        ? "선택해주세요"
                                        : "아래 + 버튼으로 추가"}
                                </option>
                                {audioList.map((audio, idx) => (
                                    <option key={idx} value={idx}>
                                        {audio.inputs.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-md btn-block"
                                disabled={inputs.hasAudio === "no"}
                                onClick={handleModalOpen}
                            >
                                (+)추가하기
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="formAudio__list">
                            {audioList.map((audio, idx) => (
                                <p key={idx}>{audio.inputs.name}</p>
                            ))}
                        </td>
                    </tr>

                    <FormAudioModal
                        isModalOpen={isModalOpen}
                        handleModalClose={handleModalClose}
                        handleChangeAudioList={handleChangeAudioList}
                    />
                </tbody>
            </table>
        </div>
    );
};

export default FormAudio;
