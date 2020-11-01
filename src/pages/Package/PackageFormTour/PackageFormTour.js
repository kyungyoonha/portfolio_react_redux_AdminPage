import React, { useState, useEffect } from "react";
import history from "../../../history";
import { validateAll, validateTour } from "../../../util/validate";
// redux
import { boardAction_update } from "../../../redux/actions";
import { useDispatch } from "react-redux";

import useInputs from "../../../Hooks/useInputs";
import { ContentBtn, ContentNav } from "../../../components/Content/Content";
import TourModalAudio from "./TourModalAudio/TourModalAudio";
import TourModalImage from "./TourModalImage/TourModalImage";
import {
    Input,
    RadioSingle,
    RadioTypeCheck,
    RadioMulti,
    FormLayout,
    FormSection,
    InputAddress,
    InputTimeRange,
    FormAudioList,
    FormImageList,
    SelectAPI,
} from "../../../components/Form/Form";

const initialValue = {
    tourname: "",
    nationtype: "1",
    nationcode: "KOREA",
    sidocode: "",
    areacode: "",
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

// working ###
// mainaudioYN, subaudioYN 삭제
// 파일저장. json 저장   => mainaudioYn, subaudioYN 추가
// 파일저장. json 저장   => id 값 가져옴
// 파일저장. 오디오 저장 => 한개씩 해도 됌
// 파일저장. 오디오 저장 => 오디오 라우터 => formData로 처리
// 파일저장. 이미지 저장 => 여러개, 순서까지

// 관광지 코드는 어디다가 쓰는건지? 중복체크 해줘야하나
const PackageFormTour = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [audios, setAudios] = useState([]);
    const [images, setImages] = useState([]);
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateTour,
        setErrors
    );
    useEffect(() => {
        let audioMain = audios.filter((item) => item.mainaudioYN === "Y");
        let audioSub = audios.filter((item) => item.mainaudioYN === "N");
        let mainaudioYN = audioMain.length ? "Y" : "N";
        let subaudioYN = audioSub.length ? "Y" : "N";

        setInputs((state) => ({
            ...state,
            mainaudioYN,
            subaudioYN,
        }));
    }, [setInputs, audios]);

    const handleChangeImageList = (newImgList) => {
        setInputs((state) => ({
            ...state,
            imageList: newImgList,
        }));
    };

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateTour);

        if (!images.length) {
            alert("관광지 사진을 추가해주세요.");
            return;
        }

        if (isValid) {
            console.log("에러 없음");
            dispatch(
                boardAction_update(
                    pageId,
                    {
                        ...inputs,
                        inextroversion: Number(inputs.inextroversion),
                        openclose: Number(inputs.openclose),
                    },
                    images,
                    audios
                )
            );
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

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
        <FormLayout>
            <ContentNav>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>

            <FormSection>
                <Input
                    label="관광지명"
                    name="tourname"
                    value={inputs.tourname}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <RadioSingle
                    label="국가 분류"
                    name="nationtype"
                    value={inputs.nationtype || "1"}
                    onChange={handleChangeInputs}
                    options={[
                        { value: "1", title: "국내" },
                        { value: "2", title: "국외" },
                    ]}
                />
                <SelectAPI
                    label="국가 코드"
                    searchId="nationcode"
                    value={inputs.nationcodeidx}
                    searchItems={["koreanname", "code2"]}
                    onChange={handleChangeInputs}
                    disabled={inputs.nationtype === "1"}
                    error={errors["nationcodeidx"]}
                />

                <SelectAPI
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
            {/* 이미지 리스트 */}
            <FormSection>
                <FormImageList
                    images={images}
                    handleChangeImageList={handleChangeImageList}
                >
                    <TourModalImage
                        images={images}
                        handleChangeImage={handleChangeImage}
                    />
                </FormImageList>
            </FormSection>
            {/* 오디오 리스트 */}
            <FormSection full>
                <RadioMulti
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

                <RadioTypeCheck
                    label="내외향성"
                    labelLeft="외향성"
                    labelRight="내향성"
                    name="inextroversion"
                    value={inputs.inextroversion}
                    onChange={handleChangeInputs}
                />

                <RadioTypeCheck
                    label="개방폐쇄성"
                    labelLeft="개방성"
                    labelRight="폐쇄성"
                    name="openclose"
                    value={inputs.openclose}
                    onChange={handleChangeInputs}
                />
            </FormSection>
            <FormSection full>
                <RadioSingle
                    label="대표 오디오 가이드"
                    name="mainaudioYN"
                    value={inputs.mainaudioYN}
                    onChange={handleChangeInputs}
                    errors={errors}
                    disabled={true}
                    options={[
                        { value: "Y", title: "있음" },
                        { value: "N", title: "없음" },
                    ]}
                />

                <RadioSingle
                    label="세부 오디오 가이드"
                    name="subaudioYN"
                    value={inputs.subaudioYN}
                    onChange={handleChangeInputs}
                    errors={errors}
                    disabled={true}
                    options={[
                        { value: "Y", title: "있음" },
                        { value: "N", title: "없음" },
                    ]}
                />

                <FormAudioList
                    data={audios}
                    handleDeleteAudio={handleDeleteAudio}
                >
                    <TourModalAudio
                        title="오디오 추가하기(+)"
                        handleChangeAudio={handleChangeAudio}
                    />
                </FormAudioList>
            </FormSection>
        </FormLayout>
    );
};

export default PackageFormTour;
