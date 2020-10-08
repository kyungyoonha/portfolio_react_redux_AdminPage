import React, { useState } from "react";
import history from "../../../history";
import {
    Input,
    Select,
    FormLayout,
    FormSection,
    Textarea,
    FileUpload,
} from "../../../components/Form/Form";

import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";
import { validateAll, validateService } from "../../../util/validateMember";

const initialValue = {
    name: "",
    email: "",
    file: {},
    content: "",
    title: "",
    hiddenStatus: "visible",
    user: "",
    sendEmail: "",
    sendContent: "",
};
//working done
const PurchFormInfo = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [fileImg, setFileImg] = useState();
    const [inputs, setInputs] = useState(initialValue);

    const handleChangeInputs = (e) => {
        const { name, value } = e.target;
        const error = validateService(name, value);

        setInputs((state) => ({ ...state, [name]: value }));
        setErrors((state) => ({ ...state, [name]: error }));

        // 국적선택 시
        if (name === "countryCtg") {
            setInputs((state) => ({
                ...state,
                country: value === "KOREA" ? "KOREA" : "",
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
        const { isValid, checkedErrors } = validateAll(inputs, validateService);

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
                <FormSection>
                    <Input
                        label="등록자"
                        name="name"
                        value={inputs.name}
                        onChange={handleChangeInputs}
                    />

                    <FileUpload
                        label="파일 등록"
                        name="file"
                        value={fileImg}
                        onChange={onUploadFile}
                    />

                    <Input
                        label="수신 이메일"
                        name="email"
                        value={inputs.email}
                        onChange={handleChangeInputs}
                    />

                    <Textarea
                        label="내용"
                        name="content"
                        value={inputs.content}
                        onChange={handleChangeInputs}
                        rows={15}
                    />
                </FormSection>

                <FormSection>
                    <Input
                        label="제목"
                        name="title"
                        value={inputs.title}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Select
                        label="공개 여부"
                        name="hiddenStatus"
                        value={inputs.hiddenStatus}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={[
                            { value: "visible", title: "공개" },
                            { value: "hidden", title: "비공개" },
                        ]}
                    />

                    <Input
                        label="등록자"
                        name="user"
                        value={inputs.user}
                        onChange={handleChangeInputs}
                    />

                    <FileUpload
                        label="파일 등록"
                        name="file"
                        value={fileImg}
                        onChange={onUploadFile}
                    />

                    <Input
                        label="발신 이메일"
                        name="sendEmail"
                        value={inputs.sendEmail}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Textarea
                        label="내용"
                        name="sendContent"
                        value={inputs.sendContent}
                        onChange={handleChangeInputs}
                        rows={8}
                        errors={errors}
                    />
                </FormSection>
            </FormLayout>
        </Content>
    );
};

export default PurchFormInfo;
