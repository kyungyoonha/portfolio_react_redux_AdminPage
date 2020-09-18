import React, { useState } from "react";

import {
    Input,
    FileUploadMany,
    Textarea,
} from "../../../../components/common/Form/FormComponents";
import FormTable from "../../../../components/common/Form/FormTable";

const navObj = {
    korea: { name: "한국어", short: "(한)" },
    english: { name: "영어", short: "(영)" },
    japan: { name: "일본", short: "(일)" },
    china: { name: "중국어", short: "(중)" },
};

const PlaceAudioUpalod = ({ value, onChange, onUploadFile, errors }) => {
    const [selected, setSelected] = useState("korea");
    // const [files, setFiles] = useState();
    const handleClickNav = (keyword) => {
        setSelected(keyword);
    };

    const onUploadFile2 = (e, type) => {
        const audio = e.target.files;
        console.log(audio);
        // const image = e.target.files[0];
        // // const previewSrc = URL.createObjectURL(image);

        // const formData = new FormData();
        // formData.append("image", image, image.name);
        // if (type === "audioFileName") {
        //     setInputs((state) => ({
        //         ...state,
        //         audioFileName: image.name,
        //     }));
        // }

        // this.props.uploadImage(formData);
    };

    return (
        <React.Fragment>
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
            <FormTable className="mt-5">
                <Input
                    label={`${navObj[selected].short} 가이드 제목`}
                    name="audioTitle"
                    value={value.audioTitle}
                    onChange={onChange}
                    errors={errors}
                />

                <FileUploadMany
                    label={`${navObj[selected].short} 가이드 추가`}
                    name={`audioFile_${selected}`}
                    value={value.audioFileName}
                    onChange={onUploadFile2}
                    ctg={`audioFile_${selected}`}
                />

                <Textarea
                    label={`${navObj[selected].short} 스크립트`}
                    name="etc"
                    value={value.ect}
                    onChange={onChange}
                    rows={6}
                />
            </FormTable>
        </React.Fragment>
    );
};

export default PlaceAudioUpalod;
