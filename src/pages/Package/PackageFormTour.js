import React from "react";
import history from "../../history";
import useInputs from "../../Hooks/useInputs";
import FormLayout from "../../Layout/FormLayout";
import {
    FormSection,
    FormSectionImage,
    FormSectionAudio,
    Input,
    InputRadioSingle,
    InputAddress,
    InputSelectAPI,
    InputRatioMulti,
    InputRadioCheck,
    InputTimeRange,
} from "../../components";

const initialValue = {
    tourname: "",
    nationtype: "1",
    nationcodeidx: "1",
    sidocode: "",
    areacodeidx: "",
    tourcode: "",
    address: "",
    lat: "",
    lng: "",
    telnumber: "",
    admissionfee: "",
    operatingtime: "",
    interesttag: "",
    inextroversion: "0",
    openclose: "0",
    subaudioYN: "N",
    mainaudioYN: "N",
    audios: [],
    images: [],
};

const PackageFormTour = () => {
    const { inputs, setInputs, errors, onChange, onSubmit } = useInputs(
        initialValue
    );

    const handleChangeAudio = (audio) => {
        setInputs((state) => ({
            ...state,
            audios: [audio, ...state.audios],
        }));
    };

    const handleDeleteAudio = (idx) => {
        setInputs((state) => ({
            ...state,
            audios: state.audios.filter((_, i) => i !== idx),
        }));
    };

    const handleChangeImage = (images) => {
        setInputs((state) => ({
            ...state,
            images,
        }));
    };

    const handleSubmit = () => {
        let fileList = ["audios", "images"];
        let interesttag = [];
        Object.keys(inputs.interesttag).forEach((key) => {
            inputs.interesttag[key] && interesttag.push(key);
        });
        inputs.interesttag = interesttag.join(",");
        onSubmit(inputs, fileList);
    };

    return (
        <FormLayout
            onClickInsert={handleSubmit}
            onClickBack={() => history.goBack()}
        >
            <FormSection>
                <Input
                    label="관광지명"
                    name="tourname"
                    value={inputs.tourname}
                    onChange={onChange}
                    error={errors.tourname}
                />
                <InputRadioSingle
                    label="국가 분류"
                    name="nationtype"
                    value={inputs.nationtype || "1"}
                    onChange={onChange}
                    options={[
                        { value: "1", title: "국내" },
                        { value: "2", title: "국외" },
                    ]}
                />
                <InputSelectAPI
                    label="국가 코드"
                    searchId="nationcode"
                    value={inputs.nationcodeidx}
                    searchItems={["koreanname", "code2"]}
                    onChange={onChange}
                    disabled={inputs.nationtype === "1"}
                    error={errors["nationcodeidx"]}
                />
                <InputSelectAPI
                    label="시도 코드"
                    searchId="areacode"
                    value={inputs.areacodeidx}
                    searchItems={[
                        "sidoname",
                        "sidocode",
                        "areaname",
                        "areacode",
                    ]}
                    onChange={onChange}
                    error={errors["areacodeidx"]}
                />

                <Input
                    label="관광지 코드"
                    name="tourcode"
                    value={inputs.tourcode}
                    onChange={onChange}
                    error={errors.tourcode}
                >
                    <button className="btn btn-outline-primary" type="button">
                        중복확인
                    </button>
                </Input>

                <InputAddress
                    label="주소"
                    name="address"
                    value={inputs.address}
                    onChange={onChange}
                    error={errors.address}
                />

                <Input
                    label="전화번호"
                    name="telnumber"
                    value={inputs.telnumber}
                    onChange={onChange}
                    error={errors.telnumber}
                />

                <Input
                    label="입장료"
                    name="admissionfee"
                    value={inputs.admissionfee}
                    onChange={onChange}
                    error={errors.admissionfee}
                />

                <InputTimeRange
                    label="운영시간"
                    name="operatingtime"
                    value={inputs.operatingtime}
                    onChange={onChange}
                    error={errors.operatingtime}
                />
            </FormSection>

            <FormSectionImage
                images={inputs.images}
                onChange={handleChangeImage}
            />

            <FormSection full>
                <InputRatioMulti
                    label="관심사 태그"
                    name="interesttag"
                    value={inputs.interesttag}
                    onChange={onChange}
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

                <InputRadioCheck
                    label="내외향성"
                    labelLeft="외향성"
                    labelRight="내향성"
                    name="inextroversion"
                    value={inputs.inextroversion}
                    onChange={onChange}
                />

                <InputRadioCheck
                    label="개방폐쇄성"
                    labelLeft="개방성"
                    labelRight="폐쇄성"
                    name="openclose"
                    value={inputs.openclose}
                    onChange={onChange}
                />
            </FormSection>

            <FormSectionAudio
                label="오디오 추가"
                values={inputs.audios}
                onChange={handleChangeAudio}
                handleDeleteAudio={handleDeleteAudio}
            />
        </FormLayout>
    );
};

export default PackageFormTour;
