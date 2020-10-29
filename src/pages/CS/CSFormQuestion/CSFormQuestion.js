import React, { useEffect, useState } from "react";
import history from "../../../history";
import fileAPI from "../../../util/fileAPI";
import { validateAll, validateService } from "../../../util/validate";

// 리덕스
import { useSelector, useDispatch } from "react-redux";
import { boardAction_detail } from "../../../redux/actions";

import useInputs from "../../../Hooks/useInputs";
import { ContentBtn, ContentNav } from "../../../components/Content/Content";
import {
    Input,
    Select,
    FormLayout,
    FormSection,
    Textarea,
    InputFile,
} from "../../../components/Form/Form";

const initialValue = {
    userid: "",
    email: "",
    filename: "",
    replyYN: "",
    contents: "",
    filepath: "",
};
//working ### 이메일 처리
const CSFormQuestion = ({ match }) => {
    const pageId = match.url.split("/")[2];
    const id = match.params.id;
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const { detail } = useSelector((state) => state.board);
    const [inputs, setInputs, handleChangeInputs, handleChangeFile] = useInputs(
        initialValue,
        validateService,
        setErrors
    );

    useEffect(() => {
        dispatch(boardAction_detail(pageId, id));
    }, [dispatch, pageId, id]);

    useEffect(() => {
        if (Object.keys(detail).length === 0) return;
        setInputs(detail);
    }, [setInputs, detail]);

    const handleClickInsert = () => {
        const { isValid, checkedErrors } = validateAll(inputs, validateService);

        if (isValid) {
            console.log("에러 없음");
            setInputs(initialValue);
        } else {
            setErrors(checkedErrors);
        }
    };

    return (
        <FormLayout>
            <ContentNav pageId={pageId}>
                <ContentBtn
                    type="form"
                    handleClickInsert={handleClickInsert}
                    handleClickDelete={() => history.goBack()}
                />
            </ContentNav>
            <FormSection>
                <Input
                    label="등록자"
                    name="userid"
                    value={inputs.userid}
                    onChange={handleChangeInputs}
                    disabled
                />
                <Input
                    label="수신 이메일"
                    name="email"
                    value={inputs.email}
                    onChange={handleChangeInputs}
                    disabled
                />

                <Input
                    label="첨부파일"
                    name="filename"
                    value={inputs.filename}
                    onChange={handleChangeInputs}
                >
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() =>
                            fileAPI.download(inputs.filename, inputs.filepath)
                        }
                    >
                        다운로드
                    </button>
                </Input>

                <Textarea
                    label="내용"
                    name="contents"
                    value={inputs.contents}
                    onChange={handleChangeInputs}
                    rows={15}
                    disabled
                />
            </FormSection>

            <FormSection>
                <Input
                    label="제목"
                    name="title"
                    value={inputs.title}
                    onChange={handleChangeInputs}
                    errors={errors}
                />

                <Select
                    label="공개 여부"
                    name="hiddenStatus"
                    value={inputs.hiddenStatus}
                    onChange={handleChangeInputs}
                    errors={errors}
                    options={[
                        { value: "visible", title: "공개" },
                        { value: "hidden", title: "비공개" },
                    ]}
                />

                <Input
                    label="등록자"
                    name="user"
                    value={inputs.user}
                    onChange={handleChangeInputs}
                />

                <InputFile
                    label="첨부파일"
                    name="file"
                    filename={inputs.filename}
                    handleChangeFile={handleChangeFile}
                    filetype="raw"
                />

                <Input
                    label="발신 이메일"
                    name="sendEmail"
                    value={inputs.sendEmail}
                    onChange={handleChangeInputs}
                    errors={errors}
                />

                <Textarea
                    label="내용"
                    name="sendContent"
                    value={inputs.sendContent}
                    onChange={handleChangeInputs}
                    rows={8}
                    errors={errors}
                />
            </FormSection>
        </FormLayout>
    );
};

export default CSFormQuestion;
