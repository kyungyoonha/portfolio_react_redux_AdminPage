import React, { useState } from "react";
import history from "../../../history";

import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";

import {
    FormLayout,
    FormSection,
    Input,
    Select,
    RatioSingle,
    Textarea,
    FileSingle,
} from "../../../components/Form/Form";

import {
    optionsCountry,
    optionsCity,
    optionsRegion,
} from "../../../util/options";
import { validateAll, validateDriver } from "../../../util/validateMember";
import useInputs from "../../../Hooks/useInputs";

const initialValue = {
    driver_id: "",
    countryCtg: "KOREA",
    country: "KOREA",
    state: "",
    city: "",
    name: "",
    birth: "",
    contactNumber: "",
    carType: "",
    plateNumber: "",
    licenseNumber: "",
    belong: "private",
    companyName: "",
    scheduleCount: "",
    complain: "",
    score: "",
    etc: "",
};

const initialValueFiles = {
    profile: {},
    carPic: {},
    license: {},
};
//working
const UserFormDriver = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [files, setFiles] = useState(initialValueFiles);
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateDriver,
        setErrors
    );

    // const [inputs, setInputs] = useState(initialValue);
    // const handleChangeInputs = (e) => {
    //     const { name, value } = e.target;
    //     const error = validateDriver(name, value);

    //     setInputs((state) => ({ ...state, [name]: value }));
    //     setErrors((state) => ({ ...state, [name]: error }));

    //     if (name === "countryCtg") {
    //         setInputs((state) => ({
    //             ...state,
    //             country: value === "KOREA" ? "KOREA" : "",
    //         }));
    //     } else if (name === "belong") {
    //         setInputs((state) => ({
    //             ...state,
    //             companyName: "",
    //         }));
    //     }
    // };

    const handleChangeFile = (e) => {
        const { name, files } = e.target;
        setFiles((state) => ({
            ...state,
            [name]: {
                src: URL.createObjectURL(files[0]),
                filename: files[0].name,
                file: files[0],
            },
        }));
    };

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateDriver);

        if (isValid) {
            console.log("에러 없음");
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }

        if (!files.profile.src) {
            alert("기사 사진을 선택해주세요.");
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
                        label="id"
                        name="driver_id"
                        value={inputs.driver_id}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <RatioSingle
                        label="국가"
                        name="countryCtg"
                        value={inputs.countryCtg}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "KOREA", title: "국내" },
                            { value: "OVERSEAS", title: "국외" },
                        ]}
                    />

                    <Select
                        label="(국가 선택)"
                        name="country"
                        value={inputs.country}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={optionsCountry(inputs.countryCtg)}
                        disabled={inputs.countryCtg === "KOREA"}
                    />

                    <Select
                        label="시/도"
                        name="state"
                        value={inputs.state}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={optionsCity(inputs.state)}
                    />
                    <Select
                        label="지역"
                        name="city"
                        value={inputs.city}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={optionsRegion(inputs.city)}
                    />

                    <Input
                        label="이름"
                        name="name"
                        value={inputs.name}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="생년월일"
                        name="birth"
                        value={inputs.birth}
                        onChange={handleChangeInputs}
                    />

                    <Input
                        label="전화번호"
                        name="contactNumber"
                        value={inputs.contactNumber}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <Input
                        label="차종"
                        name="carType"
                        value={inputs.carType}
                        onChange={handleChangeInputs}
                    />
                    <Input
                        label="차량번호"
                        name="plateNumber"
                        value={inputs.plateNumber}
                        onChange={handleChangeInputs}
                    />

                    <Input
                        label="면허증 번호"
                        name="licenseNumber"
                        value={inputs.licenseNumber}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <RatioSingle
                        label="소속"
                        name="belong"
                        value={inputs.belong}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "private", title: "개인" },
                            { value: "company", title: "기업" },
                        ]}
                    />

                    <Input
                        label="회사명"
                        name="companyName"
                        value={inputs.companyName}
                        onChange={handleChangeInputs}
                        disabled={inputs.belong === "private"}
                    />

                    <Input
                        label="운행 횟수"
                        name="scheduleCount"
                        value={inputs.scheduleCount}
                        onChange={handleChangeInputs}
                    />
                    <Input
                        label="컴플레인"
                        name="complain"
                        value={inputs.complain}
                        onChange={handleChangeInputs}
                    />
                    <Input
                        label="평점"
                        name="score"
                        value={inputs.score}
                        onChange={handleChangeInputs}
                    />
                    <Textarea
                        label="기타"
                        name="etc"
                        value={inputs.ect}
                        onChange={handleChangeInputs}
                        rows={6}
                    />
                </FormSection>
                <FormSection>
                    <FileSingle
                        label="기사 사진"
                        name="profile"
                        file={files.profile}
                        onChange={handleChangeFile}
                    />

                    <FileSingle
                        label="면허증 사진"
                        name="license"
                        file={files.license}
                        onChange={handleChangeFile}
                    />

                    <FileSingle
                        label="차량 사진"
                        name="carPic"
                        file={files.carPic}
                        onChange={handleChangeFile}
                    />
                </FormSection>
            </FormLayout>
        </Content>
    );
};

export default UserFormDriver;
