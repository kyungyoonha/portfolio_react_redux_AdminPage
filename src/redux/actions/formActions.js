import {
    FORM_INIT,
    FORM_CHANGE,
    BOARD_INSERT,
    BOARD_UPDATE,
    FORM_INITIALIZE,
    FORM_ERRORS,
} from "../types";
import { validate, validateAll222 } from "../../util/validate";
import api from "../../services";
import history from "../../history";
import { toast } from "react-toastify";
import { changeInputToFormData } from "../../util/helperFunc";
import queryString from "query-string";

export const formAction_init = (initialValue) => async (dispatch, getState) => {
    try {
        const { id, type } = queryString.parse(history.location.search);
        const apiurl = history.location.pathname.split("/form")[0];
        //const prevApiurl = getState().form.apiurl;

        let inputs = { ...initialValue };
        if (id) {
            const res = await api.boardAPI.getData(`${apiurl}/${id}`);
            inputs = res;
        }

        if (type === "copy") {
            delete inputs.idx;
        }

        dispatch({
            type: FORM_INIT,
            payload: {
                apiurl,
                inputs,
                errors: {},
            },
        });
    } catch (e) {
        toast.error(e.response.data.error);
    }
};

export const formAction_changeValue = (e) => async (dispatch, getState) => {
    let { apiurl, inputs } = getState().form;
    const pageId = apiurl.split("/")[2];
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
        inputs[name] = { ...inputs[name], [value]: checked };
    } else if (type === "file") {
        inputs[name] = files[0];
    } else {
        inputs[name] = value;

        if (name === "nationtype") {
            inputs.nationcodeidx = value === "1" ? "1" : "";
        } else if (name === "tourDayCntCheck") {
            inputs.tourDayCnt = value === "one" ? "1" : "";
        }
    }

    const errorMessage = validate(pageId, name, value);

    dispatch({ type: FORM_CHANGE, payload: inputs });
    dispatch({ type: FORM_ERRORS, payload: { [name]: errorMessage } });
};

// 폼 제출시
export const formAction_submit = (fileList = [], multi = false) => async (
    dispatch,
    getState
) => {
    try {
        const { apiurl, inputs } = getState().form;
        const { isValid, checkedErrors } = validateAll222(apiurl, inputs);

        if (!isValid) {
            dispatch({ type: FORM_ERRORS, payload: checkedErrors });
            return;
        }

        // image or audio file
        const sendData = fileList.length
            ? changeInputToFormData(inputs, fileList, multi)
            : inputs;

        // for (var key of sendData.entries()) {
        //     console.log(key[0] + ", " + key[1]);
        // }

        const query = queryString.parse(window.location.search).type;
        console.log(query);

        let res = !inputs.idx
            ? await api.boardAPI.insertData(apiurl, sendData)
            : await api.boardAPI.updateData(apiurl, sendData);

        let type = !inputs.idx ? BOARD_INSERT : BOARD_UPDATE;

        // dispatch({ type, payload: res.data });
        // history.goBack();
    } catch (e) {
        toast.error(e.response.data.error);
    }
};

export const formAction_initialize = () => {
    return {
        type: FORM_INITIALIZE,
    };
};

export const formAction_errors = (errors) => {
    return {
        type: FORM_ERRORS,
        payload: errors,
    };
};
