import React from "react";

const PlaceCodeFormMid = ({ label, name, value, onChange, options }) => {
    return (
        <React.Fragment>
            <tr>
                <th
                    rowSpan="4"
                    style={{ verticalAlign: "middle", width: "25%" }}
                >
                    <label>※ {label}</label>
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
                                name={name}
                                value={option.value}
                                checked={value.hasAudio === option.value}
                                onChange={onChange}
                                id={name + option.value}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={name + option.value}
                            >
                                {option.title}
                            </label>
                        </div>
                    ))}
                </td>
            </tr>
            <tr className="text-center">
                <td>
                    <button className="btn btn-outline-primary btn-block">
                        (-) 삭제
                    </button>
                </td>
                <td>첫번째</td>
                <td>
                    <select
                        name={name}
                        value={value}
                        onChange={onChange}
                        className="custom-select"
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
                                name={name + "Main"}
                                value={option.value}
                                checked={value.hasAudioMain === option.value}
                                onChange={onChange}
                                id={name + "Main" + option.value}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={name + "Main" + option.value}
                            >
                                {option.title}
                            </label>
                        </div>
                    ))}
                </td>
            </tr>
        </React.Fragment>
    );
};

export default PlaceCodeFormMid;
