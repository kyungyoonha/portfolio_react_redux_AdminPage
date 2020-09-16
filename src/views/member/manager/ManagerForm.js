import React, { useState } from "react";
import Template from "../../../components/template/Template";
import validateInput from "../../../util/validateInput";
import { Input, Textarea } from "../../../components/Form/FormComponents";
import FormTable from "../../../components/Form/FormTable";

const ManagerForm = () => {
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

    const handleClickInsert = () => {};
    const handleClickDelete = () => {};

    return (
        <Template
            title="매니저 정보"
            handleClickInsert={handleClickInsert}
            handleClickDelete={handleClickDelete}
        >
            <form style={{ margin: "0 60px" }}>
                <h4 className="mb-4">추가하기</h4>
                <div className="no-Gutter2 row">
                    <div className="col-md-6">
                        <FormTable>
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
                        </FormTable>
                    </div>
                    <div className="col-md-6">
                        <FormTable>
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
                        </FormTable>
                    </div>
                </div>
            </form>
        </Template>
    );
};

export default ManagerForm;
