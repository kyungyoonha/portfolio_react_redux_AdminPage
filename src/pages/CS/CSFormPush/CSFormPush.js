import React, { useState } from "react";
import history from "../../../history";
import {} from "react-router";
import {
    FormLayout,
    FormSection,
    Input,
    RatioSingle,
    Textarea,
} from "../../../components/Form/Form";

import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";
import { validateAll, validatePush } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";
import { useDispatch, useSelector } from "react-redux";
import { boardAction_update } from "../../../redux/actions";

const initialValue = {
    idx: "",
    title: "",
    target: "",
    linkinfo: "",
    contents: "",
    messageyn: "N",
    regdate: "",
    reguser: "",
    moddate: "",
    moduser: "",
};
//working
const CSFormPush = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.user);
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
            dispatch(
                boardAction_update(pageId, {
                    ...inputs,
                    regdate: new Date().toISOString(),
                    reguser: name,
                })
            );
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

    return (
        <Content>
            <ContentNav pageId={pageId}>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>

            <FormLayout>
                <FormSection size="center" title="푸쉬 관리">
                    <Input
                        label={`푸쉬제목 (${
                            inputs.title ? inputs.title.length : 0
                        }/50)`}
                        name="title"
                        value={inputs.title}
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
                        label="연결페이지"
                        name="linkinfo"
                        value={inputs.linkinfo}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <Textarea
                        label={`내용 (${
                            inputs.content ? inputs.content.length : 0
                        }/50)`}
                        name="content"
                        value={inputs.content}
                        onChange={handleChangeInputs}
                        rows={8}
                        errors={errors}
                    />
                    <RatioSingle
                        label="메시지 전송여부"
                        name="messageyn"
                        value={inputs.messageyn}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "Y", title: "전송" },
                            { value: "N", title: "거절" },
                        ]}
                    />
                </FormSection>
            </FormLayout>
        </Content>
    );
};

export default CSFormPush;
