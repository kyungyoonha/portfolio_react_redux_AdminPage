import React, { useEffect } from "react";
import history from "../../../history";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
    formAction_changeValue,
    formAction_init,
    formAction_initialize,
    formAction_submit,
} from "../../../redux/actions/formActions";

import { FormLayout, FormSection, Input } from "../../../components/Form/Form";

const initialValue = {
    koreanname: "",
    englishname: "",
    code3: "",
    code2: "",
};

//working ###
const PackageFormNation = () => {
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
            <FormSection center title="국가코드 관리">
                <Input
                    label="국가한국이름"
                    name="koreanname"
                    value={inputs.koreanname}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="국가영어이름"
                    name="englishname"
                    value={inputs.englishname}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="국가코드 3자리"
                    name="code3"
                    value={inputs.code3}
                    onChange={handleChangeInputs}
                    errors={errors}
                />

                <Input
                    label="국가코드 2자리"
                    name="code2"
                    value={inputs.code2}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <tr style={{ height: "200px" }}></tr>
            </FormSection>
        </FormLayout>
    );
};

export default PackageFormNation;
