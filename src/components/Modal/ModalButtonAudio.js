import React, { useState } from "react";
import { validate, validateAll } from "../../utils/validate";
import Modal from "./Modal";
import useOpen from "../../Hooks/useOpen";

// components
import FormSection from "../Form/FormSection";
import Input from "../Input/Input";
import InputTextarea from "../Input/InputTextarea";
import InputSelect from "../Input/InputSelect";
import InputFile from "../Input/InputFile";
import InputRadioSingle from "../Input/InputRadioSingle";

const initialValue = {
    file: "",
    filename: "",
    filepath: "",

    idx: "",
    touridx: "",
    scripttitle: "",
    scriptcontents: "",
    scriptlanguage: "한글",
    audiolanguage: "한글",
    mainaudioYN: "N",
};

const ModalButtonAudio = ({ title, onChange }) => {
    const [isOpen, onClickOpen, onClickClose] = useOpen();
    const [inputs, setInputs] = useState(initialValue);
    const [errors, setErrors] = useState({});

    const handleChangeInputs = (e) => {
        const { name, value, type, files } = e.target;
        const error = validate("audios", name, value);

        setErrors((state) => ({
            ...state,
            [name]: error,
        }));

        type === "file"
            ? setInputs((state) => ({ ...state, [name]: files[0] }))
            : setInputs((state) => ({ ...state, [name]: value }));
    };
    const handleClickSave = () => {
        const { isValid, checkedErrors } = validateAll("audios", inputs);
        if (isValid) {
            onChange(inputs);
            setInputs(initialValue);
            onClickClose();
        } else {
            setErrors(checkedErrors);
        }
    };

    return (
        <>
            <Modal
                title="구매코드 검색"
                isOpen={isOpen}
                onClick={handleClickSave}
                onClickClose={onClickClose}
            >
                <form>
                    <FormSection full title="오디오 추가">
                        <Input
                            label="스크립트명"
                            name="scripttitle"
                            value={inputs.scripttitle}
                            onChange={handleChangeInputs}
                            error={errors.scripttitle}
                        />
                        <InputTextarea
                            label="스크립트 내용"
                            name="scriptcontents"
                            value={inputs.scriptcontents}
                            onChange={handleChangeInputs}
                            error={errors.scriptcontents}
                            rows={8}
                        />
                        <InputSelect
                            label="스크립트 언어"
                            name="scriptlanguage"
                            value={inputs.scriptlanguage}
                            onChange={handleChangeInputs}
                            error={errors.scriptlanguage}
                            options={[
                                { value: "한글", title: "한글" },
                                { value: "영어", title: "영어" },
                                { value: "일본어", title: "일본어" },
                                { value: "중국어", title: "중국어" },
                            ]}
                        />
                        <InputFile
                            label="오디오 파일"
                            name="file"
                            value={inputs.file}
                            filename={inputs.filename}
                            onChange={handleChangeInputs}
                            filetype="audio"
                        />
                        <InputSelect
                            label="오디오파일 언어"
                            name="audiolanguage"
                            value={inputs.audiolanguage}
                            onChange={handleChangeInputs}
                            error={errors.audiolanguage}
                            options={[
                                { value: "한글", title: "한글" },
                                { value: "영어", title: "영어" },
                                { value: "일본어", title: "일본어" },
                                { value: "중국어", title: "중국어" },
                            ]}
                        />
                        <InputRadioSingle
                            label="대표오디오 여부"
                            name="mainaudioYN"
                            value={inputs.mainaudioYN}
                            onChange={handleChangeInputs}
                            options={[
                                { value: "Y", title: "Y" },
                                { value: "N", title: "N" },
                            ]}
                        />
                    </FormSection>
                </form>
            </Modal>
            <button
                type="button"
                className="btn btn-primary btn-sm mt-2"
                onClick={onClickOpen}
            >
                {title}
            </button>
        </>
    );
};

export default ModalButtonAudio;
