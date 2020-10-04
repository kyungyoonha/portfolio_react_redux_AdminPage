import {
    BOARD_FETCH,
    BOARD_SELECTED,
    BOARD_UPDATE,
    BOARD_DELETE,
    BOARD_INITIALIZE,
} from "../types";

const INITIAL_STATE = {
    data: [],
    selectedItem: {},
    totalPage: 5,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BOARD_FETCH:
            return {
                ...state,
                data: action.payload.data,
                totalPage: action.payload.totalPage,
            };

        case BOARD_SELECTED:
            return {
                ...state,
                selectedItem:
                    state.selectedItem.id !== action.payload.id
                        ? action.payload
                        : {},
            };

        case BOARD_UPDATE:
            if (action.payload.id) {
                return {
                    ...state,
                    data: state.data.map((item) =>
                        item.id === action.payload.id ? action.payload : item
                    ),
                };
            } else {
                return {
                    ...state,
                    data: [action.payload, ...state.data],
                };
            }

        case BOARD_DELETE:
            return {
                ...state,
                data: state.data.filter((item) => item.id !== action.payload),
                selectedItem: {},
            };

        case BOARD_INITIALIZE:
            return INITIAL_STATE;

        default:
            return state;
    }
};
