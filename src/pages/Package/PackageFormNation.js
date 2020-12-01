import React from "react";
import history from "../../history";
import useInput222 from "../../Hooks/useInput222";
import FormLayout from "../../Layout/FormLayout";
import { FormSection, Input } from "../../components";

const initialValue = {
    koreanname: "",
    englishname: "",
    code3: "",
    code2: "",
};

//working ###
const PackageFormNation = () => {
    const { inputs, errors, onChange, onSubmit } = useInput222(initialValue);

    const handleSubmit = () => {
        onSubmit(inputs);
    };

    return (
        <FormLayout
            onClickInsert={handleSubmit}
            onClickBack={() => history.goBack()}
        >
            <FormSection center title="국가코드 관리">
                <Input
                    label="국가한국이름"
                    name="koreanname"
                    value={inputs.koreanname}
                    onChange={onChange}
                    error={errors.koreanname}
                />
                <Input
                    label="국가영어이름"
                    name="englishname"
                    value={inputs.englishname}
                    onChange={onChange}
                    error={errors.englishname}
                />
                <Input
                    label="국가코드 3자리"
                    name="code3"
                    value={inputs.code3}
                    onChange={onChange}
                    error={errors.code3}
                />

                <Input
                    label="국가코드 2자리"
                    name="code2"
                    value={inputs.code2}
                    onChange={onChange}
                    error={errors.code2}
                />
                <tr style={{ height: "200px" }}></tr>
            </FormSection>
        </FormLayout>
    );
};

export default PackageFormNation;
