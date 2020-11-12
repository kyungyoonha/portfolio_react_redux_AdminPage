import React, { useState, useEffect } from "react";
import history from "../../history";

// redux
import { useDispatch, useSelector } from "react-redux";
import formActions from "../../redux/actions/formActions";
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
import ReactSelect from "../../components/Form/ReactSelect";

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
    const dispatch = useDispatch();
    const [purchCode, setPurchCode] = useState(initialValuePurchasecode);
    const [purchTour, setPurchTour] = useState([]);
    let { inputs, errors } = useSelector((state) => state.form);

    useEffect(() => {
        dispatch(formActions.init(initialValue));
        return () => dispatch(formActions.initialize());
    }, [dispatch]);

    const handleChangeInputs = (e) => {
        dispatch(formActions.changeValue(e));
    };

    const handleClickInsert = (e) => {
        e.preventDefault();
        if (!inputs.license) {
            alert("면허증 이미지를 추가해주세요.");
            return;
        }
        const fileList = ["driverpic", "car", "license"];
        dispatch(formActions.submit(inputs, fileList));
    };

    const handleChangePurchCode = (e) => {
        setPurchCode(e.target.idx);
    };

    const handleChangePurchTour = (data) => {
        setPurchTour((state) => [...state, data]);
    };

    if (!Object.keys(inputs).length) {
        inputs = initialValue;
    }

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
                <SectionCode purchasecode={purchCode}>
                    <ModalSearch
                        searchPath="/order/purchasecode"
                        label="구매코드검색"
                        onChangeData={handleChangePurchCode}
                    />
                </SectionCode>

                <SectionTour purchasetour={purchTour}>
                    <ModalSearch
                        searchPath="/package/tour"
                        label="관광지 추가"
                        onChangeData={handleChangePurchTour}
                    />
                </SectionTour>
            </FormSection>
        </FormLayout>
    );
};

export default OrderFormPurchase;