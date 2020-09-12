import React, { useState } from "react";
import styled from "styled-components";
import MemberNav from "./MemberNav";
import validateInput from "../../util/validateInput";
import {
    Input,
    Select,
    RatioSingle,
    Textarea,
    FileUpload,
    FileuploadCard,
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
        manager_id: "",
        password: "",
        name: "",
        birth: "",
        contactNumber: "",
        email: "",
        englishName: "",
        address: "",
        joinYear: "",
        duty: "",
        department: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs((state) => ({
            ...state,
            [name]: value,
        }));

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
                            &nbsp;&nbsp;매니저 추가
                        </h2>
                    </div>
                    <div className="row">
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
                                name="manager_id"
                                value={inputs.manager_id}
                                onChange={onChange}
                                errors={errors}
                            />

                            <Input
                                label="비밀번호"
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
                                label="이메일"
                                name="email"
                                value={inputs.email}
                                onChange={onChange}
                                errors={errors}
                            />

                            <Input
                                label="영어이름"
                                name="englishName"
                                value={inputs.englishName}
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
                                label="주소"
                                name="address"
                                value={inputs.address}
                                onChange={onChange}
                                errors={errors}
                            />

                            <Input
                                label="입사년도"
                                name="joinYear"
                                value={inputs.joinYear}
                                onChange={onChange}
                                errors={errors}
                            />

                            <Input
                                label="직무"
                                name="duty"
                                value={inputs.duty}
                                onChange={onChange}
                                errors={errors}
                            />

                            <Input
                                label="직무"
                                name="department"
                                value={inputs.department}
                                onChange={onChange}
                                errors={errors}
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
                    <button type="button" className="btn btn-outline-secondary">
                        삭제하기
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        추가하기
                    </button>
                </ButtonContainer>
            </div>
        </Container>
    );
};

export default MemberInsertUser;
