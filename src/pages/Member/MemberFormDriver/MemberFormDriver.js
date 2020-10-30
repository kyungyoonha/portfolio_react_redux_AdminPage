import React, { useState } from "react";
import history from "../../../history";
import { validateAll, validateDriver } from "../../../util/validate";

// redux
import { useDispatch } from "react-redux";
import { boardAction_update } from "../../../redux/actions";

import useInputs from "../../../Hooks/useInputs";
import { ContentBtn, ContentNav } from "../../../components/Content/Content";
import {
    FormLayout,
    FormSection,
    Input,
    RadioSingle,
    Textarea,
    InputDate,
    File,
    SelectAPI,
} from "../../../components/Form/Form";

const initialValue = {
    drivername: "",
    id: "",
    pw: "",
    nationtype: "1",
    nationcodeidx: "1",
    areacodeidx: "",
    birthday: new Date("1900-01-01"),
    telnumber: "",
    cartype: "",
    carnumber: "",
    carlicense: "",
    businesstype: "1",
    grade: "",
    etc: "",
    businessname: "",
};

//working ###
const MemberFormDriver = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs, handleChangeFile] = useInputs(
        initialValue,
        validateDriver,
        setErrors
    );
    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateDriver);

        // if (!files.profile.src) {
        //     alert("기사 사진을 선택해주세요.");
        //     return;
        // }

        if (isValid) {
            console.log("에러 없음");
            dispatch(boardAction_update(pageId, inputs));
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

    return (
        <FormLayout>
            <ContentNav pageId={pageId}>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>
            <FormSection center title="기사 회원 등록">
                <Input
                    label="이름"
                    name="drivername"
                    value={inputs.drivername}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="아이디"
                    name="id"
                    value={inputs.id}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="비밀번호"
                    type="password"
                    name="pw"
                    value={inputs.pw}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <RadioSingle
                    label="국가 분류"
                    name="nationtype"
                    value={inputs.nationtype || "1"}
                    onChange={handleChangeInputs}
                    options={[
                        { value: "1", title: "국내" },
                        { value: "2", title: "국외" },
                    ]}
                />
                <SelectAPI
                    label="국가 코드"
                    searchId="nationcode"
                    value={inputs.nationcodeidx}
                    searchItems={["koreanname", "code2"]}
                    onChange={handleChangeInputs}
                    disabled={inputs.nationtype === "1"}
                    error={errors["nationcodeidx"]}
                />

                <SelectAPI
                    label="시도 코드"
                    searchId="areacode"
                    value={inputs.areacodeidx}
                    searchItems={[
                        "sidoname",
                        "sidocode",
                        "areaname",
                        "areacode",
                    ]}
                    onChange={handleChangeInputs}
                    error={errors["areacodeidx"]}
                />
                <InputDate
                    label="생년월일"
                    name="birthday"
                    value={inputs.birthday}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="전화번호"
                    name="telnumber"
                    value={inputs.telnumber}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="차종"
                    name="cartype"
                    value={inputs.cartype}
                    onChange={handleChangeInputs}
                />
                <Input
                    label="차량번호"
                    name="carnumber"
                    value={inputs.carnumber}
                    onChange={handleChangeInputs}
                />
                <Input
                    label="면허증 번호"
                    name="carlicense"
                    value={inputs.carlicense}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <RadioSingle
                    label="소속"
                    name="businesstype"
                    value={inputs.businesstype}
                    onChange={handleChangeInputs}
                    options={[
                        { value: "1", title: "개인" },
                        { value: "2", title: "사업자" },
                    ]}
                />
                <Input
                    label="회사명"
                    name="businessname"
                    value={inputs.businessname}
                    onChange={handleChangeInputs}
                    errors={errors}
                />

                <Input
                    label="평점"
                    name="grade"
                    value={inputs.grade}
                    onChange={handleChangeInputs}
                />
                <Textarea
                    label="기타"
                    name="etc"
                    value={inputs.etc}
                    onChange={handleChangeInputs}
                    rows={6}
                />
            </FormSection>
            <FormSection>
                <File
                    label="기사 사진"
                    name="driver"
                    filename={inputs.drivername}
                    filepath={inputs.driverpath}
                    handleChangeFile={handleChangeFile}
                    filetype="image"
                />
                <File
                    label="면허증 사진"
                    name="license"
                    filename={inputs.licensename}
                    filepath={inputs.licensepath}
                    handleChangeFile={handleChangeFile}
                    filetype="image"
                />
                <File
                    label="차량 사진"
                    name="car"
                    filename={inputs.carname}
                    filepath={inputs.carpath}
                    handleChangeFile={handleChangeFile}
                    filetype="image"
                />
            </FormSection>
        </FormLayout>
    );
};

export default MemberFormDriver;
