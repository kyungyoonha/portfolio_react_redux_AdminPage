import React, { useState } from "react";
import Template from "../../../../components/common/template/Template";
import validateInput from "../../../../util/validateInput";
import FormTable from "../../../../components/common/Form/FormTable";

import noImg from "../../../../img/no-img.jpg";
import PlaceCodeFormMid from "./PlaceCodeFormMid";
import PlaceCodeFormBottom from "./PlaceCodeFormBottom";
import {
    Input,
    Select,
    RatioSingle,
    RatioTypeCheck,
    RatioMulti,
    FileuploadManyCard,
} from "../../../../components/common/Form/FormComponents";

import {
    optionsCountry,
    optionsCity,
    optionsRegion,
} from "../../../../util/options";

const PlaceCodeForm = () => {
    const [errors, setErrors] = useState({});
    const [profile, setProfile] = useState("");

    const [inputs, setInputs] = useState({
        // section1
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
        // section2
        tourTags: {},
        typeCharacteristic: "",
        typeStyle: "",
        // section3
        hasAudio: "noe",
        hasAudioMain: false,
        // section4
        audioTitle: "",
        audioFileName: "",
        audioScript: "",
        etc: "",
    });

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

    const onChange = (e, inputName) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setInputs((state) => ({
                ...state,
                [inputName]: {
                    ...state[inputName],
                    [name]: checked,
                },
            }));
        } else {
            setInputs((state) => ({
                ...state,
                [name]: value,
            }));
        }

        if (name === "countryCtg" && value === "KOREA") {
            setInputs((state) => ({
                ...state,
                country: "KOREA",
            }));
        }

        const error = validateInput(name, value);
        setErrors((state) => ({
            ...state,
            [name]: error,
        }));
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
                    <div className="col-md-6">
                        <FormTable>
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
                    </div>
                    <div className="col-md-6">
                        <FormTable>
                            <FileuploadManyCard
                                label="기사 사진"
                                src={profile || noImg}
                                onChange={onUploadFile}
                                ctg="profile"
                            />
                        </FormTable>
                    </div>
                    <div className="col-md-12">
                        <FormTable>
                            <RatioMulti
                                label="여행태그"
                                name="tourTags"
                                value={inputs.tourTags}
                                onChange={onChange}
                                options={[
                                    { value: "picture", title: "사진광" },
                                    { value: "sports", title: "스포츠 마니아" },
                                    { value: "shopping", title: "쇼핑왕" },
                                    { value: "enjoy", title: "흥폭발" },
                                    { value: "study", title: "학구파" },
                                    { value: "nature", title: "자연인" },
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
                    </div>
                    <div className="col-md-6">
                        <FormTable>
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
                    </div>
                    <div className="col-md-12 mt-5">
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
                </div>
            </form>
        </Template>
    );
};

export default PlaceCodeForm;
