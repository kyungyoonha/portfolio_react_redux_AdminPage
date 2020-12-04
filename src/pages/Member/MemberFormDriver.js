import React from "react";
import history from "../../history";
import useInputs from "../../Hooks/useInputs";
import FormLayout from "../../Layout/FormLayout";
import {
    FormSection,
    Input,
    InputRadioSingle,
    InputDate,
    InputFileWithImage,
    InputSelectAPI,
    InputTextarea,
} from "../../components";

const initialValue = {
    drivername: "",
    id: "",
    pw: "",
    pwCheck: "",
    nationtype: "1",
    nationcodeidx: "1",
    areacodeidx: "",
    birthday: new Date("1990-01-01"),
    telnumber: "",
    cartype: "",
    carnumber: "",
    carlicense: "",
    businesstype: "1",
    grade: 0,
    etc: "",
    businessname: "",
    // image
    driverpic: [],
    license: [],
    car: [],
};

//working ###
const MemberFormDriver = () => {
    const { inputs, errors, onChange, onSubmit } = useInputs(initialValue);

    const handleSubmit = () => {
        const fileList = ["driverpic", "car", "license"];
        onSubmit(inputs, fileList);
    };

    return (
        <FormLayout
            onClickInsert={handleSubmit}
            onClickBack={() => history.goBack()}
        >
            <FormSection>
                <Input
                    label="이름"
                    name="drivername"
                    value={inputs.drivername}
                    onChange={onChange}
                    error={errors.drivername}
                />
                <Input
                    label="아이디"
                    name="id"
                    value={inputs.id}
                    onChange={onChange}
                    error={errors.id}
                />
                <Input
                    label="비밀번호"
                    type="password"
                    name="pw"
                    value={inputs.pw}
                    onChange={onChange}
                    error={errors.pw}
                />
                <Input
                    label="비밀번호 체크"
                    name="pwCheck"
                    type="password"
                    value={inputs.pwCheck}
                    onChange={onChange}
                    error={errors.pwCheck}
                />
                <InputRadioSingle
                    label="국가 분류"
                    name="nationtype"
                    value={inputs.nationtype || "1"}
                    onChange={onChange}
                    options={[
                        { value: "1", title: "국내" },
                        { value: "2", title: "국외" },
                    ]}
                />
                <InputSelectAPI
                    label="국가 코드"
                    searchId="nationcode"
                    value={inputs.nationcodeidx}
                    searchItems={["koreanname", "code2"]}
                    onChange={onChange}
                    disabled={inputs.nationtype === "1"}
                    error={errors["nationcodeidx"]}
                />

                <InputSelectAPI
                    label="시도 코드"
                    searchId="areacode"
                    value={inputs.areacodeidx}
                    searchItems={[
                        "sidoname",
                        "sidocode",
                        "areaname",
                        "areacode",
                    ]}
                    onChange={onChange}
                    error={errors["areacodeidx"]}
                />
                <InputDate
                    label="생년월일"
                    name="birthday"
                    value={inputs.birthday}
                    onChange={onChange}
                    error={errors.birthday}
                />
                <Input
                    label="전화번호"
                    name="telnumber"
                    value={inputs.telnumber}
                    onChange={onChange}
                    error={errors.telnumber}
                />
                <Input
                    label="차종"
                    name="cartype"
                    value={inputs.cartype}
                    onChange={onChange}
                />
                <Input
                    label="차량번호"
                    name="carnumber"
                    value={inputs.carnumber}
                    onChange={onChange}
                />
                <Input
                    label="면허증 번호"
                    name="carlicense"
                    value={inputs.carlicense}
                    onChange={onChange}
                    error={errors.carlicense}
                />
                <InputRadioSingle
                    label="소속"
                    name="businesstype"
                    value={inputs.businesstype}
                    onChange={onChange}
                    options={[
                        { value: "1", title: "개인" },
                        { value: "2", title: "사업자" },
                    ]}
                />
                <Input
                    label="회사명"
                    name="businessname"
                    value={inputs.businessname}
                    onChange={onChange}
                    error={errors.businessname}
                />

                <Input
                    label="평점"
                    name="grade"
                    value={inputs.grade}
                    onChange={onChange}
                    error={errors.grade}
                />
                <InputTextarea
                    label="기타"
                    name="etc"
                    value={inputs.etc}
                    onChange={onChange}
                    rows={6}
                />
            </FormSection>
            <FormSection>
                <InputFileWithImage
                    label="기사 사진"
                    name="driverpic"
                    value={
                        inputs.driverpic.length ? inputs.driverpic[0].file : ""
                    }
                    onChange={onChange}
                    filetype="image"
                />
                <InputFileWithImage
                    label="면허증 사진"
                    name="license"
                    value={inputs.license.length ? inputs.license[0].file : ""}
                    onChange={onChange}
                    filetype="image"
                />
                <InputFileWithImage
                    label="차량 사진"
                    name="car"
                    value={inputs.car.length ? inputs.car[0].file : ""}
                    onChange={onChange}
                    filetype="image"
                />
            </FormSection>
        </FormLayout>
    );
};

export default MemberFormDriver;
