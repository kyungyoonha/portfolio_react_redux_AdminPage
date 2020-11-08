import history from "../../history";
import api from "../../services/api";
import { toast } from "react-toastify";

import {
    BOARD_FETCH,
    BOARD_DETAIL,
    BOARD_SELECTED,
    BOARD_INSERT,
    BOARD_UPDATE,
    BOARD_DELETE,
    BOARD_ERRORS,
} from "../types";
import axios from "axios";

export const boardAction_fetch222 = (apiurl) => async (dispatch) => {
    try {
        const res = await api.get(apiurl);
        dispatch({
            type: "few",
            payload: res.data,
        });
    } catch (e) {
        console.log(e);
        e.response && toast.error(e.response.data.error);
    }
};

export const boardAction_fetch = (pageId) => async (dispatch, getState) => {
    const prevPageId = getState().board.pageId;
    try {
        if (prevPageId === pageId) {
            return;
        }
        const res = await axios.get(
            `http://localhost:3000/json/${pageId}.json`
            //     ?pageSize=${pageCtrl.pageSize}
            //     &currentPage=${pageCtrl.currentPage}
            //     &countryCtg=${pageCtrl.countryCtg}
            //     &searchKeyword=${pageCtrl.searchKeyword}
            //     &sort=${pageCtrl.sort}
        );

        dispatch({
            type: BOARD_FETCH,
            payload: {
                pageId: pageId,
                data: res.data.data,
                totalPage: res.data.totalPage,
            },
        });
    } catch (err) {
        console.error("boardAction_Fecth error: " + err);
    }
};

export const boardAction_detail = (pageId, id) => async (dispatch, state) => {
    try {
        const res = await axios.get(
            `http://localhost:3000/json/${pageId}.json`
        );

        dispatch({
            type: BOARD_DETAIL,
            payload: res.data.data.find((item) => item.idx === id),
        });
    } catch (e) {
        console.error("boardAction_update Error", e);
    }
};

export const boardAction_selected = (id) => {
    return {
        type: BOARD_SELECTED,
        payload: id,
    };
};

export const boardAction_update = (pageId, newData, images, audios) => async (
    dispatch
) => {
    try {
        dispatch({
            type: newData.idx ? BOARD_UPDATE : BOARD_INSERT,
            payload: newData,
        });
        history.goBack();
    } catch (e) {
        console.error("boardAction_update Error", e);
    }
};

export const boardAction_update222 = (apiurl, data) => async (dispatch) => {
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

export const boardAction_delete = (pageId, itemId) => async (dispatch) => {
    try {
        // await axios.post(`http://localhost:8000/${pageId}/delete`, itemId);
        dispatch({
            type: BOARD_DELETE,
            payload: itemId,
        });
    } catch (e) {
        console.error("boardAction_delete Error", e);
    }
};

export const boardAction_errors = () => {
    return {
        type: BOARD_ERRORS,
    };
};
