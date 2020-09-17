import React from "react";

import {
    Input,
    FileUpload,
    Textarea,
} from "../../../../components/common/Form/FormComponents";
import FormTable from "../../../../components/common/Form/FormTable";

const PlaceAudioUpalod = ({ value, onChange, onUploadFile, errors }) => {
    return (
        <React.Fragment>
            <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                    <span className="nav-link active">한국어</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">영어</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">일본어</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link">중국어</span>
                </li>
            </ul>
            <FormTable>
                <Input
                    label="관광지 코드"
                    name="audioTitle"
                    value={value.audioTitle}
                    onChange={onChange}
                    errors={errors}
                />

                <FileUpload
                    label="가이드 추가"
                    name="audioFileName"
                    value={value.audioFileName}
                    onChange={onUploadFile}
                    ctg="audioFileName"
                />

                <Textarea
                    label="스크립트"
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
