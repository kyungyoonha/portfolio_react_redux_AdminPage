import React, { useState, useRef, useEffect } from "react";

import styled from "styled-components";
import {
    RatioSingle,
    Select,
    Input,
} from "../../../../../components/common/Form/FormComponents";

import FormTable from "../../../../../components/common/Form/FormTable";
import Modal from "../../../../../components/common/Modal/Modal";
// import noImg from "../../../../img/no-img.jpg";
import {
    optionsCountry,
    optionsCity,
    optionsRegion,
} from "../../../../../util/options";
// import PlaceFormAudioMain from "../../PlaceFormAudioMain/PlaceFormAudioMain";

const ContainerStyled = styled.div``;

const ModalAudio = ({
    isModalOpen,
    handleModalClose,
    audioList,
    handleChangeAudioList,
}) => {
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({
        countryCtg: "KOREA",
        state: "",
        city: "",
        place: "",
        name: "",
        content: "",
        hasAudio: "no",
    });
    const [image, setImage] = useState({
        src: "",
        name: "",
        file: null,
    });

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setInputs((state) => ({
            ...state,
            [name]: value,
        }));
    };

    return (
        <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
            <ContainerStyled>
                <FormTable size="half">
                    <RatioSingle
                        label="국가"
                        name="countryCtg"
                        value={inputs.countryCtg}
                        onChange={handleChangeInput}
                        options={[
                            { value: "KOREA", title: "국내" },
                            { value: "OVERSEAS", title: "국외" },
                        ]}
                    />
                    {inputs.countryCtg !== "KOREA" && (
                        <Select
                            label=""
                            name="country"
                            value={inputs.country}
                            onChange={handleChangeInput}
                            errors={errors}
                            options={optionsCountry(inputs.countryCtg)}
                        />
                    )}
                    <Select
                        label="시/도"
                        name="state"
                        value={inputs.city}
                        onChange={handleChangeInput}
                        errors={errors}
                        options={optionsCity(inputs.city)}
                    />
                    <Select
                        label="지역"
                        name="city"
                        value={inputs.region}
                        onChange={handleChangeInput}
                        errors={errors}
                        options={optionsRegion(inputs.region)}
                    />

                    <Select
                        label="관광지"
                        name="place"
                        value={inputs.place}
                        onChange={handleChangeInput}
                        errors={errors}
                        options={optionsRegion(inputs.region)}
                    />

                    <Input
                        label="이름"
                        name="name"
                        value={inputs.name}
                        onChange={handleChangeInput}
                        errors={errors}
                    />

                    <Input
                        label="한줄 소개"
                        name="content"
                        value={inputs.content}
                        onChange={handleChangeInput}
                        errors={errors}
                    />
                </FormTable>
            </ContainerStyled>
        </Modal>
    );
};

export default ModalAudio;
