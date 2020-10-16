import {
    BOARD_FETCH,
    BOARD_DETAIL,
    BOARD_SELECTED,
    BOARD_INSERT,
    BOARD_EDIT,
    BOARD_DELETE,
} from "../types";
import randomKey from "../../util/randomKey";

const INITIAL_STATE = {
    pageId: "",
    data: [],
    detail: {},
    selectedId: "",
    totalPage: 5,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BOARD_FETCH:
            return {
                ...state,
                pageId: action.payload.pageId,
                data: action.payload.data,
                totalPage: action.payload.totalPage,
            };

        case BOARD_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };

        case BOARD_SELECTED:
            return {
                ...state,
                selectedId:
                    state.selectedId !== action.payload ? action.payload : "",
            };

        case BOARD_INSERT:
            return {
                ...state,
                data: [
                    {
                        ...action.payload,
                        idx: randomKey(),
                    },
                    ...state.data,
                ],
            };
        case BOARD_EDIT:
            return {
                ...state,
                data: state.data.map((item) =>
                    item.idx === action.payload.id ? action.payload : item
                ),
            };

        case BOARD_DELETE:
            return {
                ...state,
                data: state.data.filter((item) => item.idx !== action.payload),
                selectedId: "",
            };

        default:
            return state;
    }
};
