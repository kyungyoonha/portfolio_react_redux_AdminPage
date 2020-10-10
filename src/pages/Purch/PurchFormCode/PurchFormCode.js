import React, { useState } from "react";
import history from "../../../history";
import {
    Input,
    Select,
    RatioSingle,
    FormLayout,
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
import { validateAll, validateCode } from "../../../util/validateMember";

const initialValue = {
    tourName: "",
    countryCtg: "KOREA",
    country: "KOREA",
    state: "",
    city: "",
    tourCtg: "normal",
    tourDayCntCheck: "one",
    tourDayCnt: "1",
    guestNumMin: "1",
    guestNumMax: "",
    price: "",
    tourStartTime: "",
    guestName: "",
    phone: "",
    tourEndTime: "",
    purchCode: "",
};

const initialValueMulti = {
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
};
//working done
const PurchFormInfo = ({ match }) => {
    const id = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [inputs, setInputs] = useState(initialValue);
    const [multiInfo, setMultiInfo] = useState(initialValueMulti);

    const handleChangeInputs = (e) => {
        const { name, value } = e.target;
        const error = validateCode(name, value);

        setInputs((state) => ({ ...state, [name]: value }));
        setErrors((state) => ({ ...state, [name]: error }));

        if (name === "tourDayCntCheck") {
            setInputs((state) => ({
                ...state,
                tourDayCnt: value === "one" ? "1" : "",
            }));
        }
        // 국적선택 시
        else if (name === "countryCtg") {
            setInputs((state) => ({
                ...state,
                country: value === "KOREA" ? "KOREA" : "",
            }));
        }
    };

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateCode);

        if (isValid) {
            console.log("에러 없음");
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

    return (
        <Content>
            <ContentNav id={id}>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>

            <FormLayout>
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
                    <Select
                        label="(국가 선택)"
                        name="country"
                        value={inputs.country}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={optionsCountry(inputs.countryCtg)}
                        disabled={inputs.countryCtg === "KOREA"}
                    />
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
                            { value: "normal", title: "일반 투어" },
                        ]}
                    />

                    <RatioSingle
                        label="투어 일수"
                        name="tourDayCntCheck"
                        value={inputs.tourDayCntCheck}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "one", title: "당일" },
                            { value: "range", title: "기간설정" },
                        ]}
                    />

                    <Input
                        label="(기간 설정)"
                        name="tourDayCnt"
                        value={inputs.tourDayCnt}
                        onChange={handleChangeInputs}
                        errors={errors}
                        disabled={inputs.tourDayCntCheck === "one"}
                    />

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
                        label="투어시작 시간"
                        name="tourStartTime"
                        value={inputs.tourStartTime}
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
            </FormLayout>
        </Content>
    );
};

export default PurchFormInfo;
