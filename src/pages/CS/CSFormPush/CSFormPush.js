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
import { validateAll, validatePush } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";

const initialValue = {
    pushName: "",
    state: "",
    target: "",
    editMng: "",
    connectPage: "",
    content: "",
};
//working
const CSFormPush = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validatePush,
        setErrors
    );

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validatePush);

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
                        label={`푸쉬제목 (${inputs.pushName.length}/50)`}
                        name="pushName"
                        value={inputs.pushName}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="상태"
                        name="state"
                        value={inputs.state}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="푸쉬 대상"
                        name="target"
                        value={inputs.target}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="등록자"
                        name="editMng"
                        value={inputs.editMng}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="연결페이지"
                        name="connectPage"
                        value={inputs.connectPage}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Textarea
                        label={`내용 (${inputs.content.length}/50)`}
                        name="content"
                        value={inputs.content}
                        onChange={handleChangeInputs}
                        rows={8}
                        errors={errors}
                    />
                </FormSection>
            </FormLayout>
        </Content>
    );
};

export default CSFormPush;
