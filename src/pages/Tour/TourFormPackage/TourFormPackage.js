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
    InputAddress,
    InputTimeRange,
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
import { validateAll, validatePackage } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";

// const initialValue = {
//     countryCtg: "KOREA",
//     country: "KOREA",
//     state: "",
//     city: "",
//     placeCode: "",
//     address: "",
//     lat: "",
//     lng: "",
//     placeName: "",
//     contactNumber: "",
//     entranceFee: "",
//     businessHours: "",
//     tourTags: {},
//     typeCharacteristic: "0",
//     typeStyle: "0",
//     hasAudio: "no",
//     hasAudioMain: "no",
//     imageList: [
//         // { src: img1, filename: "", file: null },
//         // { src: img1, filename: "", file: null },
//         // { src: img1, filename: "", file: null },
//     ],
//     audioList: [
//         // {
//         //     name: ''
//         //     inputs: { countryCtg: "KOREA", state: "", city: "", place: "", name: "", content: "", hasAudio: "no" },
//         //     imageList: [
//         //         { src: "img1", filename: "", file: null }
//         //     ],
//         //     audioMain: {
//         //         korea: { title: "", script: "", files: [] },
//         //         english: { title: "", script: "", files: [] },
//         //         japan: { title: "", script: "", files: [] },
//         //         china: { title: "", script: "", files: [] },
//         //     },
//         // },
//         // { ... },
//         // { ... },
//     ],
//     audioMain: {
//         korea: { title: "", script: "", files: [] },
//         english: { title: "", script: "", files: [] },
//         japan: { title: "", script: "", files: [] },
//         china: { title: "", script: "", files: [] },
//     },
// };

const initialValue = {
    idx: "",
    tourname: "",
    nationtype: "1",
    nationcode: "KOREA",
    sidocode: "",
    areacode: "",
    tourcode: "",
    address: "",
    telnumber: "",
    admissionfee: "",
    operatingtime: "",
    interesttag: "",
    inextroversion: "0",
    openclose: "0",
    subaudioYN: "N",
    mainaudioYN: "N",
    regdate: "",
    reguser: "",
    moddate: "",
    moduser: "",

    imageList: [],
    audioList: [],
    audioMain: {
        korea: { title: "", script: "", files: [] },
        english: { title: "", script: "", files: [] },
        japan: { title: "", script: "", files: [] },
        china: { title: "", script: "", files: [] },
    },
};

//working 이미지
const TourFormPackage = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validatePackage,
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
        const { isValid, checkedErrors } = validateAll(inputs, validatePackage);

        // if (!inputs.imageList[0]) {
        //     alert("관광지 사진을 추가해주세요.");
        //     return;
        // }

        if (isValid) {
            console.log("에러 없음");
            // const result = {
            //     ...inputs,
            //     inextroversion: Number(inputs.inextroversion),
            //     openclose: Number(inputs.openclose),
            //     regdate: new Date().toISOString(),
            //     reguser: user.name,
            // };
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };
    return (
        <Content>
            <ContentNav pageId={pageId}>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>

            <FormLayout>
                <FormSection>
                    <Input
                        label="관광지명"
                        name="tourname"
                        value={inputs.tourname}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <RatioSingle
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

                    <Input
                        label="관광지 코드"
                        name="tourcode"
                        value={inputs.tourcode}
                        onChange={handleChangeInputs}
                        errors={errors}
                    >
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                        >
                            중복확인
                        </button>
                    </Input>

                    <InputAddress
                        label="주소"
                        name="address"
                        value={inputs.address}
                        setInputs={setInputs}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="전화번호"
                        name="telnumber"
                        value={inputs.telnumber}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="입장료"
                        name="admissionfee"
                        value={inputs.admissionfee}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <InputTimeRange
                        value={inputs.operatingtime}
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
                        label="관심사 태그"
                        name="interesttag"
                        value={inputs.interesttag}
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
                        label="내외향성"
                        labelLeft="외향성"
                        labelRight="내향성"
                        name="inextroversion"
                        value={inputs.inextroversion}
                        onChange={handleChangeInputs}
                    />

                    <RatioTypeCheck
                        label="개방폐쇄성"
                        labelLeft="개방성"
                        labelRight="폐쇄성"
                        name="openclose"
                        value={inputs.openclose}
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
                    disabled={inputs.subaudioYN === "N"}
                />
                {/* 오디오 메인 등록 */}
                <FormAudioMain
                    inputs={inputs}
                    onChange={handleChangeInputs}
                    audioMain={inputs.audioMain}
                    handleChangeAudioMain={handleChangeAudioMain}
                    disabled={inputs.mainaudioYN === "N"}
                />
            </FormLayout>
        </Content>
    );
};

export default TourFormPackage;
