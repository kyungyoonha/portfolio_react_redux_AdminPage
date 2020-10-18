import React, { useState, useEffect } from "react";
import FormImg from "./components/FormImg";
import { useSelector, useDispatch } from "react-redux";
// import FormAudio from "./components/FormAudio";
// import FormAudioMain from "../components/FormAudioMain";

import {
    Input,
    Select,
    RadioSingle,
    RadioTypeCheck,
    RadioMulti,
    FormLayout,
    FormSection,
    InputAddress,
    InputTimeRange,
    FormAudioList,
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
import {
    fileAction_getAudios,
    fileAction_getImages,
} from "../../../redux/actions";

const initialValue = {
    idx: "",
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

    const dispatch = useDispatch();
    const { audios, audioMain, audioSub } = useSelector((state) => state.file);

    useEffect(() => {
        dispatch(fileAction_getAudios("1"));
        // dispatch(fileAction_getImages("1"));
    }, [dispatch]);

    useEffect(() => {
        audioMain &&
            setInputs((state) => ({
                ...state,
                mainaudioYN: "Y",
            }));
        audioSub &&
            setInputs((state) => ({
                ...state,
                subaudioYN: "Y",
            }));
    }, [setInputs, audioMain, audioSub]);

    const handleChangeImageList = (newImgList) => {
        setInputs((state) => ({
            ...state,
            imageList: newImgList,
        }));
    };

    // const handleChangeAudioList = (newAudioList) => {
    //     setInputs((state) => ({
    //         ...state,
    //         audioList: [...state.audioList, newAudioList],
    //     }));
    // };

    // const handleDeleteAudioList = (idx) => {
    //     setInputs((state) => ({
    //         ...state,
    //         audioList: state.audioList.filter((_, i) => String(i) !== idx),
    //     }));
    // };

    // const handleChangeAudioMain = ({ selected, name, value }) => {
    //     setInputs((state) => ({
    //         ...state,
    //         audioMain: {
    //             ...state.audioMain,
    //             [selected]: {
    //                 ...state.audioMain[selected],
    //                 [name]: value,
    //             },
    //         },
    //     }));
    // };

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
                {/* 오디오 서브 등록 */}
                <FormSection full>
                    <RadioSingle
                        label="대표 오디오 가이드"
                        name="mainaudioYN"
                        value={inputs.mainaudioYN}
                        onChange={handleChangeInputs}
                        errors={errors}
                        disabled={audioMain.length > 0}
                        options={[
                            { value: "Y", title: "있음" },
                            { value: "N", title: "없음" },
                        ]}
                    >
                        {inputs.mainaudioYN === "Y" && (
                            <button
                                type="button"
                                className="btn btn-primary mt-3"
                            >
                                대표 오디오 추가
                            </button>
                        )}
                    </RadioSingle>

                    <RadioSingle
                        label="세부 오디오 가이드"
                        name="subaudioYN"
                        value={inputs.subaudioYN}
                        onChange={handleChangeInputs}
                        errors={errors}
                        disabled={audioSub.length > 0}
                        options={[
                            { value: "Y", title: "있음" },
                            { value: "N", title: "없음" },
                        ]}
                    >
                        {inputs.subaudioYN === "Y" && (
                            <button
                                type="button"
                                className="btn btn-primary mt-3"
                            >
                                세부 오디오 추가
                            </button>
                        )}
                    </RadioSingle>

                    <FormAudioList data={audios} />
                </FormSection>
                {/* <FormAudio
                    inputs={inputs}
                    onChange={handleChangeInputs}
                    audioList={inputs.audioList}
                    handleChangeAudioList={handleChangeAudioList}
                    handleDeleteAudioList={handleDeleteAudioList}
                    disabled={inputs.subaudioYN === "N"}
                /> */}
                {/* 오디오 메인 등록
                <FormAudioMain
                    inputs={inputs}
                    onChange={handleChangeInputs}
                    audioMain={inputs.audioMain}
                    handleChangeAudioMain={handleChangeAudioMain}
                    disabled={inputs.mainaudioYN === "N"}
                /> */}
            </FormLayout>
        </Content>
    );
};

export default TourFormPackage;
