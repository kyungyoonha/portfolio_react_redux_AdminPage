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
    InputDate,
} from "../../../components/Form/Form";

import {
    optionsCountry,
    optionsCity,
    optionsRegion,
} from "../../../util/options";
import { validateAll, validateDriver } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";
import { useDispatch, useSelector } from "react-redux";
import { boardAction_update } from "../../../redux/actions";

const initialValue = {
    idx: "",
    drivername: "",
    id: "",
    pw: "",
    nationtype: "1",
    nationcode: "KOREA",
    sidocode: "",
    areacode: "",
    birthday: "",
    telnumber: "",
    cartype: "",
    carnumber: "",
    carlicense: "",
    businesstype: "1",
    grade: "",
    etc: "",
    regdate: "",
    reguser: "",
    moddate: "",
    moduser: "",
    trabus: [],
    drivercomplain: [],
};

//working ###
const UserFormDriver = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.user);
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
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
            dispatch(
                boardAction_update(pageId, {
                    ...inputs,
                    regdate: new Date().toISOString(),
                    reguser: name,
                })
            );
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
                <FormSection size="center" title="기사 회원 등록">
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
                    <RatioSingle
                        label="국가 분류"
                        name="nationtype"
                        value={inputs.nationtype || "1"}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "1", title: "국내" },
                            { value: "2", title: "국외" },
                        ]}
                    />
                    <Select
                        label="국가 코드"
                        name="nationcode"
                        value={inputs.nationcode || "KOREA"}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={optionsCountry(inputs.nationcode)}
                        disabled={inputs.nationtype === "1"}
                    />

                    <Select
                        label="시도 코드"
                        name="sidocode"
                        value={inputs.sidocode}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={optionsCity(inputs.sidocode)}
                    />
                    <Select
                        label="지역 코드"
                        name="areacode"
                        value={inputs.areacode}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={optionsRegion(inputs.areacode)}
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
                    <RatioSingle
                        label="소속"
                        name="businesstype"
                        value={inputs.businesstype}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "1", title: "개인" },
                            { value: "2", title: "사업자" },
                        ]}
                    />
                    {/* <Input
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
                    /> */}
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
                {/* <FormSection>
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
                </FormSection> */}
            </FormLayout>
        </Content>
    );
};

export default UserFormDriver;
