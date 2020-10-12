import React, { useState } from "react";
import FormImg from "./components/FormImg";
import FormAudio from "./components/FormAudio";
import FormAudioMain from "../components/FormAudioMain";

import {
    Input,
    Select,
    RatioSingle,
    RatioTypeCheck,
    RatioMulti,
    FormLayout,
    FormSection,
} from "../../../components/Form/Form";

import {
    optionsCountry,
    optionsCity,
    optionsRegion,
} from "../../../util/options";
import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";
import history from "../../../history";
import { validateAll, validateArea } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";

const initialValue = {
    countryCtg: "KOREA",
    country: "KOREA",
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
    typeCharacteristic: "0",
    typeStyle: "0",
    hasAudio: "no",
    hasAudioMain: "no",
    imageList: [
        // { src: img1, filename: "", file: null },
        // { src: img1, filename: "", file: null },
        // { src: img1, filename: "", file: null },
    ],
    audioList: [
        // {
        //     name: ''
        //     inputs: { countryCtg: "KOREA", state: "", city: "", place: "", name: "", content: "", hasAudio: "no" },
        //     imageList: [
        //         { src: "img1", filename: "", file: null }
        //     ],
        //     audioMain: {
        //         korea: { title: "", script: "", files: [] },
        //         english: { title: "", script: "", files: [] },
        //         japan: { title: "", script: "", files: [] },
        //         china: { title: "", script: "", files: [] },
        //     },
        // },
        // { ... },
        // { ... },
    ],
    audioMain: {
        korea: { title: "", script: "", files: [] },
        english: { title: "", script: "", files: [] },
        japan: { title: "", script: "", files: [] },
        china: { title: "", script: "", files: [] },
    },
};

//working 이미지
const TourFormArea = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateArea,
        setErrors
    );

    const handleChangeImageList = (newImgList) => {
        setInputs((state) => ({
            ...state,
            imageList: newImgList,
        }));
    };

    const handleChangeAudioList = (newAudioList) => {
        setInputs((state) => ({
            ...state,
            audioList: [...state.audioList, newAudioList],
        }));
    };

    const handleDeleteAudioList = (idx) => {
        setInputs((state) => ({
            ...state,
            audioList: state.audioList.filter((_, i) => String(i) !== idx),
        }));
    };

    const handleChangeAudioMain = ({ selected, name, value }) => {
        setInputs((state) => ({
            ...state,
            audioMain: {
                ...state.audioMain,
                [selected]: {
                    ...state.audioMain[selected],
                    [name]: value,
                },
            },
        }));
    };

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateArea);

        if (isValid) {
            console.log("에러 없음");
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

    return (
        <Content>
            <ContentNav id={id}>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>

            <FormLayout>
                <FormSection>
                    <RatioSingle
                        label="국가"
                        name="countryCtg"
                        value={inputs.countryCtg || "KOREA"}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "KOREA", title: "국내" },
                            { value: "OVERSEAS", title: "국외" },
                        ]}
                    />

                    <Select
                        label="(국가 선택)"
                        name="country"
                        value={inputs.country || "KOREA"}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={optionsCountry(inputs.countryCtg)}
                        disabled={inputs.countryCtg === "KOREA"}
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
                        options={optionsRegion(inputs.city)}
                    />

                    <Input
                        label="관광지 코드"
                        name="placeCode"
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
                </FormSection>

                <FormImg
                    imageList={inputs.imageList}
                    handleChangeImageList={handleChangeImageList}
                />

                <FormSection size="full">
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
                </FormSection>
                {/* 오디오 서브 등록 */}
                <FormAudio
                    inputs={inputs}
                    onChange={handleChangeInputs}
                    audioList={inputs.audioList}
                    handleChangeAudioList={handleChangeAudioList}
                    handleDeleteAudioList={handleDeleteAudioList}
                />
                {/* 오디오 메인 등록 */}
                <FormAudioMain
                    inputs={inputs}
                    onChange={handleChangeInputs}
                    audioMain={inputs.audioMain}
                    handleChangeAudioMain={handleChangeAudioMain}
                    disabled={inputs.hasAudioMain === "no"}
                />
            </FormLayout>
        </Content>
    );
};

export default TourFormArea;
