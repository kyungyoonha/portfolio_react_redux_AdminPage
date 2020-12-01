import React from "react";
import history from "../../history";

// components
import useInput222 from "../../Hooks/useInput222";
import FormLayout from "../../Layout/FormLayout";
import {
    FormSection,
    Input,
    InputRadioSingle,
    InputTextarea,
} from "../../components";

const initialValue = {
    title: "",
    target: "",
    linkinfo: "",
    contents: "",
    messageYN: "N",
};
//working ###
const CSFormPush = () => {
    const { inputs, errors, onChange, onSubmit } = useInput222(initialValue);

    const handleSubmit = () => {
        onSubmit(inputs);
    };
    return (
        <FormLayout
            onClickInsert={handleSubmit}
            onClickBack={() => history.goBack()}
        >
            <FormSection center title="푸쉬 관리">
                <Input
                    label={`푸쉬제목 (${
                        inputs.title ? inputs.title.length : 0
                    }/50)`}
                    name="title"
                    value={inputs.title}
                    onChange={onChange}
                    error={errors.title}
                />
                <Input
                    label="푸쉬 대상"
                    name="target"
                    value={inputs.target}
                    onChange={onChange}
                    error={errors.target}
                />
                <Input
                    label="연결페이지"
                    name="linkinfo"
                    value={inputs.linkinfo}
                    onChange={onChange}
                    error={errors.linkinfo}
                />
                <InputTextarea
                    label={`내용 (${
                        inputs.contents ? inputs.contents.length : 0
                    }/50)`}
                    name="contents"
                    value={inputs.contents}
                    onChange={onChange}
                    rows={8}
                    error={errors.contents}
                />
                <InputRadioSingle
                    label="메시지 전송여부"
                    name="messageYN"
                    value={inputs.messageYN}
                    onChange={onChange}
                    options={[
                        { value: "Y", title: "전송" },
                        { value: "N", title: "거절" },
                    ]}
                />
            </FormSection>
        </FormLayout>
    );
};

export default CSFormPush;
