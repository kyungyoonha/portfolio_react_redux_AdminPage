import React, { useState } from "react";
import Template from "../../../components/template/Template";
import validateInput from "../../../util/validateInput";
import FormTable from "../../../components/Form/FormTable";

import FormPlaceBottom from "./FormPlaceBottom/FormPlaceBottom";
import FormPlaceRight from "./FormPlaceRight/FormPlaceRight";
import FormPlaceBody from "./FormPlaceBody/FormPlaceBody";

import {
    Input,
    Select,
    RatioSingle,
    RatioTypeCheck,
    RatioMulti,
} from "../../../components/Form/FormComponents";

import {
    optionsCountry,
    optionsCity,
    optionsRegion,
} from "../../../util/options";

const initialAudioMain = {
    korea: { title: "", script: "", files: [] },
    english: { title: "", script: "", files: [] },
    japan: { title: "", script: "", files: [] },
    china: { title: "", script: "", files: [] },
};

const FormPlace = () => {
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({
        countryCtg: "KOREA",
        state: "",
        city: "",
        placeCode: "",
        address: "",
        lat: "",
        lng: "",
        placeName: "",
        contactNumber: "",
        entranceFee: "",
        businessHours: "",
        tourTags: {},
        typeCharacteristic: "",
        typeStyle: "",
        hasAudio: "no",
        hasAudioMain: "no",
    });
    const [imageList, setImageList] = useState([]);
    const [audioList, setAudioList] = useState([]);
    const [audioMain, setAudioMain] = useState(initialAudioMain);

    const handleChangeInputs = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setInputs((state) => ({
                ...state,
                tourTags: {
                    ...state.tourTags,
                    [name]: checked,
                },
            }));
        } else {
            setInputs((state) => ({
                ...state,
                [name]: value,
            }));
        }

        // 국적선택 시
        if (name === "countryCtg" && value === "KOREA") {
            setInputs((state) => ({
                ...state,
                country: "KOREA",
            }));
        }

        if (name === "hasAudio" && value === "no") {
            setAudioList([]);
        }

        if (name === "hasAudioMain" && value === "no") {
            setAudioMain(initialAudioMain);
        }

        // 유효값 체크
        const error = validateInput(name, value);
        setErrors((state) => ({
            ...state,
            [name]: error,
        }));
    };

    const handleChangeImageList = (newImgList) => {
        setImageList(newImgList);
    };

    const handleChangeAudioList = (newAudioList) => {
        setAudioList((state) => [...state, newAudioList]);
    };

    const handleDeleteAudioList = (idx) => {
        setAudioList((state) => state.filter((_, i) => String(i) !== idx));
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

    const handleClickInsert = () => {};
    const handleClickDelete = () => {};
    return (
        <Template
            title="관광지 관리"
            navCtg="code"
            handleClickInsert={handleClickInsert}
            handleClickDelete={handleClickDelete}
        >
            <form style={{ margin: "0 100px" }}>
                <h4 className="mb-4">추가하기</h4>
                <div className="no-Gutter2 row">
                    {/* top 왼쪽 */}
                    <FormTable size="half">
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
                        {inputs.countryCtg !== "KOREA" && (
                            <Select
                                label=""
                                name="country"
                                value={inputs.country}
                                onChange={handleChangeInputs}
                                errors={errors}
                                options={optionsCountry(inputs.countryCtg)}
                            />
                        )}
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
                            options={optionsRegion(inputs.city)}
                        />

                        <Input
                            label="관광지 코드"
                            name="place"
                            value={inputs.placeCode}
                            onChange={handleChangeInputs}
                            errors={errors}
                        >
                            <button className="btn btn-outline-primary float-right">
                                중복확인
                            </button>
                        </Input>

                        <Input
                            label="주소"
                            name="address"
                            value={inputs.address}
                            onChange={handleChangeInputs}
                            errors={errors}
                        >
                            <button className="btn btn-outline-primary float-right">
                                <i className="fas fa-map-marked-alt "></i>
                            </button>
                        </Input>

                        <Input
                            label="관광지 이름"
                            name="placeName"
                            value={inputs.placeName}
                            onChange={handleChangeInputs}
                            errors={errors}
                        />

                        <Input
                            label="전화번호"
                            name="contactNumber"
                            value={inputs.contactNumber}
                            onChange={handleChangeInputs}
                            errors={errors}
                        />

                        <Input
                            label="입장료"
                            name="entranceFee"
                            value={inputs.entranceFee}
                            onChange={handleChangeInputs}
                            errors={errors}
                        />
                        <Input
                            label="운영시간"
                            name="businessHours"
                            value={inputs.businessHours}
                            onChange={handleChangeInputs}
                            errors={errors}
                        />
                    </FormTable>
                    {/* Top 오른쪽 */}
                    <div className="col-md-6">
                        <FormPlaceRight
                            imageList={imageList}
                            handleChangeImageList={handleChangeImageList}
                        />
                    </div>

                    {/* 중앙 */}
                    <FormTable>
                        <RatioMulti
                            label="여행태그"
                            name="tourTags"
                            value={inputs.tourTags}
                            onChange={handleChangeInputs}
                            max={3}
                            options={[
                                { key: "picture", title: "사진광" },
                                { key: "sports", title: "스포츠 마니아" },
                                { key: "shopping", title: "쇼핑왕" },
                                { key: "enjoy", title: "흥폭발" },
                                { key: "study", title: "학구파" },
                                { key: "nature", title: "자연인" },
                            ]}
                        />

                        <RatioTypeCheck
                            label="여행 성향1"
                            labelLeft="외향성"
                            labelRight="내향성"
                            name="typeCharacteristic"
                            value={inputs.typeCharacteristic}
                            onChange={handleChangeInputs}
                        />

                        <RatioTypeCheck
                            label="여행 성향2"
                            labelLeft="개방성"
                            labelRight="폐쇄성"
                            name="typeStyle"
                            value={inputs.typeStyle}
                            onChange={handleChangeInputs}
                        />
                    </FormTable>
                    {/* 오디오 서브 등록 */}
                    <FormTable size="half">
                        <FormPlaceBody
                            inputs={inputs}
                            onChange={handleChangeInputs}
                            audioList={audioList}
                            handleChangeAudioList={handleChangeAudioList}
                            handleDeleteAudioList={handleDeleteAudioList}
                        />
                    </FormTable>
                    {/* 오디오 메인 등록 */}

                    <FormPlaceBottom
                        audioMain={audioMain}
                        handleChangeAudioMain={handleChangeAudioMain}
                        disabled={inputs.hasAudioMain === "no"}
                    />
                </div>
            </form>
        </Template>
    );
};

export default FormPlace;
