import React, { useState } from "react";
import history from "../../../history";
import { validateAll, validateCode } from "../../../util/validate";
import useInputs from "../../../Hooks/useInputs";
import { ContentBtn, ContentNav } from "../../../components/Content/Content";

// redux
import { useDispatch, useSelector } from "react-redux";
import { boardAction_update } from "../../../redux/actions";

import {
    Input,
    Select,
    FormLayout,
    FormSection,
    InputDate,
} from "../../../components/Form/Form";
const initialValue = {
    // idx: "",
    purchasedate: "",
    purchasetype: "",
    codenumber: "",
    price: "",
    purchaseuser: "",
    // regdate: "",
    // reguser: "",
    // moddate: "",
    // moduser: "",
};

//working
const OrderFormPurchaseCode = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.user);
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateCode,
        setErrors
    );

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateCode);

        if (isValid) {
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
            <FormSection center full title="구매 코드">
                <InputDate
                    label="생년월일"
                    name="purchasedate"
                    value={inputs.purchasedate}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Select
                    label="구매방식"
                    name="purchasetype"
                    value={inputs.purchasetype}
                    onChange={handleChangeInputs}
                    errors={errors}
                    options={[
                        { value: "1", title: "직접구매" },
                        { value: "3", title: "관광지 구매" },
                    ]}
                />
                <Input
                    label="구매코드번호"
                    name="codenumber"
                    value={inputs.codenumber}
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
                <Input
                    label="구매자id"
                    name="purchaseuser"
                    value={inputs.purchaseuser}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
            </FormSection>
        </FormLayout>
    );
};

export default OrderFormPurchaseCode;
