import React, { useState } from "react";
import history from "../../../history";
import { validateAll, validateInfo } from "../../../util/validate";

import useInputs from "../../../Hooks/useInputs";
import { ContentBtn, ContentNav } from "../../../components/Content/Content";
import SectionMultiSelect from "../components/SectionMultiSelect";
import {
    Input,
    Select,
    RadioSingle,
    FormLayout,
    FormSection,
    SelectMultiCustom,
    InputNumRange,
    InputDate,
    InputTime,
    SelectMulti,
    PurchaseCode,
} from "../../../components/Form/Form";
import ModalSearch from "../../../components/Modal/ModalSearch";

const initialValue = {
    idx: "",
    tourtype: "",
    touridx: "",
    tourdays: "",
    tourstartday: "",
    tourendday: "",
    tourmember: "",
    price: "",
    tourstarttime: "",
    userid: "",
    purchasecode: "",
    regdate: "",
    reguser: "",
    moddate: "",
    moduser: "",

    multiInfo: {
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
    },
};

//working
const PurchFormInfo = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const [errors, setErrors] = useState({});
    const [purchasetour, setPurchasetour] = useState([]);
    const [purchaseCode, setPurchaseCode] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateInfo,
        setErrors
    );

    const handleChangePurchasetour = (tour) => setPurchasetour(tour);

    const handleChangePurchaseCode = (code) => setPurchaseCode(code);

    const handleChangeMultiInfo = (e, selected, seq) => {
        const { value } = e.target;
        setInputs((state) => ({
            ...state,
            multiInfo: {
                ...state.multiInfo,
                [selected]: [
                    ...state.multiInfo[selected].map((item) =>
                        item.seq === seq
                            ? {
                                  seq: item.seq,
                                  value,
                              }
                            : item
                    ),
                ],
            },
        }));
    };

    const handleAddRow = (selected) => {
        setInputs((state) => ({
            ...state,
            multiInfo: {
                ...state.multiInfo,
                [selected]: [
                    ...state.multiInfo[selected],
                    {
                        seq:
                            state.multiInfo[selected].reduce(
                                (pre, cur) => Math.max(pre, cur.seq),
                                0
                            ) + 1,
                        value: "",
                    },
                ],
            },
        }));
    };

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateInfo);

        if (isValid) {
            console.log("에러 없음");
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };
    console.log(purchasetour);
    return (
        <FormLayout>
            <ContentNav pageId={pageId}>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>
            <FormSection>
                <RadioSingle
                    label="투어 종류"
                    name="tourtype"
                    value={inputs.tourtype}
                    onChange={handleChangeInputs}
                    options={[
                        { value: "A", title: "모든 투어" },
                        { value: "T", title: "택시 투어" },
                        { value: "E", title: "기타 투어" },
                    ]}
                />
                <Input
                    label="관광지 코드"
                    name="touridx"
                    value={inputs.touridx}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="투어 일수"
                    name="tourdays"
                    value={inputs.tourdays}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <InputDate
                    label="투어 시작일"
                    name="tourstartday"
                    value={inputs.tourstartday}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <InputDate
                    label="투어 종료일"
                    name="tourendday"
                    value={inputs.tourendday}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <InputNumRange
                    value={inputs.tourmember}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="가격"
                    name="price"
                    value={inputs.price}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <InputTime
                    label="투어 시작시간"
                    name="tourstarttime"
                    value={inputs.tourstarttime}
                    onChange={handleChangeInputs}
                    errors={errors}
                />

                <Input
                    label="투어 구매자"
                    name="userid"
                    value={inputs.userid}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="구매 코드"
                    name="purchasecode"
                    value={inputs.purchasecode}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
            </FormSection>
            {/* <FormSection>
                <Input
                    label="구매 코드"
                    name="purchCode"
                    value={inputs.purchCode}
                    onChange={handleChangeInputs}
                />
                <Input
                    label="구매 일자"
                    name="purchDate"
                    value={inputs.purchDate}
                    onChange={handleChangeInputs}
                />
                <Input
                    label="구매 방식"
                    name="purchWay"
                    value={inputs.purchWay}
                    onChange={handleChangeInputs}
                />
                <Input
                    label="가격"
                    name="purchPrice"
                    value={inputs.purchPrice}
                    onChange={handleChangeInputs}
                />
                <Input
                    label="구매자 Id"
                    name="guestId"
                    value={inputs.guestId}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="이름"
                    name="guestName"
                    value={inputs.guestName}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
            </FormSection> */}
            {/* <FormSection full>
                <SelectMulti
                    purchasetour={purchasetour}
                    handleChangePurchasetour={handleChangePurchasetour}
                    // handleAddRow={handleAddRow}
                />
            </FormSection> */}
            <FormSection>
                <PurchaseCode purchaseCode={purchaseCode}>
                    <ModalSearch
                        label="구매코드검색"
                        handleChangePurchaseCode={handleChangePurchaseCode}
                    />
                </PurchaseCode>
            </FormSection>
            <FormSection full>
                <SectionMultiSelect
                    multiInfo={inputs.multiInfo}
                    handleChangeMultiInfo={handleChangeMultiInfo}
                    handleAddRow={handleAddRow}
                />
            </FormSection>
        </FormLayout>
    );
};

export default PurchFormInfo;
