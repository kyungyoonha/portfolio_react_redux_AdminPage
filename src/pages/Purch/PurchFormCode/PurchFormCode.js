import React, { useState } from "react";
import history from "../../../history";
import validateInput from "../../../util/validateInput";
import {
    Input,
    Select,
    RatioSingle,
    FormLayout2,
    FormSection,
    SelectMultiCustom,
} from "../../../components/Form/Form";
import {
    optionsCity,
    optionsCountry,
    optionsRegion,
} from "../../../util/options";
import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";
import SectionMultiSelect from "../components/SectionMultiSelect";
// import PurchInfoFormBottom from "./components/PurchInfoFormBottom";

const PurchFormInfo = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState({
        user_id: "",
        password: "",
        name: "",
        birth: "",
        contactNumber: "",
        nickname: "",
        email: "",
        address: "",
        tourCnt: "",
        characteristic: "",
        tourTags: {},
        recieveEmail: "수신",
        recieveMessage: "수신",
        etc: "",
    });
    const [multiInfo, setMultiInfo] = useState({
        tour: [
            { seq: 1, value: "" },
            { seq: 2, value: "" },
        ],
        driver: [
            { seq: 1, value: "" },
            { seq: 2, value: "" },
        ],
        hobby: [
            { seq: 1, value: "" },
            { seq: 2, value: "" },
        ],
    });

    const handleChangeInputs = (e) => {
        const { name, value } = e.target;

        setInputs((state) => ({
            ...state,
            [name]: value,
        }));

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

    const handleClickInsert = () => {};

    return (
        <Content>
            <ContentNav id={id}>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>

            <FormLayout2>
                <FormSection>
                    <Input
                        label="투어 이름"
                        name="tourName"
                        value={inputs.tourName}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <RatioSingle
                        label="국가"
                        name="countryCtg"
                        value={inputs.countryCtg}
                        onChange={handleChangeInputs}
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
                            onChange={handleChangeInputs}
                            errors={errors}
                            options={optionsCountry(inputs.countryCtg)}
                        />
                    )}
                    <Select
                        label="시/도"
                        name="state"
                        value={inputs.state}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={optionsCity(inputs.state)}
                    />
                    <Select
                        label="지역"
                        name="city"
                        value={inputs.city}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={optionsRegion(inputs.city)}
                    />

                    <RatioSingle
                        label="투어 구분"
                        name="tourCtg"
                        value={inputs.tourCtg}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "taxi", title: "택시 투어" },
                            { value: "nomal", title: "일반 투어" },
                        ]}
                    />
                    <RatioSingle
                        label="투어 일수"
                        name="tourDayCntCheck"
                        value={inputs.tourDayCntCheck}
                        onChange={handleChangeInputs}
                        options={[
                            { value: false, title: "당일" },
                            { value: true, title: "기간설정" },
                        ]}
                    >
                        <br />
                        <input
                            name="tourDayCnt"
                            type="text"
                            value={inputs.tourDayCnt}
                            className={`form-control ${
                                errors["tourDayCnt"] && "is-invalid"
                            }`}
                            onChange={handleChangeInputs}
                            autoComplete="off"
                            disabled={inputs.tourDayCntCheck}
                        />
                    </RatioSingle>

                    <SelectMultiCustom
                        inputs={inputs}
                        onChange={handleChangeInputs}
                        options={[
                            { value: 1, title: "1명" },
                            { value: 2, title: "2명" },
                            { value: 3, title: "3명" },
                            { value: 4, title: "4명" },
                            { value: 5, title: "5명" },
                        ]}
                    />

                    <Input
                        label="가격"
                        name="price"
                        value={inputs.price}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="투어시작 시간"
                        name="tourStartTime"
                        value={inputs.tourStartTime}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="구매자명"
                        name="guestName"
                        value={inputs.guestName}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="구매자 전화번호"
                        name="phone"
                        value={inputs.phone}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />

                    <Input
                        label="투어종료 시간"
                        name="tourEndTime"
                        value={inputs.tourEndTime}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                    <Input
                        label="구매 코드"
                        name="purchCode"
                        value={inputs.purchCode}
                        onChange={handleChangeInputs}
                        errors={errors}
                    />
                </FormSection>
                <FormSection>
                    <SectionMultiSelect
                        multiInfo={multiInfo}
                        setMultiInfo={setMultiInfo}
                    />
                </FormSection>
            </FormLayout2>
        </Content>
    );
};

export default PurchFormInfo;
