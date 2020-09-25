import React, { useState } from "react";
import ModalAudio from "./ModalAudio/ModalAudio";

const SectionAudio = ({
    inputs,
    onChange,
    audioList,
    handleChangeAudioList,
}) => {
    const options = [
        { value: "yes", title: "有" },
        { value: "no", title: "無" },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
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
                        disabled={inputs.hasAudio === "no"}
                    >
                        (-) 삭제
                    </button>
                </td>
                <td>첫번째</td>
                <td>
                    <select
                        name="audioSelect"
                        value={inputs.audioSelect}
                        onChange={onChange}
                        className="custom-select"
                        disabled={inputs.hasAudio === "no"}
                    >
                        <option value="">...</option>
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
                <td colSpan="3" style={{ height: "200px" }}></td>
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
            <ModalAudio
                isModalOpen={isModalOpen}
                handleModalClose={handleModalClose}
                audioList={audioList}
                handleChangeAudioList={handleChangeAudioList}
            />
        </React.Fragment>
    );
};

export default SectionAudio;
