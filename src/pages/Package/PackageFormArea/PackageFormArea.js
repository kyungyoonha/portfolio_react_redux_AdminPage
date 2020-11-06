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

import {
    InputFileWithImage,
    FormLayout,
    FormSection,
    Input,
    SelectAPI,
} from "../../../components/Form/Form";

const initialValue = {
    nationcodeidx: "",
    sidocode: "",
    sidoname: "",
    areacode: "",
    areaname: "",
    mainpic: "",
    mainpicname: "",
    mainpicpath: "",
};

//working ###
const PackageFormArea = () => {
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
        if (!inputs.mainpic) {
            alert("프로필 이미지를 추가해주세요.");
            return;
        }

        const fileList = ["mainpic"];
        dispatch(
            formAction_submit(
                {
                    ...inputs,
                    mainpicYN: "Y",
                },
                fileList
            )
        );
    };

    if (!Object.keys(inputs).length) {
        inputs = initialValue;
    }
    return (
        <FormLayout
            onClickInsert={handleClickInsert}
            onClickBack={() => history.goBack()}
        >
            <FormSection center title="지역코드 추가">
                <SelectAPI
                    label="국가 코드"
                    searchId="nationcode"
                    value={inputs.nationcodeidx}
                    searchItems={["koreanname", "code2"]}
                    onChange={handleChangeInputs}
                    disabled={inputs.nationtype === "1"}
                    error={errors["nationcodeidx"]}
                />
                <Input
                    label="시도 코드"
                    name="sidocode"
                    value={inputs.sidocode}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="시도명"
                    name="sidoname"
                    value={inputs.sidoname}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="지역 코드"
                    name="areacode"
                    value={inputs.areacode}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <Input
                    label="지역명"
                    name="areaname"
                    value={inputs.areaname}
                    onChange={handleChangeInputs}
                    errors={errors}
                />
                <InputFileWithImage
                    label="대표 사진"
                    name="mainpic"
                    value={inputs.mainpic}
                    filename={inputs.mainpicname}
                    filepath={inputs.mainpicpath}
                    onChange={handleChangeInputs}
                    filetype="image"
                />
            </FormSection>
        </FormLayout>
    );
};

export default PackageFormArea;
