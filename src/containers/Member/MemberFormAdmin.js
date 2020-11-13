import React, { useEffect } from "react";
import history from "../../history";

// redux
import { useDispatch, useSelector } from "react-redux";
import formActions from "../../redux/actions/formActions";

// components
import FormLayout from "../../components/Form/FormLayout";
import FormSection from "../../components/Form/FormSection";
import Input from "../../components/Form/Input";
import InputDate from "../../components/Form/InputDate";
import InputAddress from "../../components/Form/InputAddress";
import Select from "../../components/Form/Select";
import RadioSingle from "../../components/Form/RadioSingle";
import Textarea from "../../components/Form/Textarea";

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
    const dispatch = useDispatch();
    let { inputs, errors } = useSelector((state) => state.form);

    useEffect(() => {
        dispatch(formActions.init(initialValue));
        return () => dispatch(formActions.initialize());
    }, [dispatch]);

    const handleChangeInputs = (e) => {
        dispatch(formActions.changeValue(e));
    };

    const handleClickInsert = (e) => {
        e.preventDefault();
        dispatch(formActions.submit({ inputs }));
    };

    if (!Object.keys(inputs).length) {
        inputs = initialValue;
    }

    return (
        <FormLayout
            onClickInsert={handleClickInsert}
            onClickBack={() => history.goBack()}
        >
            <FormSection center title="매니저 추가">
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
                <RadioSingle
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
                <InputAddress
                    label="주소"
                    name="address"
                    value={inputs.address}
                    onChange={handleChangeInputs}
                    errors={errors}
                />

                <Input
                    label="입사년도"
                    name="entryYear"
                    value={inputs.entryYear}
                    onChange={handleChangeInputs}
                />

                <Select
                    label="직무"
                    name="duty"
                    value={inputs.duty}
                    onChange={handleChangeInputs}
                    errors={errors}
                    options={[
                        { value: "1", title: "팀원" },
                        { value: "2", title: "매니저" },
                        { value: "3", title: "팀장" },
                        { value: "4", title: "부장" },
                        { value: "5", title: "기타" },
                    ]}
                />

                <Select
                    label="부서"
                    name="department"
                    value={inputs.department}
                    onChange={handleChangeInputs}
                    errors={errors}
                    options={[
                        { value: "1", title: "해외팀" },
                        { value: "2", title: "영업" },
                        { value: "3", title: "마케팅" },
                        { value: "4", title: "개발" },
                        { value: "5", title: "생산" },
                        { value: "6", title: "기타" },
                    ]}
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
    );
};

export default MemberFormAdmin;
