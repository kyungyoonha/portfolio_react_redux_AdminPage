import React, { useEffect } from "react";
import history from "../../history";

// redux
import { useDispatch, useSelector } from "react-redux";
import formActions from "../../redux/actions/formActions";
// components
import FormLayout from "../../components/Form/FormLayout";
import FormSection from "../../components/Form/FormSection";
import Input from "../../components/Form/Input";
import SelectAPI from "../../components/Form/SelectAPI";
import InputFileWithImage from "../../components/Form/InputFileWithImage";

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
        dispatch(formActions.init(initialValue));
        return () => dispatch(formActions.initialize());
    }, [dispatch]);

    const handleChangeInputs = (e) => {
        dispatch(formActions.changeValue(e));
    };

    const handleClickInsert = (e) => {
        e.preventDefault();
        if (!inputs.mainpic) {
            alert("프로필 이미지를 추가해주세요.");
            return;
        }

        const fileList = ["mainpic"];
        dispatch(
            formActions.submit(
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
