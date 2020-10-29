import React, { useState } from "react";
import history from "../../../history";
import { validateAll, validateUser } from "../../../util/validate";

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
    InputAddress,
    File,
    RadioTypeCheck,
    RadioMulti,
} from "../../../components/Form/Form";

const initialValue = {
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
    profilename: "",
    profilepath: "",
    inextroversion: "0",
};
//working ###
const MemberFormUser = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [tripTag, setTripTag] = useState({});
    const [inputs, setInputs, handleChangeInputs, handleChangeFile] = useInputs(
        initialValue,
        validateUser,
        setErrors
    );

    const handleClickInsert = async () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateUser);
        if (isValid) {
            // const res = await axios.post(
            //     `http://localhost:8000/${pageId}/update`,
            //     {
            //         ...inputs,
            //         regdate: new Date().toISOString(),
            //         reguser: name,
            //     }
            // );

            // const tagList = Object.keys(tripTag).filter((tag) => tripTag[tag]);
            // tagList.forEach(async (tag) => {
            //     await axios.post(`http://localhost:8000/triptag`, {
            //         idx: "",
            //         useridx: res.idx,
            //         tag: tag,
            //         regdate: res.regdate,
            //         reguser: res.reguser,
            //     });
            // });

            // dispatch(boardAction_update(pageId, res));
            dispatch(boardAction_update(pageId, inputs));
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

    const handleChangeTags = (e) => {
        const { value, checked } = e.target;
        setTripTag((state) => ({
            ...state,
            [value]: checked,
        }));
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
                    setInputs={setInputs}
                    onChange={handleChangeInputs}
                    errors={errors}
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
                <Textarea
                    label="기타"
                    name="etc"
                    value={inputs.ect}
                    onChange={handleChangeInputs}
                    rows={6}
                />
            </FormSection>
            <FormSection>
                <File
                    label="프로필"
                    name="profile"
                    filename={inputs.profilename}
                    filepath={inputs.profilepath}
                    handleChangeFile={handleChangeFile}
                    filetype="image"
                />
            </FormSection>
            <FormSection full>
                <RadioTypeCheck
                    label="내외향성"
                    labelLeft="외향성"
                    labelRight="내향성"
                    name="inextroversion"
                    value={inputs.inextroversion}
                    onChange={handleChangeInputs}
                />
                <RadioMulti
                    label="관심사 태그"
                    name="tripTag"
                    value={tripTag}
                    onChange={handleChangeTags}
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
            </FormSection>
        </FormLayout>
    );
};

export default MemberFormUser;
