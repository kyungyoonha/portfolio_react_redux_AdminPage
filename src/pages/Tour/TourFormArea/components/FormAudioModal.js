import React, { useState } from "react";
import "./FormAudioModal.scss";
import {
    RatioSingle,
    Select,
    Input,
    FileuploadCard,
    FormSection,
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
                <div className=" row">
                    <FormSection size="half">
                        <RatioSingle
                            label="국가"
                            name="countryCtg"
                            value={inputs.countryCtg}
                            onChange={handleChangeInputs}
                            options={[
                                { value: "KOREA", title: "국내" },
                                { value: "OVERSEAS", title: "국외" },
                            ]}
                        />

                        <Select
                            label="(국가 선택)"
                            name="country"
                            value={inputs.country}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={optionsCountry(inputs.countryCtg)}
                            disabled={inputs.countryCtg === "KOREA"}
                        />

                        <Select
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
                        />
                        <Select
                            label="시/도"
                            name="state"
                            value={inputs.state}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={optionsCity(inputs.state)}
                        />
                        <Select
                            label="지역"
                            name="city"
                            value={inputs.city}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={optionsRegion(inputs.region)}
                        />

                        <Select
                            label="관광지"
                            name="place"
                            value={inputs.place}
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={optionsRegion(inputs.region)}
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
                    <FormSection size="half">
                        <FileuploadCard
                            label="대표 사진"
                            src={imageList[0] ? imageList[0].src : noImg}
                            onChange={handleChangeImageList}
                            ctg="profile"
                        />
                    </FormSection>

                    <FormSection size="full">
                        <FormAudioMain
                            audioMain={audioMain}
                            handleChangeAudioMain={handleChangeAudioMain}
                            onChange={handleChangeInputs}
                            inputs={inputs}
                            disabled={false}
                        />
                    </FormSection>
                </div>
            </div>
        </Modal>
    );
};

export default FormAudioModal;
