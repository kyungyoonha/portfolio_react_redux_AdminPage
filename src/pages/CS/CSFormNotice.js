import React from "react";
import history from "../../history";
import useInput222 from "../../Hooks/useInput222";
import FormLayout from "../../Layout/FormLayout";
import {
    FormSection,
    Input,
    InputRadioSingle,
    InputFile,
    InputTextarea,
} from "../../components";

const initialValue = {
    title: "",
    showYN: "N",
    topYN: "N",
    contents: "",
    file: [],
};

//working ###
const CSFormNotice = () => {
    const { inputs, errors, onChange, onSubmit } = useInput222(initialValue);

    const handleSubmit = () => {
        const fileList = ["file"];
        onSubmit(inputs, fileList);
    };

    return (
        <FormLayout
            onClickInsert={handleSubmit}
            onClickBack={() => history.goBack()}
        >
            <FormSection center title="공지 추가">
                <Input
                    label="제목"
                    name="title"
                    value={inputs.title}
                    onChange={onChange}
                    error={errors.title}
                />
                <InputRadioSingle
                    label="공개여부"
                    name="showYN"
                    value={inputs.showYN}
                    onChange={onChange}
                    options={[
                        { value: "Y", title: "공개" },
                        { value: "N", title: "비공개" },
                    ]}
                />
                <InputFile
                    label="첨부파일"
                    name="file"
                    value={inputs.file.length ? inputs.file[0].file : ""}
                    filename={inputs.filename}
                    onChange={onChange}
                    filetype="raw"
                />
                <InputRadioSingle
                    label="상단노출"
                    name="topYN"
                    value={inputs.topYN}
                    onChange={onChange}
                    options={[
                        { value: "Y", title: "상단노출" },
                        { value: "N", title: "비공개" },
                    ]}
                />
                <InputTextarea
                    label="내용"
                    name="contents"
                    value={inputs.contents}
                    onChange={onChange}
                    rows={8}
                    error={errors.contents}
                />
            </FormSection>
        </FormLayout>
    );
};

export default CSFormNotice;
