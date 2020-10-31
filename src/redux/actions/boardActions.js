import history from "../../history";
import api from "../../services";

import {
    BOARD_FETCH,
    BOARD_DETAIL,
    BOARD_SELECTED,
    BOARD_INSERT,
    BOARD_UPDATE,
    BOARD_DELETE,
    BOARD_INSERT_TYPE,
    BOARD_ERRORS,
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

export const boardAction_update = (pageId, newData, images, audios) => async (
    dispatch
) => {
    try {
        // const touridx = await axios.post(
        //     `http://localhost:8000/${pageId}/update`,
        //     newData
        // );
        // 이미지 전송
        // images && await axios.post(`http://localhost:8000/${pageId}/images`, {
        //     ...images,
        //     touridx,
        // });
        // 오디오 전송
        // audios && await axios.post(`http://localhost:8000/${pageId}/audios`, {
        //     ...audios,
        //     touridx,
        // });
        dispatch({
            type: newData.idx ? BOARD_UPDATE : BOARD_INSERT,
            payload: newData,
        });
        history.goBack();
    } catch (e) {
        console.error("boardAction_update Error", e);
    }
};

export const boardAction_update222 = (pageCtg, pageId, data) => async (
    dispatch
) => {
    try {
        let res, type;
        if (!data.idx) {
            res = await api.boardAPI.insertData(pageCtg, pageId, data);
            type = BOARD_INSERT;
        } else {
            res = await api.boardAPI.updateData(pageCtg, pageId, data);
            type = BOARD_UPDATE;
        }

        dispatch({
            type,
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

export const boardAction_insertType = (type) => {
    return {
        type: BOARD_INSERT_TYPE,
        payload: type,
    };
};

export const boardAction_errors = () => {
    return {
        type: BOARD_ERRORS,
    };
};
