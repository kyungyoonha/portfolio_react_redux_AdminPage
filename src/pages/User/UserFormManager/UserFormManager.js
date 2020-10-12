import React, { useState } from "react";
import history from "../../../history";
import {
    FormLayout,
    FormSection,
    Input,
    Textarea,
} from "../../../components/Form/Form";

import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";
import { validateAll, validateManager } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";

const initialValue = {
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
    etc: "",
};
//working
const UserFormManager = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateManager,
        setErrors
    );

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateManager);

        if (isValid) {
            console.log("에러 없음");
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

    return (
        <Content>
            <ContentNav id={id}>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>

            <FormLayout>
                <FormSection>
                    <Input
                        label="id"
                        name="manager_id"
                        value={inputs.manager_id}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="비밀번호"
                        name="password"
                        value={inputs.password}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="이름"
                        name="name"
                        value={inputs.name}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="생년월일"
                        name="birth"
                        value={inputs.birth}
                        onChange={handleChangeInputs}
                    />

                    <Input
                        label="전화번호"
                        name="contactNumber"
                        value={inputs.contactNumber}
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
                        name="englishName"
                        value={inputs.englishName}
                        onChange={handleChangeInputs}
                    />
                    <Input
                        label="주소"
                        name="address"
                        value={inputs.address}
                        onChange={handleChangeInputs}
                    />

                    <Input
                        label="입사년도"
                        name="joinYear"
                        value={inputs.joinYear}
                        onChange={handleChangeInputs}
                    />
                </FormSection>
                <FormSection>
                    <Input
                        label="직무"
                        name="duty"
                        value={inputs.duty}
                        onChange={handleChangeInputs}
                    />

                    <Input
                        label="부서"
                        name="department"
                        value={inputs.department}
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
        </Content>
    );
};

export default UserFormManager;
