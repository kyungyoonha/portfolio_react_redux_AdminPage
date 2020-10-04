import {
    BOARD_FETCH,
    BOARD_SELECTED,
    BOARD_UPDATE,
    BOARD_DELETE,
    BOARD_INITIALIZE,
} from "../types";
import axios from "axios";

export const boardAction_fetch = (id) => async (dispatch) => {
    dispatch({
        type: BOARD_INITIALIZE,
    });
    try {
        const res = await axios.get(
            `http://localhost:3000/json/${id}.json`
            //     ?pageSize=${pageCtrl.pageSize}
            //     &currentPage=${pageCtrl.currentPage}
            //     &countryCtg=${pageCtrl.countryCtg}
            //     &searchKeyword=${pageCtrl.searchKeyword}
            //     &sort=${pageCtrl.sort}
        );

        dispatch({
            type: BOARD_FETCH,
            payload: res.data,
        });
    } catch (err) {
        console.error("boardAction_Fecth error: " + err);
    }
};

export const boardAction_selected = (selectedItem) => {
    return {
        type: BOARD_SELECTED,
        payload: selectedItem,
    };
};

export const boardAction_update = (id, newData) => async (dispatch) => {
    try {
        // await axios.post(`http://localhost:8000/${id}/update`, id);
        dispatch({
            type: BOARD_UPDATE,
            payload: newData,
        });
    } catch (e) {
        console.error("boardAction_update Error", e);
    }
};

export const boardAction_delete = (id, itemId) => async (dispatch) => {
    try {
        // await axios.post(`http://localhost:8000/${id}/delete`, id);
        dispatch({
            type: BOARD_DELETE,
            payload: itemId,
        });
    } catch (e) {
        console.error("boardAction_delete Error", e);
    }
};

export const boardAction_init = () => {
    return {
        type: BOARD_INITIALIZE,
    };
};
