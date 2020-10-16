import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import history from "../../../history";
import queryString from "query-string";
import useInputs from "../../../Hooks/useInputs";
import { boardAction_detail, boardAction_update } from "../../../redux/actions";
import { validateAll, validateNation } from "../../../util/validate";
import {
    FileSingle,
    FileSingle2,
    FormLayout,
    FormSection,
    Input,
    RatioSingle,
    Select,
} from "../../../components/Form/Form";
import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";
import { optionsCountry } from "../../../util/options";
import uploadCloudinary from "../../../util/uploadCloudinary";

const initialValue = {
    idx: "",
    nationidx: "",
    sidocode: "",
    sidoname: "",
    areacode: "",
    areaname: "",
    mainpicYN: "",
    mainpicfilename: "",
    mainpicpath: "",
    // regdate: "",
    // reguser: "",
    // moddate: "",
    // moduser: "",
};

//working done;
const TourFormArea = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const id = match.params.id;
    const type = queryString.parse(history.location.search).type;

    const dispatch = useDispatch();
    const { detail } = useSelector((state) => state.board);
    const { name } = useSelector((state) => state.user);

    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateNation,
        setErrors
    );

    useEffect(() => {
        if (id === "new") return;
        dispatch(boardAction_detail(pageId, id));
    }, [dispatch, pageId, id]);

    useEffect(() => {
        if (id === "new") return;
        setInputs(detail);
    }, [id, setInputs, detail]);

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateNation);

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

    const handleChangeFile = async (e) => {
        const res = await uploadCloudinary("image", e.target.files[0]);
        console.log(res);
    };

    return (
        <Content>
            <ContentNav pageId={pageId}>
                <ContentBtn
                    type={id === "new" ? "form" : type}
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>

            <FormLayout>
                <FormSection>
                    <Select
                        label="국가 코드"
                        name="nationidx"
                        value={inputs.nationidx}
                        onChange={handleChangeInputs}
                        errors={errors}
                        options={optionsCountry(inputs.nationidx)}
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
                    <RatioSingle
                        label="대표사진 유무"
                        name="mainpicYN"
                        value={inputs.mainpicYN}
                        onChange={handleChangeInputs}
                        options={[
                            { value: "Y", title: "있음" },
                            { value: "N", title: "없음" },
                        ]}
                    />
                </FormSection>
                <FormSection>
                    {/* <FileSingle
                        label="기사 사진"
                        name="profile"
                        file={files.profile}
                        onChange={handleChangeFile}
                    /> */}
                    <FileSingle2
                        label="대표 사진"
                        name="mainpickpath"
                        filename={inputs.filename}
                        path={inputs.mainpicpath}
                        handleChangeFile={handleChangeFile}
                    />
                </FormSection>
            </FormLayout>
        </Content>
    );
};

export default TourFormArea;
