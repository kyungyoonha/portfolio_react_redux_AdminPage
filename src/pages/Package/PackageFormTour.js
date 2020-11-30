import React, { useState, useEffect } from "react";
import history from "../../history";
// redux
import { useDispatch, useSelector } from "react-redux";
import formActions from "../../redux/actions/formActions";
// Components
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

// "validate": ["tourname", "nationcodeidx", "areacodeidx", "tourcode", "operatingtime", "address", "telnumber", "admissionfee"],
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
};

const PackageFormTour = () => {
    const dispatch = useDispatch();
    const [audios, setAudios] = useState([]);
    const [images, setImages] = useState([]);
    let { inputs, errors } = useSelector((state) => state.form);

    useEffect(() => {
        dispatch(formActions.init(initialValue));
        return () => dispatch(formActions.initialize());
    }, [dispatch]);

    const handleChangeInputs = (e) => {
        dispatch(formActions.changeValue(e));
    };

    const handleClickInsert = async (e) => {
        e.preventDefault();
        if (!images.length) {
            alert("관광지 사진을 추가해주세요.");
            return;
        }

        let interesttag = Object.keys(inputs.interesttag);
        interesttag.filter((key) => inputs.interesttag[key]);
        inputs.interesttag = interesttag.join(", ");

        const resTour = await dispatch(formActions.submit(inputs));

        if (resTour?.data) {
            const touridx = resTour.data.idx;
            formActions.submitAddData(touridx, images, "/tourimage", ["file"]);
            formActions.submitAddData(touridx, audios, "/touraudio", [
                "audiofile",
            ]);
        }
    };

    if (!Object.keys(inputs).length) {
        inputs = initialValue;
    }

    const handleChangeAudio = (audio) => {
        setAudios((state) => [audio, ...state]);
    };

    const handleDeleteAudio = (idx) => {
        setAudios((state) => state.filter((_, i) => i !== idx));
    };

    const handleChangeImage = (images) => {
        setImages(images);
    };

    return (
        <FormLayout
            onClickInsert={handleClickInsert}
            onClickBack={() => history.goBack()}
        >
            <FormSection>
                <Input
                    label="관광지명"
                    name="tourname"
                    value={inputs.tourname}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <InputRadioSingle
                    label="국가 분류"
                    name="nationtype"
                    value={inputs.nationtype || "1"}
                    onChange={handleChangeInputs}
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
                    onChange={handleChangeInputs}
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
                    onChange={handleChangeInputs}
                    error={errors["areacodeidx"]}
                />

                <Input
                    label="관광지 코드"
                    name="tourcode"
                    value={inputs.tourcode}
                    onChange={handleChangeInputs}
                    errors={errors}
                >
                    <button className="btn btn-outline-primary" type="button">
                        중복확인
                    </button>
                </Input>

                <InputAddress
                    label="주소"
                    name="address"
                    value={inputs.address}
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
                    label="운영시간"
                    value={inputs.operatingtime}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
            </FormSection>

            <FormSectionImage images={images} onChange={handleChangeImage} />

            <FormSection full>
                <InputRatioMulti
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

                <InputRadioCheck
                    label="내외향성"
                    labelLeft="외향성"
                    labelRight="내향성"
                    name="inextroversion"
                    value={inputs.inextroversion}
                    onChange={handleChangeInputs}
                />

                <InputRadioCheck
                    label="개방폐쇄성"
                    labelLeft="개방성"
                    labelRight="폐쇄성"
                    name="openclose"
                    value={inputs.openclose}
                    onChange={handleChangeInputs}
                />
            </FormSection>

            <FormSectionAudio
                label="오디오 추가"
                data={audios}
                onChange={handleChangeAudio}
                handleDeleteAudio={handleDeleteAudio}
            />
        </FormLayout>
    );
};

export default PackageFormTour;
