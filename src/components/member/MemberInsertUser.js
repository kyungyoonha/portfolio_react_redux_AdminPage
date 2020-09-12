import React, { useState } from "react";
import styled from "styled-components";
import MemberNav from "./MemberNav";
import validateInput from "../../util/validateInput";
import {
    Input,
    Select,
    RatioMulti,
    RatioSingle,
    Textarea,
} from "../common/FormComponents";

const Container = styled.div`
    flex: 1;
    padding: 15px;
    background: #eeeeee;

    > div > i {
        margin-right: 10px;
    }
`;

const ButtonContainer = styled.div`
    float: right;
    & > button {
        margin-right: 10px;
    }
`;

const MemberInsertUser = () => {
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
        Characteristic: "",
        tourTag: {},
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
    return (
        <Container className="card">
            <div className="card-header bg-white">
                <i className="fas fa-user-cog"></i>
                회원 정보
            </div>
            <div className="card-body bg-white">
                <MemberNav />
                <form>
                    <div className="row justify-content-center align-self-center mb-5">
                        <h2>
                            <i className="fas fa-user-plus"></i>
                            &nbsp;&nbsp;일반회원 추가
                        </h2>
                    </div>
                    <div className="row justify-content-md-center">
                        {/* Left */}
                        <div
                            className="col-lg-6"
                            style={{
                                padding: "0 100px",
                                borderRight: "1px solid #dfdfdf",
                            }}
                        >
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
                        </div>

                        {/* Right */}
                        <div
                            className="col-lg-6"
                            style={{
                                padding: "0 100px",
                                borderRight: "1px solid #dfdfdf",
                            }}
                        >
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
                                name="tourTag"
                                value={inputs.tourTag}
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
                        </div>
                    </div>
                </form>
            </div>
            {/* Footer */}
            <div className="card-footer bg-white">
                <ButtonContainer>
                    <button type="button" className="btn btn-secondary">
                        취소하기
                    </button>
                    <button type="button" className="btn btn-secondary">
                        등록하기
                    </button>
                </ButtonContainer>
            </div>
        </Container>
    );
};

export default MemberInsertUser;
