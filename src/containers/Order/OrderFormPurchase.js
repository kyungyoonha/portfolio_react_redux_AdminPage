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
//import InputNumRange from "../../components/Form/InputNumRange";
import InputTime from "../../components/Form/InputTime";

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
};

const initialPurchCode = {
    idx: "",
    purchasedate: "",
    purchasetype: "",
    codenumber: "",
    price: "",
    purchaseuser: "",
};
//working ###
// ModalSearch
const OrderFormPurchase = () => {
    const dispatch = useDispatch();
    const [purchCode, setPurchCode] = useState(initialPurchCode);
    const [purchTour, setPurchTour] = useState([]);
    let { inputs, errors } = useSelector((state) => state.form);

    useEffect(() => {
        dispatch(formActions.init(initialValue));
        return () => dispatch(formActions.initialize());
    }, [dispatch]);

    const handleChangeInputs = (e) => {
        dispatch(formActions.changeValue(e));
    };

    const handleChangePurchCode = (data) => {
        setPurchCode(data);
        dispatch(
            formActions.changeValue({
                target: {
                    name: "purchasecodeidx",
                    value: data.idx,
                },
            })
        );
    };

    const handleChangePurchTour = (data) => {
        setPurchTour((state) => [...state, data]);
    };

    const handleClickInsert = async (e) => {
        e.preventDefault();

        const resPurchase = await dispatch(formActions.submit(inputs));
        if (resPurchase?.data) {
            console.log("???", resPurchase.data);
            const purchaseidx = resPurchase.data.idx;

            formActions.submitPurchaseTour(purchaseidx, purchTour);
        }
    };

    if (!Object.keys(inputs).length) {
        inputs = initialValue;
    }
    console.log(purchTour);
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
                    errors={errors}
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
                <Input
                    label="투어 인원수"
                    name="tourmember"
                    value={inputs.tourmember}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                {/* <InputNumRange
                    value={inputs.tourmember}
                    onChange={handleChangeInputs}
                    errors={errors}
                /> */}
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
                    value={inputs.purchasecodeidx}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
            </FormSection>

            <FormSection>
                <SectionCode
                    label="구매코드검색"
                    searchPath="/order/purchasecode"
                    data={purchCode}
                    onChange={handleChangePurchCode}
                />

                <SectionTour
                    label="관광지 추가"
                    searchPath="/package/tour"
                    onChange={handleChangePurchTour}
                    data={purchTour}
                />
            </FormSection>
        </FormLayout>
    );
};

export default OrderFormPurchase;
