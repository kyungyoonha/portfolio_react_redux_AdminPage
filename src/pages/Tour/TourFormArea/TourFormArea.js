import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import history from "../../../history";
import queryString from "query-string";
import { optionsCountry } from "../../../util/options";

// redux
import { boardAction_detail, boardAction_update } from "../../../redux/actions";
import { validateAll, validateArea } from "../../../util/validate";

import useInputs from "../../../Hooks/useInputs";
import { ContentBtn, ContentNav } from "../../../components/Content/Content";
import {
    File,
    FormLayout,
    FormSection,
    Input,
    RadioSingle,
    Select,
    SelectAPI,
} from "../../../components/Form/Form";

const initialValue = {
    idx: "",
    nationcodeidx: "",
    sidocode: "",
    sidoname: "",
    areacode: "",
    areaname: "",
    mainpicYN: "N",
    mainpicname: "",
    mainpicpath: "",
    regdate: "",
    reguser: "",
    moddate: "",
    moduser: "",
};

//working ###
const TourFormArea = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const id = match.params.id;
    const type = queryString.parse(history.location.search).type;

    const dispatch = useDispatch();
    const { detail } = useSelector((state) => state.board);
    const { name } = useSelector((state) => state.user);
    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs, handleChangeFile] = useInputs(
        initialValue,
        validateArea,
        setErrors
    );

    useEffect(() => {
        if (id === "new") return;
        dispatch(boardAction_detail(pageId, id));
    }, [dispatch, pageId, id]);

    useEffect(() => {
        if (id === "new") return;
        if (Object.keys(detail).length === 0) return;
        setInputs(detail);
    }, [id, setInputs, detail]);

    useEffect(() => {
        let mainpicYN = inputs.mainpicpath ? "Y" : "N";

        setInputs((state) => ({
            ...state,
            mainpicYN,
        }));
    }, [setInputs, inputs.mainpicpath]);

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateArea);

        if (!inputs.mainpicpath) {
            alert("메인 사진을 업로드해주세요.");
            return;
        }

        if (isValid) {
            console.log("에러 없음");
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
                    type={id === "new" ? "form" : type}
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>
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
                <RadioSingle
                    label="대표사진 유무"
                    name="mainpicYN"
                    value={inputs.mainpicYN}
                    onChange={handleChangeInputs}
                    disabled={true}
                    options={[
                        { value: "Y", title: "있음" },
                        { value: "N", title: "없음" },
                    ]}
                />
                <File
                    label="대표 사진"
                    name="mainpic"
                    filename={inputs.mainpicname}
                    filepath={inputs.mainpicpath}
                    handleChangeFile={handleChangeFile}
                    filetype="image"
                />
            </FormSection>
        </FormLayout>
    );
};

export default TourFormArea;
