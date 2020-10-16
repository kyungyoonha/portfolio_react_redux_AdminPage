import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import history from "../../../history";
import queryString from "query-string";
import useInputs from "../../../Hooks/useInputs";
import { boardAction_detail, boardAction_update } from "../../../redux/actions";
import { validateAll, validateNation } from "../../../util/validate";
import { FormLayout, FormSection, Input } from "../../../components/Form/Form";
import {
    Content,
    ContentBtn,
    ContentNav,
} from "../../../components/Content/Content";

const initialValue = {
    idx: "",
    koreanname: "",
    englishname: "",
    code3: "",
    code2: "",
    regdate: "",
    reguser: "",
    moddate: "",
    moduser: "",
};

//working done;
const TourFormNation = ({ match }) => {
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
                <FormSection size="center" title="국가코드 관리">
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
        </Content>
    );
};

export default TourFormNation;
