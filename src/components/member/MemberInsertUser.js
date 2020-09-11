import React, { useState, useCallback } from "react";
import styled from "styled-components";
import MemberNav from "./MemberNav";
import validateInput from "../../util/validateInput";

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

const Input = ({ label, name, value, type = "text", onChange, errors }) => {
    return (
        <>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">※ {label}</label>
                <div className="col-sm-9">
                    <input
                        name={name}
                        type={type}
                        value={value}
                        placeholder={`${label}을(를) 입력해주세요.`}
                        className={`form-control form-control-sm ${
                            errors[name] && "is-invalid"
                        }`}
                        onChange={onChange}
                    />
                    {errors[name] && (
                        <div className="invalid-feedback">{errors[name]}</div>
                    )}
                </div>
            </div>
        </>
    );
};

const Select = ({ label, name, value, onChange, errors, options }) => {
    return (
        <>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">※ {label}</label>
                <div className="col-sm-9">
                    <select
                        name={name}
                        value={value}
                        onChange={onChange}
                        className={`custom-select custom-select-sm ${
                            errors[name] && "is-invalid"
                        }`}
                    >
                        <option value="">선택해주세요.</option>
                        {options.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                    {errors[name] && (
                        <div className="invalid-feedback">{errors[name]}</div>
                    )}
                </div>
            </div>
        </>
    );
};

const RatioMulti = ({ label, name, value, onChange, options }) => {
    return (
        <>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">※ {label}</label>
                <div className="col-sm-9">
                    {options.map((option) => (
                        <div
                            key={option.name}
                            className="form-check form-check-inline"
                        >
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name={option.name}
                                value={option.name}
                                checked={value[option.name] || false}
                                onChange={(e) => onChange(e, name)}
                            />
                            <label className="form-check-label">
                                {option.title}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const RatioSingle = ({ label, name, value, onChange, options }) => {
    return (
        <>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">※ {label}</label>
                <div className="col-sm-9">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="form-check form-check-inline"
                        >
                            <input
                                className="form-check-input"
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={onChange}
                            />
                            <label className="form-check-label">
                                {option.title}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const Textarea = ({ label, name, value, rows, onChange }) => {
    return (
        <div class="form-group row">
            <label className="col-sm-3">{label}</label>
            <div className="col-sm-9">
                <textarea
                    class="form-control"
                    rows={rows}
                    value={value}
                    onChange={onChange}
                ></textarea>
            </div>
        </div>
    );
};

const MemberInsertUser = ({ match }) => {
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({
        user_id: "",
        password: "",
        name: "",
        birth: "",
        phone: "",
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
        }
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
    console.log(inputs);
    return (
        <Container className="card">
            <div className="card-header bg-white">
                <i className="fas fa-user-cog"></i>
                회원 정보
            </div>
            <div className="card-body bg-white">
                <MemberNav />
                <form>
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
                                name="phone"
                                value={inputs.phone}
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
                                    { name: "tiger", title: "호랑이" },
                                    { name: "dog", title: "강아지" },
                                    { name: "monkey", title: "원숭이" },
                                    { name: "bear", title: "곰돌이" },
                                ]}
                            />

                            <RatioSingle
                                label="이메일 수신"
                                name="recieveEmail"
                                value={inputs.recieveEmail}
                                onChange={onChange}
                                options={[
                                    { value: "수신", title: "수신" },
                                    { value: "미수신", title: "미수신" },
                                ]}
                            />

                            <RatioSingle
                                label="문자 수신"
                                name="recieveMessage"
                                value={inputs.recieveMessage}
                                onChange={onChange}
                                options={[
                                    { value: "수신", title: "수신" },
                                    { value: "미수신", title: "미수신" },
                                ]}
                            />

                            <Textarea
                                label="기타"
                                name="etc"
                                value={inputs.ect}
                                onChange={onChange}
                                rows={4}
                            />
                        </div>

                        {/* Right */}
                        <div className="col-lg-6" style={{ padding: "0 40px" }}>
                            few
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
