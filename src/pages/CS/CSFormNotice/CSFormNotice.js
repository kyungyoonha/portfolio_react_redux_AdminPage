import React, { useState } from "react";
import history from "../../../history";
import {
    FileUpload,
    FormLayout,
    FormSection,
    Input,
    RatioMulti,
    Textarea,
} from "../../../components/Form/Form";

import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";
import { validateAll, validateNotice } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";

const initialValue = {
    title: "",
    createMng: "",
    displayOptions: {
        hiddenStatus: true,
        displayTop: true,
    },
    content: "",
    fileImg: {
        src: "",
        filename: "",
        file: "",
    },
};

//working
const CSFormNotice = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateNotice,
        setErrors
    );

    const handleChangeFile = (e) => {
        const image = e.target.files[0];
        // const previewSrc = URL.createObjectURL(image);
        // const formData = new FormData();
        // formData.append("image", image, image.name);
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
            <ContentNav id={id}>
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

                    <Input
                        label="등록자"
                        name="createMng"
                        value={inputs.createMng}
                        onChange={handleChangeInputs}
                        errors={errors}
                        disabled={true}
                    />

                    <FileUpload
                        label="첨부 파일"
                        name="file"
                        value={inputs.fileImg.filename}
                        onChange={handleChangeFile}
                    />

                    <RatioMulti
                        label="노출"
                        name="displayOptions"
                        value={inputs.displayOptions}
                        onChange={handleChangeInputs}
                        max={3}
                        options={[
                            { key: "hiddenStatus", title: "공개여부" },
                            { key: "displayTop", title: "상단노출" },
                        ]}
                    />

                    <Textarea
                        label="내용"
                        name="content"
                        value={inputs.content}
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
