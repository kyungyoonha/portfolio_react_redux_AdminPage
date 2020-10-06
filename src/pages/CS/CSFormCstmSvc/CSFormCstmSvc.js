// import React from "react";

// const CSFormCstmSvc = () => {
//     return <div>CSFormCstmSvc</div>;
// };

// export default CSFormCstmSvc;

import React, { useState } from "react";
import history from "../../../history";
import validateInput from "../../../util/validateInput";
import {
    Input,
    Select,
    RatioSingle,
    FormLayout2,
    FormSection,
    SelectMultiCustom,
    Textarea,
    FileUpload,
} from "../../../components/Form/Form";
import {
    optionsCity,
    optionsCountry,
    optionsRegion,
} from "../../../util/options";
import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";

const PurchFormInfo = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [fileImg, setFileImg] = useState();
    const [inputs, setInputs] = useState({
        name: "",
        content: "",
        title: "",
        hiddenStatus: "",
        user: "",
        sendEmail: "",
        sendContent: "",
    });
    const [multiInfo, setMultiInfo] = useState({
        tour: [
            { seq: 1, value: "" },
            { seq: 2, value: "" },
        ],
        driver: [
            { seq: 1, value: "" },
            { seq: 2, value: "" },
        ],
        hobby: [
            { seq: 1, value: "" },
            { seq: 2, value: "" },
        ],
    });

    const handleChangeInputs = (e) => {
        const { name, value } = e.target;

        setInputs((state) => ({
            ...state,
            [name]: value,
        }));

        // 국적선택 시
        if (name === "countryCtg" && value === "KOREA") {
            setInputs((state) => ({
                ...state,
                country: "KOREA",
            }));
        }

        // 유효값 체크
        const error = validateInput(name, value);
        setErrors((state) => ({
            ...state,
            [name]: error,
        }));
    };

    const onUploadFile = (e, type) => {
        const image = e.target.files[0];
        // const previewSrc = URL.createObjectURL(image);
        // const formData = new FormData();
        // formData.append("image", image, image.name);

        setFileImg(image.name);

        // this.props.uploadImage(formData);
    };

    const handleClickInsert = () => {};
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
                <FormSection>
                    <Input
                        label="등록자"
                        name="name"
                        value={inputs.name}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <FileUpload
                        label="파일 등록"
                        name="file"
                        value={fileImg}
                        onChange={onUploadFile}
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
                        value={inputs.name}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Select
                        label="지역 코드"
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
                        errors={errors}
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
                        value={inputs.content}
                        onChange={handleChangeInputs}
                        rows={8}
                    />
                </FormSection>
            </FormLayout2>
        </Content>
    );
};

export default PurchFormInfo;
