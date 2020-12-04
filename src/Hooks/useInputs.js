import { useState, useEffect } from "react";
import { validate, validateAll } from "../utils/validate";
import { changeInputToFormData222 } from "../utils/helperFunc";
import { toast } from "react-toastify";
import history from "../history";
import api from "../services/api";
import queryString from "query-string";

export default (initialValue) => {
    const [inputs, setInputs] = useState(initialValue);
    const [errors, setErrors] = useState({});

    const pathname = history.location.pathname;
    const pageCtg = pathname.split("/")[1];
    const pageId = pathname.split("/")[2];
    const { id, type: queryType } = queryString.parse(history.location.search);

    if (id) {
        useEffect(() => {
            const getData = async () => {
                const res = await api.get(`/${pageCtg}/${pageId}/${id}`);
                setInputs(res.data);
            };
            getData();
        }, [pageCtg, pageId, id]);
    }

    if (queryType === "copy") {
        delete inputs.idx;
    }

    const onChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === "checkbox") {
            console.log({ name, value, type, checked });
            setInputs((state) => ({
                ...state,
                [name]: {
                    ...state[name],
                    [value]: checked,
                },
            }));
        } else if (type === "file") {
            setInputs((state) => ({ ...state, [name]: [{ file: files[0] }] }));
        } else {
            setInputs((state) => ({ ...state, [name]: value }));

            if (name === "nationtype") {
                inputs.nationcodeidx = value === "1" ? "1" : "";
            } else if (name === "tourDayCntCheck") {
                inputs.tourDayCnt = value === "one" ? "1" : "";
            }
        }

        const error = validate(pageId, name, value);
        setErrors((state) => ({ ...state, [name]: error }));
    };

    const onSubmit = async (data, fileList = []) => {
        try {
            const { isValid, checkedErrors } = validateAll(pageId, data);

            if (!isValid) {
                return setErrors(checkedErrors);
            }

            const sendData = fileList.length
                ? changeInputToFormData222(data, fileList)
                : data;

            let pathadd = data.idx ? "update" : "insert";
            console.log(pathadd, pageCtg, pageId);
            const res = await api.post(
                `/${pageCtg}/${pageId}/${pathadd}`,
                sendData
            );
            if (res.status === 200) {
                toast.success("저장 성공");
                history.goBack();
            }
        } catch (e) {
            console.log(e);
            e.response && toast.error(e.response.data.error);
            return;
        }
    };

    return { inputs, setInputs, errors, setErrors, onChange, onSubmit };
};
