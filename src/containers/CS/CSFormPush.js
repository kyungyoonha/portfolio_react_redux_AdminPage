import React, { useEffect } from "react";
import history from "../../history";

// redux
import { useDispatch, useSelector } from "react-redux";
import formActions from "../../redux/actions/formActions";
// components
import FormLayout from "../../components/Form/FormLayout";
import FormSection from "../../components/Form/FormSection";
import Input from "../../components/Form/Input";
import RadioSingle from "../../components/Form/RadioSingle";
import Textarea from "../../components/Form/Textarea";

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
        dispatch(formActions.init(initialValue));
        return () => dispatch(formActions.initialize());
    }, [dispatch]);

    const handleChangeInputs = (e) => {
        dispatch(formActions.changeValue(e));
    };

    const handleClickInsert = (e) => {
        e.preventDefault();
        dispatch(formActions.submit({ inputs }));
    };

    if (!Object.keys(inputs).length) {
        inputs = initialValue;
    }
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
