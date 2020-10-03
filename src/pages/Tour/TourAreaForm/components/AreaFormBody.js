import React, { useState } from "react";
import AreaFormBodyModal from "./AreaFormBodyModal";

const options = [
    { value: "yes", title: "有" },
    { value: "no", title: "無" },
];

const AreaFormBody = ({
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
        <React.Fragment>
            <tr>
                <th
                    rowSpan="4"
                    style={{ verticalAlign: "middle", width: "25%" }}
                >
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
                                name="hasAudio"
                                value={option.value}
                                checked={inputs.hasAudio === option.value}
                                onChange={onChange}
                                id={"hasAudio" + option.value}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={"hasAudio" + option.value}
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
                <td colSpan="3" style={{ height: "200px" }}>
                    {audioList.map((audio, idx) => (
                        <p key={idx}>{audio.inputs.name}</p>
                    ))}
                </td>
            </tr>
            <tr>
                <th>
                    <label className="col-form-label">
                        ※ 대표 오디오 가이드
                    </label>
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
                                name="hasAudioMain"
                                value={option.value}
                                checked={inputs.hasAudioMain === option.value}
                                onChange={onChange}
                                id={"hasAudioMainMain" + option.value}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={"hasAudioMainMain" + option.value}
                            >
                                {option.title}
                            </label>
                        </div>
                    ))}
                </td>
            </tr>
            <AreaFormBodyModal
                isModalOpen={isModalOpen}
                handleModalClose={handleModalClose}
                handleChangeAudioList={handleChangeAudioList}
            />
        </React.Fragment>
    );
};

export default AreaFormBody;
