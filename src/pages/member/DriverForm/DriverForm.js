import React, { useState } from "react";
import history from "../../../history";
import Template from "../../../components/Template/Template";
import validateInput from "../../../util/validateInput";
import FormTable from "../../../components/Form/FormTable";
import {
    Input,
    Select,
    RatioSingle,
    Textarea,
    FileUpload,
    FileuploadCard,
} from "../../../components/Form/FormComponents";

import noImg from "../../../img/no-img.jpg";

import noImgCar from "../../../img/no-img-car.png";
import {
    optionsCountry,
    optionsCity,
    optionsRegion,
} from "../../../util/options";

const DriverForm = () => {
    const [errors, setErrors] = useState({});
    const [profile, setProfile] = useState("");
    const [carImg, setCarImg] = useState("");
    const [inputs, setInputs] = useState({
        driver_id: "",
        countryCtg: "KOREA",
        country: "",
        state: "",
        city: "",
        name: "",
        birth: "",
        contactNumber: "",
        carType: "",
        plateNumber: "",
        license: "",
        belong: "private",
        companyName: "",
        scheduleCount: "",
        complain: "",
        score: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs((state) => ({
            ...state,
            [name]: value,
        }));

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

    const onUploadFile = (e, type) => {
        const image = e.target.files[0];
        const previewSrc = URL.createObjectURL(image);

        const formData = new FormData();
        formData.append("image", image, image.name);

        if (type === "profile") {
            setProfile(previewSrc);
        } else if (type === "carImg") {
            setCarImg(previewSrc);
        } else if (type === "license") {
            setInputs((state) => ({
                ...state,
                license: image.name,
            }));
        }

        // this.props.uploadImage(formData);
    };

    const handleClickInsert = () => {};

    return (
        <Template title="기사 정보" navCtg="member">
            <div className="template__top">
                <h4 className="mb-4">추가하기</h4>
                <div>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleClickInsert}
                    >
                        추가하기
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => {
                            history.goBack();
                        }}
                    >
                        뒤로가기
                    </button>
                </div>
            </div>

            <form style={{ margin: "0 15px" }}>
                <div className="no-Gutter2 row">
                    <FormTable size="half">
                        <Input
                            label="id"
                            name="driver_id"
                            value={inputs.driver_id}
                            onChange={onChange}
                            errors={errors}
                        />
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
                            label="이름"
                            name="name"
                            value={inputs.name}
                            onChange={onChange}
                            errors={errors}
                        />

                        <Input
                            label="생년월일"
                            name="birth"
                            value={inputs.birth}
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
                            label="차종"
                            name="carType"
                            value={inputs.carType}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Input
                            label="차량번호"
                            name="plateNumber"
                            value={inputs.plateNumber}
                            onChange={onChange}
                            errors={errors}
                        />

                        <FileUpload
                            label="면허증 첨부"
                            name="license"
                            value={inputs.license}
                            onChange={onUploadFile}
                            ctg="license"
                        />

                        <RatioSingle
                            label="소속"
                            name="belong"
                            value={inputs.belong}
                            onChange={onChange}
                            options={[
                                { value: "private", title: "개인" },
                                { value: "company", title: "기업" },
                            ]}
                        />
                        {inputs.belong !== "private" && (
                            <Input
                                label="회사명"
                                name="companyName"
                                value={inputs.companyName}
                                onChange={onChange}
                                errors={errors}
                            />
                        )}

                        <Input
                            label="운행 횟수"
                            name="scheduleCount"
                            value={inputs.scheduleCount}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Input
                            label="컴플레인"
                            name="complain"
                            value={inputs.complain}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Input
                            label="평점"
                            name="score"
                            value={inputs.score}
                            onChange={onChange}
                            errors={errors}
                        />
                        <Textarea
                            label="기타"
                            name="etc"
                            value={inputs.ect}
                            onChange={onChange}
                            rows={6}
                        />
                    </FormTable>

                    <FormTable size="half">
                        <FileuploadCard
                            label="기사 사진"
                            src={profile || noImg}
                            onChange={onUploadFile}
                            ctg="profile"
                        />

                        <FileuploadCard
                            label="차량 사진"
                            src={carImg || noImgCar}
                            onChange={onUploadFile}
                            ctg="carImg"
                        />
                    </FormTable>
                </div>
            </form>
        </Template>
    );
};

export default DriverForm;
