import React, { useEffect } from "react";
import history from "../../history";
import randomKey from "../../util/randomKey";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
    formAction_changeValue,
    formAction_init,
    formAction_initialize,
    formAction_submit,
} from "../../redux/actions/formActions";

import {
    Input,
    Select,
    FormLayout,
    FormSection,
    InputDate,
} from "../../components/Form/Form";

const initialValue = {
    purchasedate: "",
    purchasetype: "",
    codenumber: randomKey(6),
    price: "",
    purchaseuser: "",
};

//working
const OrderFormPurchaseCode = () => {
    const dispatch = useDispatch();
    let { inputs, errors } = useSelector((state) => state.form);

    useEffect(() => {
        dispatch(formAction_init(initialValue));
        return () => dispatch(formAction_initialize());
    }, [dispatch]);

    const handleChangeInputs = (e) => {
        dispatch(formAction_changeValue(e));
    };

    const handleClickInsert = (e) => {
        e.preventDefault();
        dispatch(formAction_submit(inputs));
    };

    if (!Object.keys(inputs).length) {
        inputs = initialValue;
    }

    return (
        <FormLayout
            onClickInsert={handleClickInsert}
            onClickBack={() => history.goBack()}
        >
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
                    disabled={true}
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
