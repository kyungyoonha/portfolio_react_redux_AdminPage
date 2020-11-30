import React, { useEffect } from "react";
import history from "../../history";

// redux
import { useDispatch, useSelector } from "react-redux";
import formActions from "../../redux/actions/formActions";

// components
import FormLayout from "../../Layout/FormLayout";
import {
    FormSection,
    Input,
    InputRadioSingle,
    InputFile,
    InputTextarea,
} from "../../components";

const initialValue = {
    title: "",
    showYN: "N",
    topYN: "N",
    contents: "",
    file: "",
};

//working ###
const CSFormNotice = () => {
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
        const fileList = ["file"];
        dispatch(formActions.submit(inputs, fileList));
    };

    if (!Object.keys(inputs).length) {
        inputs = initialValue;
    }

    return (
        <FormLayout
            onClickInsert={handleClickInsert}
            onClickBack={() => history.goBack()}
        >
            <FormSection center title="공지 추가">
                <Input
                    label="제목"
                    name="title"
                    value={inputs.title}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <InputRadioSingle
                    label="공개여부"
                    name="showYN"
                    value={inputs.showYN}
                    onChange={handleChangeInputs}
                    errors={errors}
                    options={[
                        { value: "Y", title: "공개" },
                        { value: "N", title: "비공개" },
                    ]}
                />
                <InputFile
                    label="첨부파일"
                    name="file"
                    value={inputs.file}
                    filename={inputs.filename}
                    onChange={handleChangeInputs}
                    filetype="raw"
                />
                <InputRadioSingle
                    label="상단노출"
                    name="topYN"
                    value={inputs.topYN}
                    onChange={handleChangeInputs}
                    errors={errors}
                    options={[
                        { value: "Y", title: "상단노출" },
                        { value: "N", title: "비공개" },
                    ]}
                />
                <InputTextarea
                    label="내용"
                    name="contents"
                    value={inputs.contents}
                    onChange={handleChangeInputs}
                    rows={8}
                    errors={errors}
                />
            </FormSection>
        </FormLayout>
    );
};

export default CSFormNotice;
