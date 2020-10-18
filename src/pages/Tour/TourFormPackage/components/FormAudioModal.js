import React, { useState } from "react";
import "./FormAudioModal.scss";
import {
    RadioSingle,
    Select,
    Input,
    FileuploadCard,
    FormSection,
    FormLayout,
} from "../../../../components/Form/Form";

import {
    optionsCountry,
    optionsCity,
    optionsRegion,
} from "../../../../util/options";

import Modal from "../../../../components/Modal/Modal";
import noImg from "../../../../img/no-img.jpg";

import FormAudioMain from "../../components/FormAudioMain";

const FormAudioModal = ({
    isModalOpen,
    handleModalClose,
    handleChangeAudioList,
}) => {
    const errors = {};
    const [inputs, setInputs] = useState({
        countryCtg: "KOREA",
        state: "",
        city: "",
        place: "",
        name: "",
        content: "",
        hasAudio: "no",
    });
    const [imageList, setImageList] = useState([]);
    const [audioMain, setAudioMain] = useState({
        korea: { title: "", script: "", files: [] },
        english: { title: "", script: "", files: [] },
        japan: { title: "", script: "", files: [] },
        china: { title: "", script: "", files: [] },
    });

    const handleChangeInputs = (e) => {
        const { name, value } = e.target;

        if (name === "countryCtg") {
            setInputs((state) => ({
                ...state,
                country: value === "KOREA" ? "KOREA" : "",
            }));
        }

        setInputs((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleChangeAudioMain = ({ selected, name, value }) => {
        setAudioMain((state) => ({
            ...state,
            [selected]: {
                ...state[selected],
                [name]: value,
            },
        }));
    };

    const handleChangeImageList = (e) => {
        const files = e.target.files;
        const filesList = [...new Array(files.length)].map((_, i) => {
            return {
                src: URL.createObjectURL(files[i]),
                file: files[i],
                filename: files[i].name,
            };
        });
        const newImageList = [...imageList].concat(filesList);
        setImageList(newImageList);
    };

    const handleClickSave = () => {
        handleChangeAudioList({
            inputs,
            imageList,
            audioMain,
        });

        handleModalClose();
    };

    return (
        <Modal
            isModalOpen={isModalOpen}
            title="세부 관광지 추가하기"
            handleModalClose={handleModalClose}
        >
            <div className="formAudioModal">
                <div className="formAudioModal__buttonContainer">
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
                <FormLayout>
                    <FormSection>
                        <RadioSingle
                            label="국가 분류"
                            name="nationtype"
                            value={inputs.nationtype || "1"}
                            onChange={handleChangeInputs}
                            options={[
                                { value: "1", title: "국내" },
                                { value: "2", title: "국외" },
                            ]}
                        />

                        <Select
                            label="국가 코드"
                            name="nationcode"
                            value={inputs.nationcode || "KOREA"}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={optionsCountry(inputs.nationcode)}
                            disabled={inputs.nationtype === "1"}
                        />

                        {/* <Select
                            label="국가 코드"
                            name="countryCode"
                            value={inputs.countryCode}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={[
                                { value: "code1", title: "코드1" },
                                { value: "code2", title: "코드2" },
                                { value: "code3", title: "코드3" },
                                { value: "K", title: "K" },
                            ]}
                        /> */}
                        <Select
                            label="시도 코드"
                            name="sidocode"
                            value={inputs.sidocode}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={optionsCity(inputs.sidocode)}
                        />
                        <Select
                            label="지역 코드"
                            name="areacode"
                            value={inputs.areacode}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={optionsRegion(inputs.areacode)}
                        />

                        <Select
                            label="관광지"
                            name="place"
                            value={inputs.place}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={optionsRegion(inputs.place)}
                        />

                        <Input
                            label="이름"
                            name="name"
                            value={inputs.name}
                            onChange={handleChangeInputs}
                            errors={errors}
                        />

                        <Input
                            label="한줄 소개"
                            name="content"
                            value={inputs.content}
                            onChange={handleChangeInputs}
                            errors={errors}
                        />
                    </FormSection>
                    <FormSection>
                        <FileuploadCard
                            label="대표 사진"
                            src={imageList[0] ? imageList[0].src : noImg}
                            onChange={handleChangeImageList}
                            ctg="profile"
                        />
                    </FormSection>

                    <FormAudioMain
                        full
                        audioMain={audioMain}
                        handleChangeAudioMain={handleChangeAudioMain}
                        onChange={handleChangeInputs}
                        inputs={inputs}
                        disabled={false}
                    />
                </FormLayout>
            </div>
        </Modal>
    );
};

export default FormAudioModal;
