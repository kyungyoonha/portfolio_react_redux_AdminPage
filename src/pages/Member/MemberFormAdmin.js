import React from "react";
import history from "../../history";
import useInput222 from "../../Hooks/useInput222";
// components
import FormLayout from "../../Layout/FormLayout";
import {
    FormSection,
    Input,
    InputRadioSingle,
    InputDate,
    InputAddress,
    InputSelect,
    InputTextarea,
} from "../../components";

const initialValue = {
    username: "",
    id: "",
    pw: "",
    level: "2",
    birthday: new Date("1990-01-01"),
    telnumber: "",
    email: "",
    englishname: "",
    address: "",
    entryYear: "",
    duty: "1",
    department: "1",
    etc: "",
};

//working done ###
const MemberFormAdmin = () => {
    const { inputs, errors, onChange, onSubmit } = useInput222(initialValue);

    const handleSubmit = () => {
        onSubmit(inputs);
    };

    return (
        <FormLayout
            onClickInsert={handleSubmit}
            onClickBack={() => history.goBack()}
        >
            <FormSection center title="매니저 추가">
                <Input
                    label="이름"
                    name="username"
                    value={inputs.username}
                    onChange={onChange}
                    error={errors.username}
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
                    name="pw"
                    value={inputs.pw}
                    onChange={onChange}
                    error={errors.pw}
                />
                <InputRadioSingle
                    label="등급"
                    name="level"
                    value={inputs.level}
                    onChange={onChange}
                    options={[
                        { value: "1", title: "슈퍼 관리자" },
                        { value: "2", title: "일반 관리자" },
                    ]}
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
                    label="이메일"
                    name="email"
                    value={inputs.email}
                    onChange={onChange}
                    error={errors.email}
                />
                <Input
                    label="영어이름"
                    name="englishname"
                    value={inputs.englishname}
                    onChange={onChange}
                />
                <InputAddress
                    label="주소"
                    name="address"
                    value={inputs.address}
                    onChange={onChange}
                    error={errors.address}
                />

                <Input
                    label="입사년도"
                    name="entryYear"
                    value={inputs.entryYear}
                    onChange={onChange}
                />

                <InputSelect
                    label="직무"
                    name="duty"
                    value={inputs.duty}
                    onChange={onChange}
                    error={errors.duty}
                    options={[
                        { value: "1", title: "팀원" },
                        { value: "2", title: "매니저" },
                        { value: "3", title: "팀장" },
                        { value: "4", title: "부장" },
                        { value: "5", title: "기타" },
                    ]}
                />

                <InputSelect
                    label="부서"
                    name="department"
                    value={inputs.department}
                    onChange={onChange}
                    error={errors.department}
                    options={[
                        { value: "1", title: "해외팀" },
                        { value: "2", title: "영업" },
                        { value: "3", title: "마케팅" },
                        { value: "4", title: "개발" },
                        { value: "5", title: "생산" },
                        { value: "6", title: "기타" },
                    ]}
                />

                <InputTextarea
                    label="기타"
                    name="etc"
                    value={inputs.etc}
                    onChange={onChange}
                    rows={6}
                />
            </FormSection>
        </FormLayout>
    );
};

export default MemberFormAdmin;
