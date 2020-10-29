import React, { useState, useEffect } from "react";
import history from "../../../history";
import queryString from "query-string";
import useInputs from "../../../Hooks/useInputs";
import { validateAll, validateNation } from "../../../util/validate";
// redux
import { useSelector, useDispatch } from "react-redux";
import { boardAction_detail, boardAction_update } from "../../../redux/actions";

import { FormLayout, FormSection, Input } from "../../../components/Form/Form";
import { ContentBtn, ContentNav } from "../../../components/Content/Content";

const initialValue = {
    koreanname: "",
    englishname: "",
    code3: "",
    code2: "",
};

//working ###
const PackageFormNation = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const id = match.params.id;
    const type = queryString.parse(history.location.search).type;

    const dispatch = useDispatch();
    const { detail } = useSelector((state) => state.board);

    const [errors, setErrors] = useState({});
    const [inputs, setInputs, handleChangeInputs] = useInputs(
        initialValue,
        validateNation,
        setErrors
    );
    useEffect(() => {
        if (type === "insert") return;
        dispatch(boardAction_detail(pageId, id));
    }, [dispatch, pageId, type, id]);

    useEffect(() => {
        if (type === "insert") return;
        if (Object.keys(detail).length === 0) return;
        setInputs(detail);
    }, [type, setInputs, detail]);

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateNation);

        if (isValid) {
            console.log("에러 없음");

            dispatch(boardAction_update(pageId, inputs));
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

    return (
        <FormLayout>
            <ContentNav pageId={pageId}>
                <ContentBtn
                    type={type}
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>

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
            </FormSection>
        </FormLayout>
    );
};

export default PackageFormNation;
