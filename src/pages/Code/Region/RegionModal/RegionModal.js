import React, { useState, useEffect } from "react";
import {
    FileuploadCard,
    Input,
    RatioSingle,
    Select,
} from "../../../../components/Form/FormComponents";
import FormTable from "../../../../components/Form/FormTable";
import Modal from "../../../../components/Modal/Modal";
import {
    optionsCity,
    optionsCountry,
    optionsRegion,
} from "../../../../util/options";
import noImg from "../../../../img/no-img.jpg";
// import axios from "axios";

const initialValue = {
    id: "",
    check: false,
    country: "",
    countryCode: "",
    countrySort: "",
    state: "",
    stateCode: "",
    stateSort: "",
    city: "",
    hasImgMain: "no",
    cityCode: "",
    citySort: "",
    editMng: "",
    editDate: "",
    makeMng: "",
    makeDate: "",
};

const RegionModal = ({
    isModalOpen,
    modalType,
    selectedItem,
    handleModalClose,
    handleChangePageData,
}) => {
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({});
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        if (selectedItem.id && modalType !== "new") {
            setInputs(selectedItem);
        } else {
            setInputs(initialValue);
        }
    }, [modalType, selectedItem]);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setInputs((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleClickSave = async () => {
        let newId = modalType === "edit" ? inputs.id : "";

        const newInputs = {
            ...inputs,
            id: newId,
        };
        try {
            // ### 서버저장
            // await axios.post("http://localhost:8000/region/update", newInputs);
            handleChangePageData(newInputs);
        } catch (e) {
            console.error("RegionModal Submit Error", e);
        }
        setInputs(initialValue);
        handleModalClose();
    };
    const handleChangeImageList = () => {};

    return (
        <Modal
            isModalOpen={isModalOpen}
            title="지역 코드 추가하기"
            handleModalClose={handleModalClose}
        >
            <div className="formPlaceBodyModal">
                <div className="formPlaceBodyModal__buttonContainer">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={handleClickSave}
                    >
                        저장
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleModalClose}
                    >
                        닫기
                    </button>
                </div>
                <div className=" row">
                    <FormTable size="half">
                        <Select
                            label="국가"
                            name="country"
                            value={inputs.country}
                            onChange={handleChangeInput}
                            errors={errors}
                            options={[
                                ...optionsCountry(inputs.countryCtg),
                                { value: "KOREA", title: "대한민국" },
                            ]}
                        />

                        <Select
                            label="국가 코드"
                            name="countryCode"
                            value={inputs.countryCode}
                            onChange={handleChangeInput}
                            errors={errors}
                            options={[
                                { value: "code1", title: "코드1" },
                                { value: "code2", title: "코드2" },
                                { value: "code3", title: "코드3" },
                                { value: "K", title: "K" },
                            ]}
                        />

                        <Input
                            label="국가 정렬"
                            name="countrySort"
                            value={inputs.countrySort}
                            onChange={handleChangeInput}
                            errors={errors}
                        />

                        <Select
                            label="시/도"
                            name="state"
                            value={inputs.state}
                            onChange={handleChangeInput}
                            errors={errors}
                            options={optionsCity(inputs.state)}
                        />

                        <Select
                            label="시도 코드"
                            name="stateCode"
                            value={inputs.stateCode}
                            onChange={handleChangeInput}
                            errors={errors}
                            options={[
                                { value: "code1", title: "코드1" },
                                { value: "code2", title: "코드2" },
                                { value: "code3", title: "코드3" },
                                { value: "S", title: "코드4" },
                            ]}
                        />

                        <Input
                            label="시/도 정렬"
                            name="stateSort"
                            value={inputs.stateSort}
                            onChange={handleChangeInput}
                            errors={errors}
                        />
                        <Select
                            label="지역"
                            name="city"
                            value={inputs.city}
                            onChange={handleChangeInput}
                            errors={errors}
                            options={optionsRegion(inputs.region)}
                        />

                        <RatioSingle
                            label="대표사진 유무"
                            name="hasImgMain"
                            value={inputs.hasImgMain}
                            onChange={handleChangeInput}
                            options={[
                                { value: "yes", title: "있음" },
                                { value: "no", title: "없음" },
                            ]}
                        />

                        <Select
                            label="지역 코드"
                            name="cityCode"
                            value={inputs.cityCode}
                            onChange={handleChangeInput}
                            errors={errors}
                            options={[
                                { value: "code1", title: "코드1" },
                                { value: "code2", title: "코드2" },
                                { value: "code3", title: "코드3" },
                            ]}
                        />
                        <Input
                            label="최근 수정 관리자"
                            name="editMng"
                            value={inputs.editMng}
                            onChange={handleChangeInput}
                            errors={errors}
                        />

                        <Input
                            label="최근 수정 날짜"
                            name="editDate"
                            value={inputs.editDate}
                            onChange={handleChangeInput}
                            errors={errors}
                        />
                        <Input
                            label="생성 관리자"
                            name="makeMng"
                            value={inputs.makeMng}
                            onChange={handleChangeInput}
                            errors={errors}
                        />
                        <Input
                            label="생성 일자"
                            name="makeDate"
                            value={inputs.makeDate}
                            onChange={handleChangeInput}
                            errors={errors}
                        />
                    </FormTable>
                    <FormTable size="half">
                        <FileuploadCard
                            label="대표 사진"
                            src={imageList[0] ? imageList[0].src : noImg}
                            onChange={handleChangeImageList}
                            ctg="profile"
                        />
                    </FormTable>
                </div>
            </div>
        </Modal>
    );
};

export default RegionModal;
