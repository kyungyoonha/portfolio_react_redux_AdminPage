import React, { useState } from "react";
import history from "../../../history";
import Template from "../../../components/Template/Template";
import validateInput from "../../../util/validateInput";
import {
    Input,
    Select,
    RatioMulti,
    RatioSingle,
    Textarea,
} from "../../../components/Form/FormComponents";
import FormTable from "../../../components/Form/FormTable";

const FormUser = () => {
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({
        user_id: "",
        password: "",
        name: "",
        birth: "",
        contactNumber: "",
        nickname: "",
        email: "",
        address: "",
        tourCnt: "",
        characteristic: "",
        tourTags: {},
        recieveEmail: "수신",
        recieveMessage: "수신",
        etc: "",
    });
    const onChange = (e, inputName) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setInputs((state) => ({
                ...state,
                [inputName]: {
                    ...state[inputName],
                    [name]: checked,
                },
            }));
        } else {
            setInputs((state) => ({
                ...state,
                [name]: value,
            }));
        }

        const error = validateInput(name, value);
        setErrors((state) => ({
            ...state,
            [name]: error,
        }));
    };

    const handleClickInsert = () => {};

    return (
        <Template title="매니저 정보" navCtg="member">
            <div className="template__top">
                <h4 className="mb-4">추가하기</h4>
                <div>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleClickInsert}
                    >
                        추가하기
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => {
                            history.goBack();
                        }}
                    >
                        뒤로가기
                    </button>
                </div>
            </div>
            <form style={{ margin: "0 15px" }}>
                <div className="no-Gutter2 row">
                    <FormTable size="half">
                        <Input
                            label="id"
                            name="user_id"
                            value={inputs.user_id}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Input
                            label="비밀번호"
                            type="password"
                            name="password"
                            value={inputs.password}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Input
                            label="이름"
                            name="name"
                            value={inputs.name}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Input
                            label="생년월일"
                            name="birth"
                            value={inputs.birth}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Input
                            label="전화번호"
                            name="contactNumber"
                            value={inputs.contactNumber}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Input
                            label="별명"
                            name="nickname"
                            value={inputs.nickname}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Input
                            label="이메일"
                            name="email"
                            value={inputs.email}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Input
                            label="주소"
                            name="address"
                            value={inputs.address}
                            onChange={onChange}
                            errors={errors}
                        />
                    </FormTable>

                    <FormTable size="half">
                        <Input
                            label="누적투어수"
                            name="tourCnt"
                            value={inputs.tourCnt}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Select
                            label="외향/내향"
                            name="characteristic"
                            value={inputs.characteristic}
                            onChange={onChange}
                            errors={errors}
                            options={[
                                { value: "", title: "선택해주세요." },
                                { value: "외향", title: "외향" },
                                { value: "내향", title: "내향" },
                            ]}
                        />

                        <RatioMulti
                            label="여행태그"
                            name="tourTags"
                            value={inputs.tourTags}
                            onChange={onChange}
                            options={[
                                { value: "tiger", title: "호랑이" },
                                { value: "dog", title: "강아지" },
                                { value: "monkey", title: "원숭이" },
                                { value: "bear", title: "곰돌이" },
                            ]}
                        />

                        <RatioSingle
                            label="이메일 수신"
                            name="recieveEmail"
                            value={inputs.recieveEmail}
                            onChange={onChange}
                            options={[
                                { value: "agree", title: "수신" },
                                { value: "disagree", title: "미수신" },
                            ]}
                        />

                        <RatioSingle
                            label="문자 수신"
                            name="recieveMessage"
                            value={inputs.recieveMessage}
                            onChange={onChange}
                            options={[
                                { value: "agree", title: "수신" },
                                { value: "disagree", title: "미수신" },
                            ]}
                        />

                        <Textarea
                            label="기타"
                            name="etc"
                            value={inputs.ect}
                            onChange={onChange}
                            rows={6}
                        />
                    </FormTable>
                </div>
            </form>
        </Template>
    );
};

export default FormUser;
