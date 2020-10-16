import React, { useState } from "react";
import history from "../../../history";
import {
    FormLayout,
    FormSection,
    Input,
    RatioSingle,
    Textarea,
    InputDate,
    InputAddress,
} from "../../../components/Form/Form";

import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";
import { validateAll, validateMember } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";
import { useDispatch, useSelector } from "react-redux";
import { boardAction_update } from "../../../redux/actions";

const initialValue = {
    idx: "",
    username: "",
    id: "",
    pw: "",
    birthday: "",
    telnumber: "",
    nickname: "",
    email: "",
    address: "",
    emailagree: "N",
    messageagree: "N",
    pushagree: "N",
    etc: "",
    profile: "",
    regdate: "",
    reguser: "",
    moddate: "",
    moduser: "",
    question: [],
    purchase: [],
};
//working [done]
const UserFormMember = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.user);
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
                <FormSection size="center" title="일반회원 추가">
                    <Input
                        label="이름"
                        name="username"
                        value={inputs.username}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <Input
                        label="id"
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
                    <InputAddress
                        label="주소"
                        name="address"
                        value={inputs.address}
                        setInputs={setInputs}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    {/* <Input
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
                    /> */}

                    <RatioSingle
                        label="이메일 수신"
                        name="emailagree"
                        value={inputs.emailagree}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "Y", title: "수신" },
                            { value: "N", title: "미수신" },
                        ]}
                    />

                    <RatioSingle
                        label="문자 수신"
                        name="messageagree"
                        value={inputs.messageagree}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "Y", title: "수신" },
                            { value: "N", title: "미수신" },
                        ]}
                    />

                    <RatioSingle
                        label="문자 수신"
                        name="pushagree"
                        value={inputs.pushagree}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "Y", title: "수신" },
                            { value: "N", title: "미수신" },
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
