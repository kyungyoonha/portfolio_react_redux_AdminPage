import React, { useState } from "react";
import "./TourModalAudio.scss";
import { validateAll, validateAudio } from "../../../../util/validate";
import Modal from "../../../../components/Modal/Modal";
import useInputs from "../../../../Hooks/useInputs";
import {
    InputFile,
    RadioSingle,
    Select,
    Input,
    FormSection,
    FormLayout,
    Textarea,
} from "../../../../components/Form/Form";

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
    regdate: "",
    reguser: "",
    moddate: "",
    moduser: "",
};

const TourModalAudio = ({ title, handleChangeAudio }) => {
    const [openModal, setOpenModal] = useState(false);
    const [errors, setErrors] = useState({});

    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateAudio,
        setErrors
    );

    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);
    const handleClickSave = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateAudio);

        if (isValid) {
            console.log("에러 없음");

            handleChangeAudio(inputs);
            setInputs(initialValue);
            handleModalClose();
        } else {
            setErrors(checkedErrors);
        }
    };

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        setInputs((state) => ({
            ...state,
            audiofilename: file.name,
            audiofilepath: file,
        }));
    };

    return (
        <div>
            <button
                type="button"
                className="btn btn-primary btn-sm mt-2"
                onClick={handleModalOpen}
            >
                {title}
            </button>

            <Modal
                isModalOpen={openModal}
                title="오디오 가이드 추가하기"
                handleModalClose={handleModalClose}
            >
                <div className="tourModalAudio">
                    <div className="tourModalAudio__buttonContainer">
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={handleClickSave}
                        >
                            저장
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={handleModalClose}
                        >
                            닫기
                        </button>
                    </div>
                    <br />
                    <FormLayout>
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
                            <InputFile
                                label="오디오파일"
                                name="audiofilepath"
                                value={inputs.audiofilename}
                                handleChangeFile={handleChangeFile}
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
                    </FormLayout>
                </div>
            </Modal>
        </div>
    );
};

export default TourModalAudio;
