import React, { useState } from "react";
import history from "../../../history";
import { validateAll, validateNotice } from "../../../util/validate";

import useInputs from "../../../Hooks/useInputs";
import { ContentBtn, ContentNav } from "../../../components/Content/Content";
import {
    FormLayout,
    FormSection,
    Input,
    RadioSingle,
    Textarea,
    InputFile,
} from "../../../components/Form/Form";

const initialValue = {
    title: "",
    showYN: "N",
    filename: "",
    topYN: "N",
    contents: "",
    filepath: "",
};

//working ###
const CSFormNotice = () => {
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs, handleChangeFile] = useInputs(
        initialValue,
        validateNotice,
        setErrors
    );

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateNotice);

        if (isValid) {
            console.log("에러 없음");
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

    return (
        <FormLayout>
            <ContentNav>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>

            <FormSection center title="공지 추가">
                <Input
                    label="제목"
                    name="title"
                    value={inputs.title}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <RadioSingle
                    label="공개여부"
                    name="showYN"
                    value={inputs.showYN}
                    onChange={handleChangeInputs}
                    errors={errors}
                    options={[
                        { value: "Y", title: "공개" },
                        { value: "N", title: "비공개" },
                    ]}
                />
                <InputFile
                    label="첨부파일"
                    name="file"
                    filename={inputs.filename}
                    handleChangeFile={handleChangeFile}
                    filetype="raw"
                />
                <RadioSingle
                    label="상단노출"
                    name="topYN"
                    value={inputs.topYN}
                    onChange={handleChangeInputs}
                    errors={errors}
                    options={[
                        { value: "Y", title: "상단노출" },
                        { value: "N", title: "비공개" },
                    ]}
                />
                <Textarea
                    label="내용"
                    name="contents"
                    value={inputs.contents}
                    onChange={handleChangeInputs}
                    rows={8}
                    errors={errors}
                />
            </FormSection>
        </FormLayout>
    );
};

export default CSFormNotice;
