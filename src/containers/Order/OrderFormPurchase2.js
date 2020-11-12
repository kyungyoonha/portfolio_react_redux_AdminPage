import React, { useState } from "react";
import history from "../../history";
import { validateAll, validateInfo } from "../../util/validate";

// redux
import { useDispatch } from "react-redux";
import boardActions from "../../redux/actions/boardActions";

import useInputs from "../../Hooks/useInputs";

// containers
import SectionTour from "../../containers/Order/SectionTour";
import SectionCode from "../../containers/Order/SectionCode";
// components
import FormLayout from "../../components/Form/FormLayout";
import FormSection from "../../components/Form/FormSection";
import Input from "../../components/Form/Input";
import InputDate from "../../components/Form/InputDate";
import RadioSingle from "../../components/Form/RadioSingle";
import ModalSearch from "../../components/Modal/ModalSearch";
import InputNumRange from "../../components/Form/InputNumRange";
import InputTime from "../../components/Form/InputTime";

const initialValue = {
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
};

const initialValuePurchasecode = {
    purchasedate: "",
    purchasetype: "",
    codenumber: "",
    price: "",
    purchaseuser: "",
};

//working ###
// ModalSearch
const OrderFormPurchase = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const { pathname } = history.location;
    const dispatch = useDispatch();
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
            dispatch(boardActions.update(pageId, inputs));
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

    return (
        <FormLayout
            onClickInsert={handleClickInsert}
            onClickBack={() => history.goBack()}
        >
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
                <SectionCode purchasecode={purchasecode}>
                    <ModalSearch
                        searchPath="/order/purchasecode"
                        label="구매코드검색"
                        onChangeData={handlePurchasecode}
                    />
                </SectionCode>

                <SectionTour purchasetour={purchasetour}>
                    <ModalSearch
                        searchPath="/package/tour"
                        label="관광지 추가"
                        onChangeData={handlePurchasetour}
                    />
                </SectionTour>
            </FormSection>
        </FormLayout>
    );
};

export default OrderFormPurchase;
