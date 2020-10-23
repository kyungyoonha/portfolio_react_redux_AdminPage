import React, { useState } from "react";
import history from "../../../history";
import { validateAll, validateInfo } from "../../../util/validate";

// redux
import { useSelector, useDispatch } from "react-redux";
import { boardAction_update } from "../../../redux/actions";

import useInputs from "../../../Hooks/useInputs";
import ModalSearch from "../../../components/Modal/ModalSearch";
import { ContentBtn, ContentNav } from "../../../components/Content/Content";
import {
    Input,
    RadioSingle,
    FormLayout,
    FormSection,
    InputNumRange,
    InputDate,
    InputTime,
    Purchasetour,
    Purchasecode,
} from "../../../components/Form/Form";

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
};

const initialValuePurchasecode = {
    idx: "",
    purchasedate: "",
    purchasetype: "",
    codenumber: "",
    price: "",
    purchaseuser: "",
    regdate: "",
    reguser: "",
    moddate: "",
    moduser: "",
};

//working ###
const PurchFormInfo = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.user);
    const [errors, setErrors] = useState({});
    const [purchasetour, setPurchasetour] = useState([]);
    const [purchasecode, setPurchasecode] = useState(initialValuePurchasecode);
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateInfo,
        setErrors
    );

    const handlePurchasecode = (code) => setPurchasecode(code);
    const handlePurchasetour = (tour) =>
        setPurchasetour((state) => [...state, tour]);
    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateInfo);

        if (isValid) {
            console.log("에러 없음");
            dispatch(
                boardAction_update(pageId, {
                    ...inputs,
                    regdate: new Date().toISOString(),
                    reguser: name,
                })
            );
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

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

            <FormSection>
                <Purchasecode purchasecode={purchasecode}>
                    <ModalSearch
                        searchId="purchasecode"
                        label="구매코드검색"
                        onChangeData={handlePurchasecode}
                    />
                </Purchasecode>
            </FormSection>
            <FormSection full>
                <Purchasetour purchasetour={purchasetour}>
                    <ModalSearch
                        searchId="tourpackage"
                        label="관광지 추가"
                        onChangeData={handlePurchasetour}
                    />
                </Purchasetour>
            </FormSection>
        </FormLayout>
    );
};

export default PurchFormInfo;
