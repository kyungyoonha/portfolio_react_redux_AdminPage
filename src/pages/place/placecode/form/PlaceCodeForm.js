import React, { useState } from "react";
import Template from "../../../../components/common/template/Template";
import validateInput from "../../../../util/validateInput";
import FormTable from "../../../../components/common/Form/FormTable";
import PlaceCodeFormMid from "./PlaceCodeFormMid";
import PlaceCodeFormBottom from "./PlaceCodeFormBottom";
import PlaceCodeFormRight from "./PlaceCodeFormRight";

import {
    Input,
    Select,
    RatioSingle,
    RatioTypeCheck,
    RatioMulti,
} from "../../../../components/common/Form/FormComponents";

import {
    optionsCountry,
    optionsCity,
    optionsRegion,
} from "../../../../util/options";

import img1 from "../../../../img/1.jpg";
import img2 from "../../../../img/2.jpg";
import img3 from "../../../../img/3.jpg";
import img4 from "../../../../img/4.jpg";

const PlaceCodeForm = () => {
    // ========== handle Inputs ==========
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
        hasAudio: "noe",
        hasAudioMain: false,
        audioTitle: "",
        audioFileName: "",
        audioScript: "",
        etc: "",
    });

    const onChange = (e, inputName) => {
        const { name, value, type, checked } = e.target;
        // tourTags 체크박스 여러개
        if (type === "checkbox") {
            const length = Object.keys(inputs.tourTags).filter(
                (key) => inputs.tourTags[key]
            ).length;
            if (length >= 3 && checked) {
                alert("3개까지만 선택 가능합니다");
            } else {
                setInputs((state) => ({
                    ...state,
                    [inputName]: {
                        ...state[inputName],
                        [name]: checked,
                    },
                }));
            }
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
        // 유효값 체크
        const error = validateInput(name, value);
        setErrors((state) => ({
            ...state,
            [name]: error,
        }));
    };
    // ========== handle Upload Images ==========
    const uploadImgs2 = [
        { src: img1, fileName: "", file: null },
        { src: img2, fileName: "", file: null },
        { src: img3, fileName: "", file: null },
        { src: img4, fileName: "", file: null },
    ];
    const [uploadImgs, setUploadImgs] = useState([]);

    const handleUploadImgs = (imgs) => {
        setUploadImgs(imgs);
    };

    // ========== handle Upload Audio ==========
    const onUploadFile = (e, type) => {
        const image = e.target.files[0];
        // const previewSrc = URL.createObjectURL(image);

        const formData = new FormData();
        formData.append("image", image, image.name);
        if (type === "audioFileName") {
            setInputs((state) => ({
                ...state,
                audioFileName: image.name,
            }));
        }

        // this.props.uploadImage(formData);
    };

    const handleClickInsert = () => {};
    const handleClickDelete = () => {};

    return (
        <Template
            title="관광지 관리"
            navCtg="place"
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
                            onChange={onChange}
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
                                onChange={onChange}
                                errors={errors}
                                options={optionsCountry(inputs.countryCtg)}
                            />
                        )}
                        <Select
                            label="시/도"
                            name="state"
                            value={inputs.city}
                            onChange={onChange}
                            errors={errors}
                            options={optionsCity(inputs.city)}
                        />
                        <Select
                            label="지역"
                            name="city"
                            value={inputs.region}
                            onChange={onChange}
                            errors={errors}
                            options={optionsRegion(inputs.region)}
                        />

                        <Input
                            label="관광지 코드"
                            name="placeCode"
                            value={inputs.placeCode}
                            onChange={onChange}
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
                            onChange={onChange}
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
                            onChange={onChange}
                            errors={errors}
                        />

                        <Input
                            label="전화번호"
                            name="contactNumber"
                            value={inputs.contactNumber}
                            onChange={onChange}
                            errors={errors}
                        />

                        <Input
                            label="입장료"
                            name="entranceFee"
                            value={inputs.entranceFee}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Input
                            label="운영시간"
                            name="businessHours"
                            value={inputs.businessHours}
                            onChange={onChange}
                            errors={errors}
                        />
                    </FormTable>
                    {/* Top 오른쪽 */}
                    <div className="col-md-6">
                        <PlaceCodeFormRight
                            uploadImgs={uploadImgs2}
                            handleUploadImgs={handleUploadImgs}
                        />
                    </div>
                    {/* 중앙 */}
                    <FormTable>
                        <RatioMulti
                            label="여행태그"
                            name="tourTags"
                            value={inputs.tourTags}
                            onChange={onChange}
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
                            onChange={onChange}
                        />

                        <RatioTypeCheck
                            label="여행 성향2"
                            labelLeft="개방성"
                            labelRight="폐쇄성"
                            name="typeStyle"
                            value={inputs.typeStyle}
                            onChange={onChange}
                        />
                    </FormTable>
                    {/* 오디오 서브 등록 */}
                    <FormTable size="half">
                        <PlaceCodeFormMid
                            label="세부 관광지 오디오 가이드"
                            name="hasAudio"
                            value={inputs}
                            onChange={onChange}
                            options={[
                                { value: "yes", title: "有" },
                                { value: "no", title: "無" },
                            ]}
                        />
                    </FormTable>
                    {/* 오디오 메인 등록 */}
                    <FormTable></FormTable>
                    <PlaceCodeFormBottom
                        label="세부 관광지 오디오 가이드"
                        name="hasAudio"
                        value={inputs}
                        onChange={onChange}
                        onUploadFile={onUploadFile}
                        errors={errors}
                        options={[
                            { value: "yes", title: "有" },
                            { value: "no", title: "無" },
                        ]}
                    />
                </div>
            </form>
        </Template>
    );
};

export default PlaceCodeForm;
