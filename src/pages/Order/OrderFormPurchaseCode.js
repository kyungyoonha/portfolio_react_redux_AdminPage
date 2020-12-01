import React from "react";
import history from "../../history";
import randomKey from "../../utils/randomKey";
import useInput222 from "../../Hooks/useInput222";
import FormLayout from "../../Layout/FormLayout";
import { FormSection, Input, InputDate, InputSelect } from "../../components";

const initialValue = {
    purchasedate: "",
    purchasetype: "",
    codenumber: randomKey(6),
    price: "",
    purchaseuser: "",
};

//working
const OrderFormPurchaseCode = () => {
    const { inputs, errors, onChange, onSubmit } = useInput222(initialValue);

    const handleSubmit = () => {
        onSubmit(inputs);
    };
    return (
        <FormLayout
            onClickInsert={handleSubmit}
            onClickBack={() => history.goBack()}
        >
            <FormSection center full title="구매 코드">
                <InputDate
                    label="생년월일"
                    name="purchasedate"
                    value={inputs.purchasedate}
                    onChange={onChange}
                    error={errors.purchasedate}
                />
                <InputSelect
                    label="구매방식"
                    name="purchasetype"
                    value={inputs.purchasetype}
                    onChange={onChange}
                    error={errors.purchasetype}
                    options={[
                        { value: "1", title: "직접구매" },
                        { value: "3", title: "관광지 구매" },
                    ]}
                />
                <Input
                    label="구매코드번호"
                    name="codenumber"
                    value={inputs.codenumber}
                    onChange={onChange}
                    error={errors.codenumber}
                    disabled={true}
                />
                <Input
                    label="가격"
                    name="price"
                    value={inputs.price}
                    onChange={onChange}
                    error={errors.price}
                />
                <Input
                    label="구매자id"
                    name="purchaseuser"
                    value={inputs.purchaseuser}
                    onChange={onChange}
                    error={errors.purchaseuser}
                />
            </FormSection>
        </FormLayout>
    );
};

export default OrderFormPurchaseCode;
