import React from "react";
import history from "../../history";
// components
import useInputs from "../../Hooks/useInputs";
import FormLayout from "../../Layout/FormLayout";
import {
    FormSection,
    Input,
    InputRadioSingle,
    InputDate,
    InputTime,
    InputSelect,
    ModalButtonSearch,
} from "../../components";

const initialValue = {
    tourtype: "E",
    touridx: "",
    tourdays: "",
    tourstartday: "",
    tourendday: "",
    tourmember: "1",
    price: "",
    tourstarttime: "",
    userid: "",
    purchasecodeidx: "",
    purchCode: {},
    purchTour: [],
};

const URL_SEARCH_CODE = "/order/purchasecode";
const URL_SEARCH_TOUR = "/package/tour";

//working ###
const OrderFormPurchase = () => {
    const { inputs, setInputs, errors, onChange, onSubmit } = useInputs(
        initialValue
    );

    const handleChangePurchCode = (data) => {
        const { idx, ...rest } = data;
        setInputs((state) => ({
            ...state,
            purchasecodeidx: idx,
            purchCode: rest,
        }));
    };

    const handleChangePurchTour = (data) => {
        setInputs((state) => ({
            ...state,
            purchTour: [...state.purchTour, data],
        }));
    };

    const handleSubmit = () => {
        onSubmit(inputs);
    };
    return (
        <FormLayout
            onClickInsert={handleSubmit}
            onClickBack={() => history.goBack()}
        >
            <FormSection>
                <InputRadioSingle
                    label="투어 종류"
                    name="tourtype"
                    value={inputs.tourtype}
                    onChange={onChange}
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
                    onChange={onChange}
                    error={errors.touridx}
                />
                <Input
                    label="투어 일수"
                    name="tourdays"
                    value={inputs.tourdays}
                    onChange={onChange}
                    error={errors.tourdays}
                />
                <InputDate
                    label="투어 시작일"
                    name="tourstartday"
                    value={inputs.tourstartday}
                    onChange={onChange}
                    error={errors.tourstartday}
                />
                <InputDate
                    label="투어 종료일"
                    name="tourendday"
                    value={inputs.tourendday}
                    onChange={onChange}
                    error={errors.tourendday}
                />
                <Input
                    label="투어 인원수"
                    name="tourmember"
                    value={inputs.tourmember}
                    onChange={onChange}
                    error={errors.tourmember}
                />

                <Input
                    label="가격"
                    name="price"
                    value={inputs.price}
                    onChange={onChange}
                    error={errors.price}
                />
                <InputTime
                    label="투어 시작시간"
                    name="tourstarttime"
                    value={inputs.tourstarttime}
                    onChange={onChange}
                    error={errors.tourstarttime}
                />

                <Input
                    label="투어 구매자"
                    name="userid"
                    value={inputs.userid}
                    onChange={onChange}
                    error={errors.userid}
                />
            </FormSection>

            <FormSection>
                <ModalButtonSearch
                    label="구매코드검색"
                    searchPath={URL_SEARCH_CODE}
                    onChange={handleChangePurchCode}
                />
                <Input
                    label="구매코드"
                    name="idx"
                    value={inputs.purchasecodeidx || ""}
                    disabled={true}
                />
                <Input
                    label="구매일자"
                    name="purchasedate"
                    value={inputs.purchCode.purchasedate || ""}
                    disabled={true}
                />
                <InputSelect
                    label="구매방식"
                    name="purchasetype"
                    value={inputs.purchCode.purchasetype || ""}
                    disabled={true}
                    options={[
                        { value: "1", title: "직접구매" },
                        { value: "3", title: "관광지 구매" },
                    ]}
                />
                <Input
                    label="구매코드번호"
                    name="codenumber"
                    value={inputs.purchCode.codenumber || ""}
                    disabled={true}
                />
                <Input
                    label="가격"
                    name="price"
                    value={inputs.purchCode.price || ""}
                    disabled={true}
                />
                <Input
                    label="구매자id"
                    name="purchaseuser"
                    value={inputs.purchCode.purchaseuser || ""}
                    disabled={true}
                />

                <ModalButtonSearch
                    label="관광지 추가"
                    searchPath={URL_SEARCH_TOUR}
                    onChange={handleChangePurchTour}
                />

                {inputs.purchTour.map((item, idx) => (
                    <Input
                        key={item.idx}
                        label={`${idx + 1}번째 관광지명`}
                        name="tourname"
                        value={item.tourname}
                        onChange={() => {}}
                    />
                ))}

                {inputs.purchTour.length < 3 &&
                    [
                        ...new Array(3 - inputs.purchTour.length),
                    ].map((_, idx) => (
                        <Input
                            key={idx}
                            label={`${
                                inputs.purchTour.length + idx + 1
                            }번째 관광지명`}
                            disabled
                        />
                    ))}
            </FormSection>
        </FormLayout>
    );
};

export default OrderFormPurchase;
