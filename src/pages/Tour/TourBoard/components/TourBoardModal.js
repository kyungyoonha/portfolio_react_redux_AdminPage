import React, { useState, useEffect } from "react";
import "./TourBoardModal.scss";

import {
    FileuploadCard,
    Input,
    RatioSingle,
    Select,
    FormSection,
} from "../../../../components/Form/Form";
import Modal from "../../../../components/Modal/Modal";
import {
    optionsCity,
    optionsCountry,
    optionsRegion,
} from "../../../../util/options";
import noImg from "../../../../img/no-img.jpg";
import { validateAll, validateRegion } from "../../../../util/validate";
import useInputs from "../../../../Hooks/useInputs";

const initialValue = {
    id: "",
    check: false,
    countryCtg: "KOREA",
    country: "KOREA",
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
//working 이미지
const RegionModal = ({
    selectedItem,
    handleClickUpdate,
    handleClickDelete,
}) => {
    const [errors, setErrors] = useState({});
    // const [inputs, setInputs] = useState(initialValue);
    const [imageList, setImageList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateRegion,
        setErrors
    );

    useEffect(() => {
        if (selectedItem.id && modalOpen !== "new") {
            setInputs(selectedItem);
        } else {
            setInputs(initialValue);
        }
    }, [modalOpen, selectedItem, setInputs]);

    const handleClickSave = async () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateRegion);
        // ★ 이미지 validate
        if (isValid) {
            try {
                // ### 서버저장
                // await axios.post("http://localhost:8000/region/update", newInputs);
                console.log({
                    ...inputs,
                    id: modalOpen === "edit" ? inputs.id : "",
                });
                console.log(modalOpen);
                handleClickUpdate("region", {
                    ...inputs,
                    id: modalOpen === "edit" ? inputs.id : "",
                });
            } catch (e) {
                console.error("RegionModal Submit Error", e);
            }

            console.log("에러 없음");
            setInputs(initialValue);
            handleModalClose();
        } else {
            setErrors(checkedErrors);
        }
    };

    const handleChangeImageList = (e) => {
        const files = e.target.files;
        const filesList = [...new Array(files.length)].map((_, i) => {
            return {
                src: URL.createObjectURL(files[i]),
                file: files[i],
                filename: files[i].name,
            };
        });
        const newImageList = [...imageList].concat(filesList);
        setImageList(newImageList);
    };

    const handleModalOpen = (type) => {
        if (type === "new") {
            setInputs(initialValue);
            setModalOpen(type);
        } else {
            if (!selectedItem.id) {
                alert("행을 선택해주세요");
            } else {
                setInputs(selectedItem);
                setModalOpen(type);
            }
        }
    };
    const handleModalClose = () => {
        setModalOpen("");
    };

    return (
        <React.Fragment>
            <div className="tourBoardModal__buttonContainer">
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleClickDelete}
                >
                    삭제하기
                </button>

                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => handleModalOpen("new")}
                >
                    새로 추가하기
                </button>

                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => handleModalOpen("copy")}
                >
                    복사하기
                </button>
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => handleModalOpen("edit")}
                >
                    수정하기
                </button>
            </div>
            <Modal
                isModalOpen={!!modalOpen}
                title="지역 코드 추가하기"
                handleModalClose={handleModalClose}
            >
                <div className="tourBoardModal">
                    <div className="tourBoardModal__buttonContainer2">
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
                        <FormSection>
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

                            {/* <Input
                                label="국가 정렬"
                                name="countrySort"
                                value={inputs.countrySort}
                                onChange={handleChangeInputs}
                                errors={errors}
                            /> */}

                            <Select
                                label="시도 코드"
                                name="sidocode"
                                value={inputs.sidocode}
                                onChange={handleChangeInputs}
                                errors={errors}
                                options={optionsCity(inputs.sidocode)}
                            />

                            {/* <Select
                                label="시도 코드"
                                name="stateCode"
                                value={inputs.stateCode}
                                onChange={handleChangeInputs}
                                errors={errors}
                                options={[
                                    { value: "code1", title: "코드1" },
                                    { value: "code2", title: "코드2" },
                                    { value: "code3", title: "코드3" },
                                    { value: "S", title: "코드4" },
                                ]}
                            /> */}

                            {/* <Input
                                label="시/도 정렬"
                                name="stateSort"
                                value={inputs.stateSort}
                                onChange={handleChangeInputs}
                                errors={errors}
                            /> */}
                            <Select
                                label="지역 코드"
                                name="areacode"
                                value={inputs.areacode}
                                onChange={handleChangeInputs}
                                errors={errors}
                                options={optionsRegion(inputs.areacode)}
                            />

                            <RatioSingle
                                label="대표사진 유무"
                                name="hasImgMain"
                                value={inputs.hasImgMain}
                                onChange={handleChangeInputs}
                                options={[
                                    { value: "yes", title: "있음" },
                                    { value: "no", title: "없음" },
                                ]}
                            />

                            <Select
                                label="지역 코드"
                                name="cityCode"
                                value={inputs.cityCode}
                                onChange={handleChangeInputs}
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
                                onChange={handleChangeInputs}
                                errors={errors}
                            />

                            <Input
                                label="최근 수정 날짜"
                                name="editDate"
                                value={inputs.editDate}
                                onChange={handleChangeInputs}
                                errors={errors}
                            />
                            <Input
                                label="생성 관리자"
                                name="makeMng"
                                value={inputs.makeMng}
                                onChange={handleChangeInputs}
                                errors={errors}
                            />
                            <Input
                                label="생성 일자"
                                name="makeDate"
                                value={inputs.makeDate}
                                onChange={handleChangeInputs}
                                errors={errors}
                            />
                        </FormSection>
                        <FormSection>
                            <FileuploadCard
                                label="대표 사진"
                                src={imageList[0] ? imageList[0].src : noImg}
                                onChange={handleChangeImageList}
                                ctg="profile"
                            />
                        </FormSection>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default RegionModal;
