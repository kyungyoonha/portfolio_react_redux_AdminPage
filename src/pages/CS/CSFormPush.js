import React, { useEffect } from "react";
import history from "../../history";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
    formAction_changeValue,
    formAction_init,
    formAction_initialize,
    formAction_submit,
} from "../../redux/actions/formActions";

import {
    FormLayout,
    FormSection,
    Input,
    RadioSingle,
    Textarea,
} from "../../components/Form/Form";

const initialValue = {
    title: "",
    target: "",
    linkinfo: "",
    contents: "",
    messageYN: "N",
};
//working ###
const CSFormPush = () => {
    const dispatch = useDispatch();
    let { inputs, errors } = useSelector((state) => state.form);

    useEffect(() => {
        dispatch(formAction_init(initialValue));
        return () => dispatch(formAction_initialize());
    }, [dispatch]);

    const handleChangeInputs = (e) => {
        dispatch(formAction_changeValue(e));
    };

    const handleClickInsert = (e) => {
        e.preventDefault();
        dispatch(formAction_submit(inputs));
    };

    if (!Object.keys(inputs).length) {
        inputs = initialValue;
    }
    console.log(errors);
    return (
        <FormLayout
            onClickInsert={handleClickInsert}
            onClickBack={() => history.goBack()}
        >
            <FormSection center title="푸쉬 관리">
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
                    name="contents"
                    value={inputs.contents}
                    onChange={handleChangeInputs}
                    rows={8}
                    errors={errors}
                />
                <RadioSingle
                    label="메시지 전송여부"
                    name="messageYN"
                    value={inputs.messageYN}
                    onChange={handleChangeInputs}
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
