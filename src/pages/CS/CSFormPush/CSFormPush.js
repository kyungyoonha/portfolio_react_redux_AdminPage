import React, { useState } from "react";
import history from "../../../history";
import validateInput from "../../../util/validateInput";
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

const CSFormPush = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({
        pushName: "",
        state: "",
        target: "",
        editMng: "",
        connectPage: "",
        content: "",
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
                <FormSection size="center">
                    <tr style={{ textAlign: "center" }}>
                        <th
                            colSpan="2"
                            style={{
                                background: "#343a40",
                                color: "white",
                            }}
                        >
                            [알림 추가]
                        </th>
                    </tr>
                    <Input
                        label="푸쉬제목"
                        name="pushName"
                        value={inputs.pushName}
                        onChange={onChange}
                        errors={errors}
                    />

                    <Input
                        label="상태"
                        name="state"
                        value={inputs.state}
                        onChange={onChange}
                        errors={errors}
                    />

                    <Input
                        label="푸쉬 대상"
                        name="target"
                        value={inputs.target}
                        onChange={onChange}
                        errors={errors}
                    />

                    <Input
                        label="등록자"
                        name="editMng"
                        value={inputs.editMng}
                        onChange={onChange}
                        errors={errors}
                    />

                    <Input
                        label="연결페이지"
                        name="connectPage"
                        value={inputs.connectPage}
                        onChange={onChange}
                        errors={errors}
                    />

                    <Textarea
                        label="내용"
                        name="content"
                        value={inputs.content}
                        onChange={onChange}
                        rows={8}
                    />
                </FormSection>
            </FormLayout>
        </Content>
    );
};

export default CSFormPush;
