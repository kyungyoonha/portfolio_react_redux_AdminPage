import React from "react";
import history from "../../history";
import useInput222 from "../../Hooks/useInput222";
import FormLayout from "../../Layout/FormLayout";
import {
    FormSection,
    Input,
    InputRadioSingle,
    InputDate,
    InputFileWithImage,
    InputAddress,
    InputRatioMulti,
    InputRadioCheck,
    InputTextarea,
} from "../../components";

const initialValue = {
    username: "",
    id: "",
    pw: "",
    birthday: new Date("1990-01-01"),
    telnumber: "",
    nickname: "",
    email: "",
    address: "",
    emailagree: "N",
    messageagree: "N",
    pushagree: "N",
    etc: "",
    profile: [],
    inextroversion: "0",
    tripTag: {},
};
//working ###
const MemberFormUser = () => {
    const { inputs, errors, onChange, onSubmit } = useInput222(initialValue);

    const handleSubmit = () => {
        const fileList = ["profile"];
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
                    name="username"
                    value={inputs.username}
                    onChange={onChange}
                    error={errors.username}
                />
                <Input
                    label="id"
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
                    label="별명"
                    name="nickname"
                    value={inputs.nickname}
                    onChange={onChange}
                    error={errors.nickname}
                />
                <Input
                    label="이메일"
                    name="email"
                    value={inputs.email}
                    onChange={onChange}
                    error={errors.email}
                />
                <InputAddress
                    label="주소"
                    name="address"
                    value={inputs.address}
                    onChange={onChange}
                    error={errors.address}
                />
            </FormSection>
            <FormSection>
                <InputFileWithImage
                    label="프로필"
                    name="profile"
                    value={inputs.profile.length ? inputs.profile[0].file : ""}
                    onChange={onChange}
                    filetype="image"
                />
                <InputRadioSingle
                    label="이메일 수신"
                    name="emailagree"
                    value={inputs.emailagree}
                    onChange={onChange}
                    options={[
                        { value: "Y", title: "수신" },
                        { value: "N", title: "미수신" },
                    ]}
                />

                <InputRadioSingle
                    label="문자 수신"
                    name="messageagree"
                    value={inputs.messageagree}
                    onChange={onChange}
                    options={[
                        { value: "Y", title: "수신" },
                        { value: "N", title: "미수신" },
                    ]}
                />

                <InputRadioSingle
                    label="문자 수신"
                    name="pushagree"
                    value={inputs.pushagree}
                    onChange={onChange}
                    options={[
                        { value: "Y", title: "수신" },
                        { value: "N", title: "미수신" },
                    ]}
                />
            </FormSection>
            <FormSection full>
                <InputRatioMulti
                    label="관심사 태그"
                    name="tripTag"
                    value={inputs.tripTag}
                    onChange={onChange}
                    max={3}
                    options={[
                        { key: "picture", title: "사진광" },
                        { key: "sports", title: "스포츠 마니아" },
                        { key: "shopping", title: "쇼핑왕" },
                        { key: "enjoy", title: "흥폭발" },
                        { key: "study", title: "학구파" },
                        { key: "nature", title: "자연인" },
                    ]}
                />
                <InputRadioCheck
                    label="내외향성"
                    labelLeft="외향성"
                    labelRight="내향성"
                    name="inextroversion"
                    value={inputs.inextroversion}
                    onChange={onChange}
                />

                <InputTextarea
                    label="기타"
                    name="etc"
                    value={inputs.ect}
                    onChange={onChange}
                    rows={6}
                />
            </FormSection>
        </FormLayout>
    );
};

export default MemberFormUser;
