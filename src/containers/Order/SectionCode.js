import React from "react";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";

const PurchaseCode = ({ purchasecode, errors = {}, children }) => {
    return (
        <React.Fragment>
            <tr>
                <td colSpan="2">{children}</td>
            </tr>
            <Input
                label="구매코드"
                name="idx"
                value={purchasecode.idx}
                errors={errors}
                disabled={true}
            />
            <Input
                label="구매일자"
                name="purchasedate"
                value={purchasecode.purchasedate}
                errors={errors}
                disabled={true}
            />
            <Select
                label="구매방식"
                name="purchasetype"
                value={purchasecode.purchasetype}
                errors={errors}
                disabled={true}
                options={[
                    { value: "1", title: "직접구매" },
                    { value: "3", title: "관광지 구매" },
                ]}
            />
            <Input
                label="구매코드번호"
                name="codenumber"
                value={purchasecode.codenumber}
                errors={errors}
                disabled={true}
            />
            <Input
                label="가격"
                name="price"
                value={purchasecode.price}
                errors={errors}
                disabled={true}
            />
            <Input
                label="구매자id"
                name="purchaseuser"
                value={purchasecode.purchaseuser}
                errors={errors}
                disabled={true}
            />
        </React.Fragment>
    );
};

export default PurchaseCode;
