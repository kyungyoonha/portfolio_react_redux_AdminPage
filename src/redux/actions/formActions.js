import {
    FORM_INIT,
    FORM_CHANGE,
    BOARD_INSERT,
    BOARD_UPDATE,
    FORM_INITIALIZE,
    FORM_ERRORS,
} from "../types";
import { validate, validateAll222 } from "../../util/validate";
import fileAPI from "../../util/fileAPI";
import api from "../../services";

export const formAction_init = (match, initialValue) => async (dispatch) => {
    const urlSplit = match.url.split("/");
    const apiurl = `/${urlSplit[1]}/${urlSplit[2]}`;

    let inputs = initialValue;
    //const id = match.params.id;

    // if (id) {
    //     const res = await axios.get(`${apiurl}/id`);
    //     inputs = res.data;
    // }

    dispatch({
        type: FORM_INIT,
        payload: {
            apiurl,
            inputs,
            errors: {},
        },
    });
};

export const formAction_changeValue = (e) => async (dispatch, getState) => {
    let { apiurl, inputs } = getState().form;
    const pageId = apiurl.split("/")[2];
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
        inputs[name] = { ...inputs[name], [value]: checked };
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

export const formAction_upload = (e, type) => async (dispatch, getState) => {
    // 체크 ###
    // 파일 올릴때 기존파일 초기화
    let { inputs } = getState().form;
    const { name, files } = e.target;
    const file = e.target.files[0];
    inputs[name + "name"] = "";
    inputs[name + "path"] = "";
    dispatch({ type: FORM_CHANGE, payload: inputs });

    try {
        const res = await fileAPI.upload(
            type === "audio" ? "video" : type,
            file
        );
        inputs[name + "name"] = files[0].name;
        inputs[name + "path"] = res;
    } catch (e) {
        console.error(e);
    }

    dispatch({ type: FORM_CHANGE, payload: inputs });
};

// 폼 제출시
export const formAction_submit = () => async (dispatch, getState) => {
    try {
        let { apiurl, inputs } = getState().form;
        const pageId = apiurl.split("/")[2];
        const { isValid, checkedErrors } = validateAll222(pageId, inputs);
        let res, type;

        if (isValid) {
            if (!inputs.idx) {
                res = await api.boardAPI.insertData(apiurl, inputs);
                type = BOARD_INSERT;
            } else {
                res = await api.boardAPI.updateData(apiurl, inputs);
                type = BOARD_UPDATE;
            }
            dispatch({ type, payload: res.data });
        } else {
            dispatch({ type: FORM_ERRORS, payload: checkedErrors });
        }
    } catch (e) {
        //console.log(e.response.data.);
        dispatch({ type: FORM_ERRORS, payload: e.response.data.errors });
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
