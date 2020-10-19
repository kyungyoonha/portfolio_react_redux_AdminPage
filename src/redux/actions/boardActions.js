import history from "../../history";
import {
    BOARD_FETCH,
    BOARD_DETAIL,
    BOARD_SELECTED,
    BOARD_INSERT,
    BOARD_EDIT,
    BOARD_DELETE,
    BOARD_INSERT_TYPE,
} from "../types";
import axios from "axios";

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

export const boardAction_update = (pageId, newData) => async (dispatch) => {
    try {
        // await axios.post(`http://localhost:8000/${pageId}/update`, id);
        dispatch({
            type: newData.idx ? BOARD_EDIT : BOARD_INSERT,
            payload: newData,
        });

        history.goBack();
    } catch (e) {
        console.error("boardAction_update Error", e);
    }
};

export const boardAction_delete = (pageId, itemId) => async (dispatch) => {
    try {
        // await axios.post(`http://localhost:8000/${pageId}/delete`, id);
        dispatch({
            type: BOARD_DELETE,
            payload: itemId,
        });
    } catch (e) {
        console.error("boardAction_delete Error", e);
    }
};

export const boardAction_insertType = (type) => {
    return {
        type: BOARD_INSERT_TYPE,
        payload: type,
    };
};
