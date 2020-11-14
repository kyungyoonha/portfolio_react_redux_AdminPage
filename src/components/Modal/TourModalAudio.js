import React, { useState } from "react";
import "./TourModalAudio.scss";
import { validate, validateAll } from "../../util/validate";
import Modal from "./Modal";
import useOpen from "../../Hooks/useOpen";

// components
import FormSection from "../../components/Form/FormSection";
import Input from "../../components/Form/Input";
import Textarea from "../Form/Textarea";
import Select from "../Form/Select";
import InputFile from "../Form/InputFile";
import RadioSingle from "../Form/RadioSingle";

const initialValue = {
    idx: "",
    touridx: "",
    scripttitle: "",
    scriptcontents: "",
    scriptlanguage: "한글",
    audiofilename: "",
    audiofilepath: "",
    audiolanguage: "한글",
    mainaudioYN: "N",
};

const TourModalAudio = ({ title, onChange }) => {
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
            ? setInputs((state) => ({ ...state, [name]: files }))
            : setInputs((state) => ({ ...state, [name]: value }));
    };
    const handleClickSave = () => {
        const { isValid, checkedErrors } = validateAll("/modal/audios", inputs);
        if (isValid) {
            onChange(inputs);
            setInputs(initialValue);
            onClickClose();
        } else {
            setErrors(checkedErrors);
        }
    };

    return (
        <div>
            <button
                type="button"
                className="btn btn-primary btn-sm mt-2"
                onClick={onClickOpen}
            >
                {title}
            </button>

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
                            errors={errors}
                        />
                        <Textarea
                            label="스크립트 내용"
                            name="scriptcontents"
                            value={inputs.scriptcontents}
                            onChange={handleChangeInputs}
                            errors={errors}
                            rows={8}
                        />
                        <Select
                            label="스크립트 언어"
                            name="scriptlanguage"
                            value={inputs.scriptlanguage}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={[
                                { value: "한글", title: "한글" },
                                { value: "영어", title: "영어" },
                                { value: "일본어", title: "일본어" },
                                { value: "중국어", title: "중국어" },
                            ]}
                        />
                        <InputFile // Done
                            label="오디오 파일"
                            name="audiofile"
                            value={inputs.audiofile}
                            filename={inputs.audiofilename}
                            onChange={handleChangeInputs}
                            filetype="audio"
                        />
                        <Select
                            label="오디오파일 언어"
                            name="audiolanguage"
                            value={inputs.audiolanguage}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={[
                                { value: "한글", title: "한글" },
                                { value: "영어", title: "영어" },
                                { value: "일본어", title: "일본어" },
                                { value: "중국어", title: "중국어" },
                            ]}
                        />
                        <RadioSingle
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
        </div>
    );
};

export default TourModalAudio;
