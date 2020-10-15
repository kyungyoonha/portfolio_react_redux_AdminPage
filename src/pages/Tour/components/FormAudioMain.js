import React, { useState } from "react";
import { Input, FileUploadMany, Textarea } from "../../../components/Form/Form";

const navObj = {
    korea: { name: "한국어", short: "(한)" },
    english: { name: "영어", short: "(영)" },
    japan: { name: "일본", short: "(일)" },
    china: { name: "중국어", short: "(중)" },
};

const options = [
    { value: "Y", title: "有" },
    { value: "N", title: "無" },
];

const FormAudioMain = ({
    size,
    inputs,
    onChange,
    audioMain,
    handleChangeAudioMain,
    disabled,
}) => {
    const [selected, setSelected] = useState("korea");
    const handleClickNav = (keyword) => {
        setSelected(keyword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        handleChangeAudioMain({
            selected,
            name,
            value,
        });
    };

    const handleChangeFiles = (e) => {
        const files = e.target.files;
        const length = files.length;

        handleChangeAudioMain({
            selected,
            name: "files",
            value: [...new Array(length)].map((_, idx) => files[idx]),
        });
    };

    return (
        <div className={`formSection formAudioMain ${size}`}>
            <table className="table">
                <tbody>
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
                                        name="mainaudioYN"
                                        value={option.value}
                                        checked={
                                            inputs.mainaudioYN === option.value
                                        }
                                        onChange={onChange}
                                        id={"mainaudioYN" + option.value}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor={"mainaudioYN" + option.value}
                                    >
                                        {option.title}
                                    </label>
                                </div>
                            ))}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <ul className="nav nav-pills ">
                                {Object.keys(navObj).map((key) => (
                                    <li className="nav-item" key={key}>
                                        <span
                                            className={`nav-link ${
                                                selected === key && "active"
                                            }`}
                                            onClick={() => handleClickNav(key)}
                                        >
                                            {navObj[key].name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>

                    <Input
                        label={`${navObj[selected].short} 가이드 제목`}
                        name="title"
                        value={audioMain[selected].title}
                        onChange={handleChange}
                        errors={{ title: "" }}
                        disabled={disabled}
                    />

                    <FileUploadMany
                        label={`${navObj[selected].short} 가이드 추가`}
                        name="files"
                        files={audioMain[selected].files}
                        onChange={handleChangeFiles}
                        multiple={false}
                        disabled={disabled}
                    />

                    <Textarea
                        label={`${navObj[selected].short} 스크립트`}
                        name="script"
                        value={audioMain[selected].script}
                        onChange={handleChange}
                        rows={8}
                        disabled={disabled}
                    />
                </tbody>
            </table>
        </div>
    );
};

export default FormAudioMain;
