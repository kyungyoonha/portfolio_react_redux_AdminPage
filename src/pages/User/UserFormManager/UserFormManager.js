import React, { useState } from "react";
import history from "../../../history";

import {
    FormLayout,
    FormSection,
    Input,
    InputDate,
    RatioSingle,
    Textarea,
} from "../../../components/Form/Form";

import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";
import { validateAll, validateManager } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";

const initialValue = {
    idx: "",
    username: "",
    id: "",
    pw: "",
    level: "2",
    birthday: "",
    telnumber: "",
    email: "",
    englishname: "",
    address: "",
    entryYear: "",
    duty: "",
    department: "",
    etc: "",
    regdate: "",
    reguser: "",
    // moddate: '',
    // moduser: '',
};

// 제출시 regdate / reguser 추가
// 제출시 level => number type으로 전송

//working
const UserFormManager = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateManager,
        setErrors
    );

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateManager);

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
                        label="이름"
                        name="username"
                        value={inputs.username}
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
                        name="pw"
                        value={inputs.pw}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <RatioSingle
                        label="등급"
                        name="level"
                        value={inputs.level}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={[
                            { value: "1", title: "슈퍼 관리자" },
                            { value: "2", title: "일반 관리자" },
                        ]}
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
                        label="이메일"
                        name="email"
                        value={inputs.email}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <Input
                        label="영어이름"
                        name="englishname"
                        value={inputs.englishname}
                        onChange={handleChangeInputs}
                    />
                    <Input
                        label="주소"
                        name="address"
                        value={inputs.address}
                        onChange={handleChangeInputs}
                    />
                </FormSection>
                <FormSection>
                    <Input
                        label="입사년도"
                        name="entryYear"
                        value={inputs.entryYear}
                        onChange={handleChangeInputs}
                    />
                    <Input
                        label="직무"
                        name="duty"
                        value={inputs.duty}
                        onChange={handleChangeInputs}
                    />

                    <Input
                        label="부서"
                        name="department"
                        value={inputs.department}
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
            </FormLayout>
        </Content>
    );
};

export default UserFormManager;
