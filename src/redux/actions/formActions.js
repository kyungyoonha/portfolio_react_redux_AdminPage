import {
    FORM_INIT,
    FORM_CHANGE,
    // BOARD_INSERT,
    // BOARD_UPDATE,
    FORM_INITIALIZE,
    FORM_ERRORS,
} from "../types";
import { validate, validateAll } from "../../utils/validate";
import api from "../../services/api";
import history from "../../history";
import { toast } from "react-toastify";
import { changeInputToFormData } from "../../utils/helperFunc";
import queryString from "query-string";

const init = (initialValue) => async (dispatch, getState) => {
    try {
        const { id, type } = queryString.parse(history.location.search);
        const apiurl = history.location.pathname.split("/form")[0];

        let inputs = { ...initialValue };
        if (id) {
            const res = await api.get(`${apiurl}/${id}`);
            inputs = res.data;
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

const changeValue = (e) => async (dispatch, getState) => {
    let { apiurl, inputs } = getState().form;
    const pageId = apiurl.split("/")[2];
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
        inputs[name] = { ...inputs[name], [value]: checked };
    } else if (type === "file") {
        inputs[name] = files;
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
const submit = (data, fileList = [], goBack = true) => async (
    dispatch,
    getState
) => {
    try {
        const { apiurl } = getState().form;
        const pageId = apiurl.split("/")[2];
        console.log(pageId);
        const { isValid, checkedErrors } = validateAll(pageId, data);
        if (!isValid) {
            dispatch({ type: FORM_ERRORS, payload: checkedErrors });
            return;
        }

        // image or audio file
        const sendData = fileList.length
            ? changeInputToFormData(data, fileList)
            : data;
        // for (var key of sendData.entries()) {
        //     console.log(key[0] + ", " + key[1]);
        // }
        let pathadd = data.idx ? "update" : "insert";
        let res = await api.post(`${apiurl}/${pathadd}`, sendData);
        // dispatch({
        //     type: inputs.idx ? BOARD_UPDATE : BOARD_INSERT,
        //     payload: res.data,
        // });
        // history.goBack();
        console.log(res);
        return res;
    } catch (e) {
        console.log(e);
        e.response && toast.error(e.response.data.error);
        return;
    }
};

const submitAddData = (touridx, dataList, pathname, fileList) => {
    try {
        dataList.forEach(async (data) => {
            data.touridx = touridx;
            let sendData = changeInputToFormData(data, fileList);
            let pathadd = data.idx ? "update" : "insert";
            await api.post(`/package${pathname}/${pathadd}`, sendData);
        });
        return;
    } catch (e) {
        console.log(e);
        e.response && toast.error(e.response.data.error);
        return;
    }
};

const submitPurchaseTour = (purchaseidx, dataList) => {
    try {
        dataList.forEach(async (data, idx) => {
            data.purchaseidx = purchaseidx;
            data.touridx = data.idx;
            data.tourstep = idx;
            await api.post("order/purchasetour/insert", data);
        });
    } catch (e) {
        console.log(e);
        e.response && toast.error(e.response.data.error);
        return;
    }
};

const initialize = () => {
    return {
        type: FORM_INITIALIZE,
    };
};

const errors = (errors) => {
    return {
        type: FORM_ERRORS,
        payload: errors,
    };
};

export default {
    init,
    changeValue,
    submit,
    submitAddData,
    submitPurchaseTour,
    initialize,
    errors,
};
