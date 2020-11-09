import React, { useEffect } from "react";
import history from "../../history";

// redux
import { useDispatch, useSelector } from "react-redux";
import formActions from "../../redux/actions/formActions";

import {
    FormLayout,
    FormSection,
    Input,
    RadioSingle,
    Textarea,
    InputDate,
    InputAddress,
    InputFileWithImage,
    RadioTypeCheck,
    RadioMulti,
} from "../../components/Form/Form";

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
    profile: "",
    inextroversion: "0",
    tripTag: {},
};
//working ###
const MemberFormUser = () => {
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
        if (!inputs.profile) {
            alert("프로필 이미지를 추가해주세요.");
            return;
        }
        const fileList = ["profile"];
        dispatch(formActions.submit(inputs, fileList));
    };

    if (!Object.keys(inputs).length) {
        inputs = initialValue;
    }

    return (
        <FormLayout
            onClickInsert={handleClickInsert}
            onClickBack={() => history.goBack()}
        >
            <FormSection>
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
                    onChange={handleChangeInputs}
                    errors={errors}
                />
            </FormSection>
            <FormSection>
                <InputFileWithImage
                    label="프로필"
                    name="profile"
                    value={inputs.profile}
                    onChange={handleChangeInputs}
                    filetype="image"
                />
                <RadioSingle
                    label="이메일 수신"
                    name="emailagree"
                    value={inputs.emailagree}
                    onChange={handleChangeInputs}
                    options={[
                        { value: "Y", title: "수신" },
                        { value: "N", title: "미수신" },
                    ]}
                />

                <RadioSingle
                    label="문자 수신"
                    name="messageagree"
                    value={inputs.messageagree}
                    onChange={handleChangeInputs}
                    options={[
                        { value: "Y", title: "수신" },
                        { value: "N", title: "미수신" },
                    ]}
                />

                <RadioSingle
                    label="문자 수신"
                    name="pushagree"
                    value={inputs.pushagree}
                    onChange={handleChangeInputs}
                    options={[
                        { value: "Y", title: "수신" },
                        { value: "N", title: "미수신" },
                    ]}
                />
            </FormSection>
            <FormSection full>
                <RadioMulti
                    label="관심사 태그"
                    name="tripTag"
                    value={inputs.tripTag}
                    onChange={handleChangeInputs}
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
                <RadioTypeCheck
                    label="내외향성"
                    labelLeft="외향성"
                    labelRight="내향성"
                    name="inextroversion"
                    value={inputs.inextroversion}
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
        </FormLayout>
    );
};

export default MemberFormUser;
