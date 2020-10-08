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
import { validateAll, validateNotice } from "../../../util/validateMember";

const initialValue = {
    title: "",
    createMng: "",
    displayOptions: {
        hiddenStatus: true,
        displayTop: true,
    },
    content: "",
};
//working done
const CSFormNotice = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [fileImg, setFileImg] = useState();
    const [inputs, setInputs] = useState(initialValue);

    const onChange = (e) => {
        const { name, value, checked } = e.target;
        const error = validateNotice(name, value);

        setInputs((state) => ({ ...state, [name]: value }));
        setErrors((state) => ({ ...state, [name]: error }));

        if (name === "displayOptions") {
            setInputs((state) => ({
                ...state,
                displayOptions: {
                    ...state.displayOptions,
                    [name]: checked,
                },
            }));
        }
    };

    const onUploadFile = (e, type) => {
        const image = e.target.files[0];
        // const previewSrc = URL.createObjectURL(image);
        // const formData = new FormData();
        // formData.append("image", image, image.name);

        setFileImg(image.name);

        // this.props.uploadImage(formData);
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
                <FormSection size="center">
                    <tr style={{ textAlign: "center" }}>
                        <th
                            colSpan="2"
                            style={{
                                background: "#343a40",
                                color: "white",
                            }}
                        >
                            [공지 추가]
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
                        label="첨부 파일"
                        name="file"
                        value={fileImg}
                        onChange={onUploadFile}
                    />

                    <RatioMulti
                        label="노출"
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
                        errors={errors}
                    />
                </FormSection>
            </FormLayout>
        </Content>
    );
};

export default CSFormNotice;
