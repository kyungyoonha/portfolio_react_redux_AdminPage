import React, { useState } from "react";
import history from "../../../history";
import {
    FileUpload,
    FormLayout,
    FormSection,
    Input,
    RatioMulti,
    File,
    RatioSingle,
    Textarea,
    InputForm,
} from "../../../components/Form/Form";

import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";
import { validateAll, validateNotice } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";

const initialValue = {
    // title: "",
    // createMng: "",
    // displayOptions: {
    //     hiddenStatus: true,
    //     displayTop: true,
    // },
    // content: "",
    // fileImg: {
    //     src: "",
    //     filename: "",
    //     file: "",
    // },
    idx: "",
    title: "",
    showyn: "",
    attachfile: "",
    topYN: "",
    contents: "",
    filepath: "",
    regdate: "",
    reguser: "",
    moddate: "",
    moduser: "",
};

//working
const CSFormNotice = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateNotice,
        setErrors
    );

    const handleChangeFile = (e) => {
        const image = e.target.files[0];
        setInputs((state) => ({
            ...state,
            fileImg: {
                src: "",
                filename: image.name,
                file: image,
            },
        }));
    };

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
        <Content>
            <ContentNav pageId={pageId}>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>

            <FormLayout>
                <FormSection size="center" title="[공지 추가]">
                    <Input
                        label="제목"
                        name="title"
                        value={inputs.title}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <RatioSingle
                        label="공개여부"
                        name="showyn"
                        value={inputs.showyn}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={[
                            { value: "Y", title: "공개" },
                            { value: "N", title: "비공개" },
                        ]}
                    />

                    {/* <FileUpload
                        label="첨부 파일"
                        name="file"
                        value={inputs.fileImg.filename}
                        onChange={handleChangeFile}
                    /> */}

                    <InputForm
                        label="대표 사진"
                        name="filepath"
                        filename={inputs.attachfile}
                        path={inputs.filepath}
                        handleChangeFile={handleChangeFile}
                    />
                    <RatioSingle
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
        </Content>
    );
};

export default CSFormNotice;
