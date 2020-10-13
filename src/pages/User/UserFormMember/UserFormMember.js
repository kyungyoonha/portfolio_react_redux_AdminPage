import React, { useState } from "react";
import history from "../../../history";
import {
    FormLayout,
    FormSection,
    Input,
    Select,
    RatioMulti,
    RatioSingle,
    Textarea,
    InputDate,
} from "../../../components/Form/Form";

import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";
import { validateAll, validateMember } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";

const initialValue = {
    user_id: "",
    password: "",
    name: "",
    birth: "",
    contactNumber: "",
    nickname: "",
    email: "",
    address: "",
    tourCnt: "",
    characteristic: "extroverted",
    tourTags: {},
    recieveEmail: "agree",
    recieveMessage: "agree",
    etc: "",
};

const initialValue2 = {
    idx: "",
    username: "",
    id: "",
    pw: "",
    birthday: "",
    telnumber: "",
    nickname: "",
    email: "",
    address: "",
    emailagree: "",
    messageagree: "",
    pushagree: "",
    etc: "",
    profile: "",
    regdate: "",
    reguser: "",
    moddate: "",
    moduser: "",
};
//working
const UserFormMember = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateMember,
        setErrors
    );

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateMember);

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
                        label="id"
                        name="user_id"
                        value={inputs.user_id}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <Input
                        label="비밀번호"
                        type="password"
                        name="password"
                        value={inputs.password}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <Input
                        label="이름"
                        name="name"
                        value={inputs.name}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <InputDate
                        label="생년월일"
                        name="birth"
                        value={inputs.birth}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <Input
                        label="전화번호"
                        name="contactNumber"
                        value={inputs.contactNumber}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <Input
                        label="별명"
                        name="nickname"
                        value={inputs.nickname}
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
                        label="주소"
                        name="address"
                        value={inputs.address}
                        onChange={handleChangeInputs}
                    />
                </FormSection>
                <FormSection>
                    <Input
                        label="누적투어수"
                        name="tourCnt"
                        value={inputs.tourCnt}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <RatioSingle
                        label="외향/내향"
                        name="characteristic"
                        value={inputs.characteristic}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "extroverted", title: "외향" },
                            { value: "introverted", title: "내향" },
                        ]}
                    />

                    <RatioMulti
                        label="여행태그"
                        name="tourTags"
                        value={inputs.tourTags}
                        onChange={handleChangeInputs}
                        options={[
                            { key: "tiger", title: "호랑이" },
                            { key: "dog", title: "강아지" },
                            { key: "monkey", title: "원숭이" },
                            { key: "bear", title: "곰돌이" },
                        ]}
                    />

                    <RatioSingle
                        label="이메일 수신"
                        name="recieveEmail"
                        value={inputs.recieveEmail}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "agree", title: "수신" },
                            { value: "disagree", title: "미수신" },
                        ]}
                    />

                    <RatioSingle
                        label="문자 수신"
                        name="recieveMessage"
                        value={inputs.recieveMessage}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "agree", title: "수신" },
                            { value: "disagree", title: "미수신" },
                        ]}
                    />

                    <Textarea
                        label="기타"
                        name="etc"
                        value={inputs.ect}
                        onChange={handleChangeInputs}
                        rows={6}
                    />
                </FormSection>
            </FormLayout>
        </Content>
    );
};

export default UserFormMember;
