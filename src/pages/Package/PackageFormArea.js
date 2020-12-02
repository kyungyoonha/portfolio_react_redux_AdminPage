import React from "react";
import history from "../../history";
import useInputs from "../../Hooks/useInputs";
import FormLayout from "../../Layout/FormLayout";
import {
    FormSection,
    Input,
    InputSelectAPI,
    InputFileWithImage,
} from "../../components";

const initialValue = {
    nationcodeidx: "",
    sidocode: "",
    sidoname: "",
    areacode: "",
    areaname: "",
    mainpicYN: "Y",
    mainpic: "",
    mainpicname: "",
    mainpicpath: "",
};

//working ###
const PackageFormArea = () => {
    const { inputs, errors, onChange, onSubmit } = useInputs(initialValue);

    const handleSubmit = () => {
        const fileList = ["mainpic"];
        onSubmit(inputs, fileList);
    };

    return (
        <FormLayout
            onClickInsert={handleSubmit}
            onClickBack={() => history.goBack()}
        >
            <FormSection center title="지역코드 추가">
                <InputSelectAPI
                    label="국가 코드"
                    searchId="nationcode"
                    value={inputs.nationcodeidx}
                    searchItems={["koreanname", "code2"]}
                    onChange={onChange}
                    disabled={inputs.nationtype === "1"}
                    error={errors["nationcodeidx"]}
                />
                <Input
                    label="시도 코드"
                    name="sidocode"
                    value={inputs.sidocode}
                    onChange={onChange}
                    error={errors.sidocode}
                />
                <Input
                    label="시도명"
                    name="sidoname"
                    value={inputs.sidoname}
                    onChange={onChange}
                    error={errors.sidoname}
                />
                <Input
                    label="지역 코드"
                    name="areacode"
                    value={inputs.areacode}
                    onChange={onChange}
                    error={errors.areacode}
                />
                <Input
                    label="지역명"
                    name="areaname"
                    value={inputs.areaname}
                    onChange={onChange}
                    error={errors.areaname}
                />
                <InputFileWithImage
                    label="대표 사진"
                    name="mainpic"
                    value={inputs.mainpic.length ? inputs.mainpic[0].file : ""}
                    filename={inputs.mainpicname}
                    filepath={inputs.mainpicpath}
                    onChange={onChange}
                    filetype="image"
                />
            </FormSection>
        </FormLayout>
    );
};

export default PackageFormArea;
