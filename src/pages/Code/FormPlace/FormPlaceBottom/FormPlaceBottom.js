import React, { useState } from "react";

import {
    Input,
    FileUploadMany,
    Textarea,
} from "../../../../components/Form/FormComponents";
import FormTable from "../../../../components/Form/FormTable";

const navObj = {
    korea: { name: "한국어", short: "(한)" },
    english: { name: "영어", short: "(영)" },
    japan: { name: "일본", short: "(일)" },
    china: { name: "중국어", short: "(중)" },
};

const FormPlaceBottom = ({ audioMain, handleChangeAudioMain, disabled }) => {
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
        <React.Fragment>
            <div className="col-md-12">
                <ul
                    className="nav nav-tabs mb-4"
                    style={{ width: "100%", marginTop: "30px" }}
                >
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
            </div>

            <FormTable>
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
                    rows={6}
                    disabled={disabled}
                />
                <tr style={{ height: "40px" }}></tr>
            </FormTable>
        </React.Fragment>
    );
};

export default FormPlaceBottom;
