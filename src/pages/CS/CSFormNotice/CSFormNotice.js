import React, { useState } from "react";
import history from "../../../history";
import validateInput from "../../../util/validateInput";
import {
    FileUpload,
    FormLayout2,
    FormSection,
    Input,
    RatioMulti,
    Select,
    Textarea,
} from "../../../components/Form/Form";

import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";

const CSFormNotice = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [fileImg, setFileImg] = useState();
    const [inputs, setInputs] = useState({
        title: "",
        createMng: "",
        displayOptions: {},
        content: "",
    });

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setInputs((state) => ({
                ...state,
                displayOptions: {
                    ...state.displayOptions,
                    [name]: checked,
                },
            }));
        } else {
            setInputs((state) => ({
                ...state,
                [name]: value,
            }));
        }

        const error = validateInput(name, value);
        setErrors((state) => ({
            ...state,
            [name]: error,
        }));
    };

    const handleClickInsert = () => {};

    const onUploadFile = (e, type) => {
        const image = e.target.files[0];
        // const previewSrc = URL.createObjectURL(image);

        // const formData = new FormData();
        // formData.append("image", image, image.name);

        setFileImg(image.name);

        // this.props.uploadImage(formData);
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

            <FormLayout2>
                <FormSection size="center">
                    <tr style={{ textAlign: "center" }}>
                        <th
                            colSpan="2"
                            style={{
                                background: "#343a40",
                                color: "white",
                            }}
                        >
                            [알림 추가]
                        </th>
                    </tr>
                    <Input
                        label="제목"
                        name="title"
                        value={inputs.title}
                        onChange={onChange}
                        errors={errors}
                    />

                    <Input
                        label="등록자"
                        name="createMng"
                        value={inputs.createMng}
                        onChange={onChange}
                        errors={errors}
                        disabled={true}
                    />

                    <FileUpload
                        label="면허증 첨부"
                        name="file"
                        value={fileImg}
                        onChange={onUploadFile}
                    />

                    <RatioMulti
                        label="상단 노출"
                        name="displayOptions"
                        value={inputs.displayOptions}
                        onChange={onChange}
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
                        onChange={onChange}
                        rows={8}
                    />
                </FormSection>
            </FormLayout2>
        </Content>
    );
};

export default CSFormNotice;
