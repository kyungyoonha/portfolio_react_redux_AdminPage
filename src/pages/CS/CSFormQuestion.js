import React, { useState } from "react";
import history from "../../history";
import fileAPI from "../../services/fileAPI";
import api from "../../services/api";
import useInput222 from "../../Hooks/useInput222";
import FormLayout from "../../Layout/FormLayout";
import {
    FormSection,
    Input,
    InputSelect,
    InputFile,
    InputTextarea,
} from "../../components";

import { validate, validateAll } from "../../utils/validate";
import { toast } from "react-toastify";

const initialValue = {
    useridx: "",
    email: "",
    replyYN: "N",
    contents: "",
    file: [],
    filename: "",
    filepath: "",
};

const initialValueSender = {
    title: "",
    heddenStatus: "",
    user: "",
    file: "",
    sendEmail: "",
    sendContent: "",
};
//working
const CSFormQuestion = () => {
    const question = useInput222(initialValue);
    const [inputs, setInputs] = useState(initialValueSender);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs((state) => ({
            ...state,
            [name]: value,
        }));

        const error = validate("sendEmail", name, value);

        setErrors((state) => ({
            ...state,
            [name]: error,
        }));
    };

    const handleChangeFile = (e) => {
        const file = e.target.files;
        setInputs((state) => ({
            ...state,
            file,
        }));
    };

    const handleSendEmail = async () => {
        const { isValid, checkedErrors } = validateAll("sendEmail", inputs);

        if (!isValid) {
            setErrors(checkedErrors);
            return;
        }
        try {
            await fileAPI.sendEmail({
                to: question.inputs.email,
                subject: inputs.title,
                contents: inputs.sendContent,
                file: inputs.file,
            });

            await api.post("/cs/question/update", {
                ...question.inputs,
                replyYN: "Y",
            });
        } catch (e) {
            console.log(e);
            e.response && toast.error(e.response.data.error);
        }
    };

    return (
        <FormLayout
            onClickSend={handleSendEmail}
            onClickBack={() => history.goBack()}
        >
            <FormSection title="문의사항">
                <Input
                    label="등록자"
                    name="useridx"
                    value={question.inputs.useridx}
                    onChange={() => {}}
                    disabled
                />
                <Input
                    label="수신 이메일"
                    name="email"
                    value={question.inputs.email}
                    onChange={() => {}}
                    disabled
                />

                <InputFile // Done
                    label="첨부파일"
                    name="file"
                    value={inputs.file}
                    filename={question.inputs.filename}
                    onChange={() => {}}
                    filetype="raw"
                    disabled
                />

                <InputTextarea
                    label="내용"
                    name="contents"
                    value={question.inputs.contents}
                    onChange={() => {}}
                    rows={15}
                    disabled
                />
            </FormSection>

            <FormSection title="이메일 발송">
                <Input
                    label="제목"
                    name="title"
                    value={inputs.title}
                    onChange={handleChange}
                    error={errors.title}
                />

                <InputSelect
                    label="공개 여부"
                    name="hiddenStatus"
                    value={inputs.hiddenStatus}
                    onChange={handleChange}
                    error={errors.hiddenStatus}
                    options={[
                        { value: "visible", title: "공개" },
                        { value: "hidden", title: "비공개" },
                    ]}
                />

                <InputFile // Done
                    label="첨부파일"
                    name="file"
                    value={inputs.file[0]}
                    filename={inputs.filename}
                    onChange={handleChangeFile}
                    filetype="raw"
                />

                <Input
                    label="발신 이메일"
                    name="sendEmail"
                    value={inputs.sendEmail}
                    onChange={handleChange}
                    error={errors.sendEmail}
                />

                <InputTextarea
                    label="내용"
                    name="sendContent"
                    value={inputs.sendContent}
                    onChange={handleChange}
                    rows={12}
                    error={errors.sendContent}
                />
            </FormSection>
        </FormLayout>
    );
};

export default CSFormQuestion;
