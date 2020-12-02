import history from "../../history";
import api from "../../services/api";
import { toast } from "react-toastify";

import {
    BOARD_FETCH,
    BOARD_SELECTED,
    BOARD_INSERT,
    BOARD_UPDATE,
    BOARD_DELETE,
    BOARD_ERRORS,
    BOARD_INITIALIZE,
} from "../types";

const fetch = (apiurl) => async (dispatch) => {
    try {
        const res = await api.get(apiurl);

        dispatch({
            type: BOARD_FETCH,
            payload: res.data,
        });
    } catch (e) {
        console.log(e);
        e.response && toast.error(e.response.data.error);
    }
};

const selected = (idx) => {
    return {
        type: BOARD_SELECTED,
        payload: idx,
    };
};

const update = (pageId, newData, images, audios) => async (dispatch) => {
    try {
        dispatch({
            type: newData.idx ? BOARD_UPDATE : BOARD_INSERT,
            payload: newData,
        });
        history.goBack();
    } catch (e) {
        console.error("update Error", e);
    }
};

const update222 = (apiurl, data) => async (dispatch) => {
    try {
        let pathadd = data.idx ? "update" : "insert";
        let res = await api.post(`${apiurl}/${pathadd}`, data);

        dispatch({
            type: data.idx ? BOARD_UPDATE : BOARD_INSERT,
            payload: res.data,
        });
    } catch (e) {
        // dispatch({
        //     type: BOARD_ERRORS,
        // });
    }
};

const deleteData = (pathname, idx) => async (dispatch) => {
    try {
        let res = await api.post(pathname + "/delete", { idx: idx });
        console.log(res);
        if (res.status === 200) {
            toast.success(res.data.message);

            dispatch({
                type: BOARD_DELETE,
                payload: idx,
            });
        }
    } catch (e) {
        console.log(e);
        e.response && toast.error(e.response.data.error);
    }
};

const errors = () => {
    return {
        type: BOARD_ERRORS,
    };
};

const initialize = () => {
    return {
        type: BOARD_INITIALIZE,
    };
};

export default {
    fetch,
    selected,
    update,
    update222,
    deleteData,
    errors,
    initialize,
};
